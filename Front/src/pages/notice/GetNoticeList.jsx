import { useContext, useEffect, useState, useRef } from 'react'
import Truncate from 'react-truncate';
import parse, { domToReact } from 'html-react-parser';
import { formatDate } from '../common/dateUtil';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

const GetNoticeList = () => {

  const [notices, setNotices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title'); // 'title' 또는 'writer'
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
    { value: 'title', label: '제목' },
    { value: 'writer', label: '작성자' },
  ];

  const { userId } = useContext(UserContext);

  const fetchNotices = (page = 0) => {

    setIsLoading(true);
    setError(null);

    // 페이지와 검색어 기반으로 데이터 요청
    fetch(`/api/notice/list?page=${page}&size=${itemsPerPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log(response.json().notices);
        return response.json();
      })
      .then((data) => {
        setNotices(data.notices || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the notice list!', error);
        setError('Failed to fetch notices');
        setIsLoading(false);
      });
  };

  const fetchAutoCompleteOptions = (inputValue) => {
    if (inputValue.length < 2) {
      setOptions([]);
      return;
    }

    fetch(`/api/notice/autocomplete?query=${inputValue}&searchType=${searchType}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Autocomplete data:', data);
        const newOptions = data.map((item) => ({
          value: item.NOTICEID,
          label: searchType === 'title' ? item.NOTICETITLE : item.WRITERID,
        }));
        setOptions(newOptions);
        setShowAutoComplete(newOptions.length > 0);
      })
      .catch((error) => {
        console.error('Error fetching autocomplete options:', error);
        setOptions([]);
      });
  };

  useEffect(() => {
    if (options.length > 0) {
      console.log('자동완성 리스트');
      console.log(options);
    }
  }, [options]);

  useEffect(() => {
    fetchNotices(currentPage);
  }, [currentPage]);

  const handleSearch = (page = 0) => {
    if (!searchQuery) {
      fetchNotices(0);
      return;
    }

    setIsLoading(true);
    setError(null);

    const queryParams = new URLSearchParams({
      [searchType]: searchQuery,
      page: page.toString(),
      size: itemsPerPage.toString(),
    });

    const url = `/api/notice/search?${queryParams}`;
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
        setNotices(data.notices || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error searching for notice:', error);
        setError('Failed to search notices');
        setIsLoading(false);
      });
  };




  const handlePageChange = (newPage) => {
    if (searchQuery) {
      handleSearch(newPage);
    } else {
      fetchNotices(newPage);
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
        {currentPage > 1 && (
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

  // 블록 요소 제거 함수
  const blockToInline = (html) => {
    const blockElements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];

    return parse(html, {
      replace: (domNode) => {
        // if (domNode.name === 'div' || domNode.name === 'p' || domNode.name === 'h1' || domNode.name === 'li') {
        if (blockElements.includes(domNode.name)) {
          return (
            <>
              <span>{domToReact(domNode.children)}</span>
              <br />
            </>
          );
        }
      }
    });
  };


  //////////////////////////////

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
      if (focusedOptionIndex >= 0 && focusedOptionIndex < options.length) {
        setSelectedOption(options[focusedOptionIndex]);
        setSearchQuery(options[focusedOptionIndex].label);
        setShowAutoComplete(false);
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

  ////////////////////////////////////////////



  // 삭제 버튼 핸들러
  const handleDeleteBtn = (noticeId) => {

    const url = `/api/notice/delete?noticeId=${noticeId}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('data: ' + data);
        if (data === 1) {
          //성공 처리
          console.log('공지사항 삭제 성공');
          alert('공지사항 삭제 성공');
          nav('/notice/getNoticeList');
        } else {
          console.log('공지사항 삭제 실패');
          alert('공지사항 삭제 실패');
        }
      })
      .catch(error => {
        console.error('Error fetching notice data:', error);
      });
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[100%] relative">



        <div className="w-[100%]">
          <div className="w-[100%] mt-[124px] left-0">
            <div className="relative">
              <div className="w-[100%] h-[194px] top-0 left-0 bg-[#0b2d85]">
                <div className="w-[145px] h-[38px] top-[38px] left-[335px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[normal] whitespace-nowrap absolute tracking-[0]">
                  공지사항
                  {userId === 'admin' && (
                    <button
                      onClick={() => nav('/notice/postNotice')}
                      className="ml-[30px] mt-[5px] w-[100px] h-[40px] bg-[#f3f5f9] border border-[#e3e9ef] rounded-md text-lg font-medium text-[#000] hover:bg-gray-200 transition-colors duration-200"
                    >
                      등록
                    </button>
                  )}
                </div>
              </div>
              <div id='main' className="w-[100%] mt-[-75px]">
                <div className="w-[1300px] ml-[310px]">

                  <div className="bg-white border-t border-solid border-[#e5e7eb] p-10 pt-3 rounded-t-lg min-h-[700px] shadow-lg">
                    {notices && notices.length > 0 ? (
                      <div>
                        {notices.map((notice) => (
                          <div id='div0' key={notice.noticeId} className="bg-white border-b border-gray-200 py-6 flex transition-all duration-300 hover:shadow-lg">
                            <div id='div1' className="flex-grow">
                              <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => nav(`/notice/getNoticeDetail?noticeId=${notice.noticeId}`)}>
                                {notice.noticeTitle}
                              </h2>
                              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                                <span>{notice.writerId}</span>
                                <span>&nbsp;|&nbsp;</span>
                                <span>{formatDate(notice.noticeDate)}</span>
                              </div>
                              <div className="mt-2">
                                <Truncate lines={3} ellipsis={<span>... <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => nav(`/notice/getNoticeDetail?noticeId=${notice.noticeId}`)}>[상세보기]</span></span>}>
                                  {blockToInline(notice.noticeContents)}
                                </Truncate>
                              </div>
                            </div>
                            {userId === 'admin' ? (
                              <div className="flex space-x-4 my-auto">
                                <button onClick={() => nav(`/notice/putNotice?noticeId=${notice.noticeId}`)} className="w-[100px] h-[35px] bg-[#f3f5f9] border border-solid border-[#e3e9ef] rounded-md text-[14px] font-medium text-[#000] hover:bg-[#e1e7ec]">수정</button>
                                <button onClick={() => handleDeleteBtn(notice.noticeId)} className="w-[100px] h-[35px] bg-[#0b2d85] rounded-md text-[14px] font-medium text-[#fff] hover:bg-[#0a3b6b]">삭제</button>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ padding: '20px', textAlign: 'center', fontSize: '16px', color: '#999' }}>
                        조회된 결과가 없습니다.
                      </div>
                    )}
                    {/* 페이지네이션 */}
                    {renderPageButtons()}

                    {/* 검색창 */}
                    <div className="mt-10 flex justify-center mb-8">
                      <select
                        value={searchType}
                        onChange={(e) => {
                          setSearchType(e.target.value);
                          setSearchQuery('');
                          setOptions([]);
                        }}
                        className="border p-2 rounded-l-md w-[90px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033] focus:outline-none focus:ring focus:ring-blue-500"
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
                          placeholder={`공지사항의 ${searchType === 'title' ? '제목' : '내용'}으로 검색`}
                          className="border p-2 w-[360px] h-[36px] text-base leading-[20px] border-[#0000001a] text-black bg-white focus:outline-none focus:ring focus:ring-blue-500"
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
                                  key={`option-${index}`}
                                  className={`p-2 hover:bg-gray-100 cursor-pointer text-black text-base font-normal ${index === focusedOptionIndex ? 'bg-gray-100' : ''}`}
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
                              <li className="p-2 text-gray-500 text-base font-normal">검색 결과가 없습니다</li>
                            )}
                          </ul>
                        )}
                      </div>

                      <button
                        onClick={() => handleSearch(0)}
                        className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md hover:bg-[#0a3b6b]"
                      >
                        검색
                      </button>
                    </div>
                  </div>


                </div>
              </div>

              <div className="w-full bg-black py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
                  <div className="mb-8 md:mb-0">
                    <img className="w-[117px] h-[100px]" src="/img/footer/logo.png" alt="Logo" />
                    <div className="mt-2 text-2xl font-black text-[#333] font-['Advent_Pro']">응급NAVI</div>
                  </div>

                  <div className="flex flex-col max-w-[638px]">
                    <div className="mb-4 text-sm font-bold text-[#686868] font-['Agdasima']">
                      이용약관              개인정보처리방침
                    </div>
                    <div className="text-sm leading-relaxed font-bold text-[#686868] font-['Agdasima']">
                      서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970
                      <br />
                      <span className="flex items-center">
                        <img className="w-2 h-2 mr-1" src="/img/footer/copyright.png" alt="Copyright" />
                        2024 응급NAVI.
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-0">
                    <img className="w-[145px] h-[34px]" src="/img/footer/group.png" alt="Group" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetNoticeList