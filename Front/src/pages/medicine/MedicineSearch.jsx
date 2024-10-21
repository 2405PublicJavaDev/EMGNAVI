import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicineSearch = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('itemName');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [options, setOptions] = useState([]);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const itemsPerPage = 10;
  const nav = useNavigate();
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);

  const categories = [
    { value: 'itemName', label: '제품명' },
    { value: 'entpName', label: '업체명' },
  ];

  const fetchMedicines = (page = 0) => {
    setIsLoading(true);
    setError(null);

    fetch(`/api/medicine/list?page=${page}&size=${itemsPerPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMedicines(data.medicines || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the medicine list!', error);
        setError('Failed to fetch medicines');
        setIsLoading(false);
      });
  };

  const fetchAutoCompleteOptions = (inputValue) => {
    if (inputValue.length < 2) {
      setOptions([]);
      return;
    }

    fetch(`/api/medicine/autocomplete?query=${inputValue}&searchType=${searchType}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Autocomplete data:', data);
        const newOptions = data.map((item) => ({
          value: item.ITEMSEQ,
          label: searchType === 'itemName' ? item.ITEMNAME : item.ENTPNAME,
        }));
        setOptions(newOptions);
        setShowAutoComplete(newOptions.length > 0);
      })
      .catch((error) => {
        console.error('Error fetching autocomplete options:', error);
        setOptions([]);
      });
  };

  const handleSearch = (page = 0) => {
    if (!searchQuery) {
      fetchMedicines(0);
      return;
    }

    setIsLoading(true);
    setError(null);

    const queryParams = new URLSearchParams({
      [searchType]: searchQuery,
      page: page.toString(),
      size: itemsPerPage.toString(),
    });

    const url = `/api/medicine/search?${queryParams}`;
    console.log(`Sending request to: ${url}`);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Received data:', data);
        setMedicines(data.medicines || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error searching for medicine:', error);
        setError('Failed to search medicines');
        setIsLoading(false);
      });
  };

  const handlePageChange = (newPage) => {
    if (searchQuery) {
      handleSearch(newPage);
    } else {
      fetchMedicines(newPage);
    }
  };

  const renderPageButtons = () => {
    const maxVisiblePages = 10;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

    const visiblePages = pageNumbers.slice(
      Math.floor(currentPage / maxVisiblePages) * maxVisiblePages,
      Math.floor(currentPage / maxVisiblePages) * maxVisiblePages + maxVisiblePages
    );

    return (
      <div className="flex justify-center mt-8">
        {currentPage > 0 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="mx-1 w-8 h-8 border border-[#0b2d85] text-[#0b2d85] rounded transition duration-300 hover:bg-[#0b2d85] hover:text-white"
          >
            ◀
          </button>
        )}

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 w-8 h-8 rounded transition duration-300 ${currentPage === page
              ? "bg-[#0b2d85] text-white"
              : "border border-[#0b2d85] text-[#0b2d85]"
              }`}
          >
            {page + 1}
          </button>
        ))}

        {currentPage < totalPages - 1 && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="mx-1 w-8 h-8 border border-[#0b2d85] text-[#0b2d85] rounded transition duration-300 hover:bg-[#0b2d85] hover:text-white"
          >
            ▶
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    fetchMedicines(0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autoCompleteRef.current && !autoCompleteRef.current.contains(event.target)) {
        setShowAutoComplete(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedOptionIndex((prevIndex) =>
        prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchQuery.trim() === '') {
        fetchMedicines(0); // 검색어가 없으면 기본 데이터 호출
      } else if (focusedOptionIndex >= 0 && focusedOptionIndex < options.length) {
        setSelectedOption(options[focusedOptionIndex]);
        setSearchQuery(options[focusedOptionIndex].label);
        setShowAutoComplete(false);
        handleSearch(0);
      } else {
        handleSearch(0);
      }
    }
  };


  useEffect(() => {
    if (focusedOptionIndex >= 0 && focusedOptionIndex < options.length) {
      setHoveredOption(options[focusedOptionIndex]);
      setSearchQuery(options[focusedOptionIndex].label);
    }
  }, [focusedOptionIndex, options]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSelectedOption(null);
    setHoveredOption(null);
    fetchAutoCompleteOptions(value);
    setFocusedOptionIndex(-1);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (hoveredOption) {
        setSearchQuery(hoveredOption.label);
        setSelectedOption(hoveredOption);
      }
      setShowAutoComplete(false);
    }, 200);
  };

  return (
    <>
      <div className="flex flex-col mt-[83px] items-center justify-center flex-grow bg-white">
        <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[50px]">
          <div className="flex justify-end mb-8 mt-7">
            <select
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value);
                setSearchQuery('');
                setOptions([]);
              }}
              className="border p-2 rounded-l-md w-[95px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033] outline-0"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <div className="relative" style={{ zIndex: 1000 }}>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowAutoComplete(true)}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                placeholder={`원하시는 ${searchType === 'itemName' ? '제품' : '업체'}의 이름을 검색해 주세요`}
                className="border p-2 w-[360px] h-[36px] text-sm leading-[20px] border-[#0000001a] text-black bg-white"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              {showAutoComplete && (
                <ul
                  ref={autoCompleteRef}
                  className="absolute z-[9999] w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto"
                  style={{
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {options.length > 0 ? (
                    options.map((option, index) => (
                      <li
                        key={option.value}
                        className={`p-2 hover:bg-gray-100 cursor-pointer text-black text-sm font-normal ${index === focusedOptionIndex ? 'bg-gray-100' : ''
                          }`}
                        style={{
                          color: 'black',
                        }}
                        onClick={() => {
                          setSearchQuery(option.label);
                          setSelectedOption(option);
                          setShowAutoComplete(false);
                          handleSearch(0);
                        }}
                        onMouseEnter={() => {
                          setFocusedOptionIndex(index);
                          setHoveredOption(option);
                          setSearchQuery(option.label);
                        }}
                        onMouseLeave={() => {
                          if (!selectedOption) {
                            setSearchQuery(inputRef.current.value);
                          }
                        }}
                      >
                        {option.label}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500 text-sm font-normal">검색 결과가 없습니다</li>
                  )}
                </ul>
              )}
            </div>

            <button
              onClick={() => handleSearch(0)}
              className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md"
            >
              검색
            </button>
          </div>

          <div className="overflow-auto w-full text-align-center">
            {isLoading ? (
              <div className="flex justify-center items-center h-[500px] text-[70px] font-roboto text-black">
                {/* <p>의약품 정보 불러오는 중...</p> */}
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-[500px]">
                <p className="text-4xl">에러 발생: {error}</p>
              </div>
            ) : medicines.length === 0 ? (
              <div className="flex justify-center items-center h-[500px]">
                <p className="text-4xl">검색 결과가 없습니다.</p>
              </div>
            ) : (
              <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-[#0b2d85] from-blue-600 to-blue-800">
                          <tr>
                            <th className="py-4 pl-[87px] text-left text-sm font-semibold text-white uppercase tracking-wider">업체명</th>
                            <th className="py-4 pl-[302px] text-left text-sm font-semibold text-white uppercase tracking-wider">제품명</th>
                            <th className="py-4 pl-[33px] text-left text-sm font-semibold text-white uppercase tracking-wider">공개일자</th>
                            <th className="py-4"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {medicines.map((item, index) => (
                            <tr key={item.itemSeq}
                              className="hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => nav(`/medicine/detail/${item.itemSeq}`)}
                              style={{ cursor: 'pointer' }}>
                              {/* <td className="py-4 font-roboto text-base text-black">
                                {currentPage * itemsPerPage + index + 1}
                              </td> */}
                              <td className="py-4 px-6">
                                <span className="text-sm text-gray-600 truncate max-w-xs ml-[40px]">{item.entpName}</span>
                              </td>
                              <td className="py-4 pr-[120px] text-center">
                                <span className="text-sm text-gray-600 truncate max-w-xs ml-[40px]">
                                  {item.itemName.length > 20
                                    ? item.itemName.slice(0, 20) + '...'
                                    : item.itemName}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="text-sm text-gray-600 truncate max-w-xs">{item.openDe.split(' ')[0]}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!isLoading && !error && medicines.length > 0 && renderPageButtons()}
        </div>
      </div>

      <div className="absolute left-0 top-[1155px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
        <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
          <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
          <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png"></img>
        </div>
        <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png"></img>
        <div className="absolute left-[404px] top-[137px] w-[621px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">2024 응급NAVI.</div>
        <div className="absolute left-[390px] top-[62px] w-[742px] h-[90px] flex">
          <div className="absolute left-0 top-[54px] w-[742px] h-[36px] flex">
            <div className="absolute left-0 top-0 w-[742px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-997<br /></div>
            <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/copyright.png"></img>
          </div>
          <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
        </div>
      </div>
    </>
  );
};

export default MedicineSearch;