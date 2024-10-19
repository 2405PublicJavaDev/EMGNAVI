import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PharmacySearch = () => {
    const [pharmacies, setPharmacies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('dutyName'); // 제품명 대신 기관명(dutyName)으로 변경
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
        { value: 'dutyName', label: '기관명' },
        { value: 'dutyAddr', label: '주소' },
        { value: 'dutyTel1', label: '전화번호' },
    ];

    const fetchPharmacies = (page = 0) => {
        setIsLoading(true);
        setError(null);

        fetch(`/api/pharmacy/list?page=${page}&size=${itemsPerPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPharmacies(data.pharmacies || []);
                setTotalPages(data.totalPages || 1);
                setCurrentPage(page);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('There was an error fetching the pharmacy list!', error);
                setError('Failed to fetch pharmacies');
                setIsLoading(false);
            });
    };

    const fetchAutoCompleteOptions = (inputValue) => {
        if (inputValue.length < 2) {
            setOptions([]);
            return;
        }

        fetch(`/api/pharmacy/autocomplete?query=${inputValue}&searchType=${searchType}`)
            .then((response) => response.json())
            .then((data) => {
                const newOptions = data.map((item) => ({
                    value: item.hpid,
                    label: searchType === 'dutyName' ? item.dutyName : searchType === 'dutyAddr' ? item.dutyAddr : item.dutyTel1,
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
            fetchPharmacies(0);
            return;
        }

        setIsLoading(true);
        setError(null);

        const queryParams = new URLSearchParams({
            [searchType]: searchQuery,
            page: page.toString(),
            size: itemsPerPage.toString(),
        });

        const url = `/api/pharmacy/search?${queryParams}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPharmacies(data.pharmacies || []);
                setTotalPages(data.totalPages || 1);
                setCurrentPage(page);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error searching for pharmacies:', error);
                setError('Failed to search pharmacies');
                setIsLoading(false);
            });
    };

    const handlePageChange = (newPage) => {
        if (searchQuery) {
            handleSearch(newPage);
        } else {
            fetchPharmacies(newPage);
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
            <div className="mr-[5px] flex justify-center mt-8 space-x-2">
                {currentPage > 0 && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold"
                    >
                        {'<'}
                    </button>
                )}

                {visiblePages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${page === currentPage
                                ? 'bg-white text-[#0b2d85] border-2 border-[#0b2d85]'
                                : 'bg-[#0b2d85] text-white'
                            } px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold`}
                    >
                        {page + 1}
                    </button>
                ))}

                {currentPage < totalPages - 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold"
                    >
                        {'>'}
                    </button>
                )}
            </div>
        );
    };

    useEffect(() => {
        fetchPharmacies(0);
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
            if (focusedOptionIndex >= 0 && focusedOptionIndex < options.length) {
                setSelectedOption(options[focusedOptionIndex]);
                setSearchQuery(options[focusedOptionIndex].label);
                setShowAutoComplete(false);
                handleSearch(0);
            }
        }
    };

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
            <div className="flex flex-col items-center justify-center min-h-[1100px] bg-white">
                <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[90px]">
                    <h1 className="text-[52px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                        원하시는 약국을 검색해 주세요
                    </h1>

                    <div className="flex justify-center mb-8">
                        <select
                            value={searchType}
                            onChange={(e) => {
                                setSearchType(e.target.value);
                                setSearchQuery('');
                                setOptions([]);
                            }}
                            className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]"
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
                                placeholder={`원하시는 ${searchType === 'dutyName' ? '기관명' : searchType === 'dutyAddr' ? '주소' : '전화번호'}을 검색해 주세요`}
                                className="border p-2 w-[360px] h-[36px] text-base leading-[20px] border-[#0000001a] text-black bg-white"
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
                                                className={`p-2 hover:bg-gray-100 cursor-pointer text-black text-base font-normal ${index === focusedOptionIndex ? 'bg-gray-100' : ''
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
                            className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md"
                        >
                            검색
                        </button>
                    </div>

                    <div className="overflow-auto w-full text-align-center">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-[500px] text-[70px] font-roboto text-black">
                                <p>약국 정보 불러오는 중...</p>
                            </div>
                        ) : error ? (
                            <div className="flex justify-center items-center h-[500px]">
                                <p className="text-4xl">에러 발생: {error}</p>
                            </div>
                        ) : pharmacies.length === 0 ? (
                            <div className="flex justify-center items-center h-[500px]">
                                <p className="text-4xl">검색 결과가 없습니다.</p>
                            </div>
                        ) : (
                            <table className="table-auto w-full border-collapse text-center shadow-lg rounded-lg border-color">
                                <thead className="bg-[#cccccc1a]">
                                    <tr>
                                        <th className="py-4">기관명</th>
                                        <th className="py-4">주소</th>
                                        <th className="py-4">전화번호</th>
                                        <th className="py-4">상세 정보</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {pharmacies.map((item, index) => (
                                        <tr key={item.hpid} className="border-b">
                                            <td className="py-4 font-roboto text-base text-black">{item.dutyName}</td>
                                            <td className="py-4 font-roboto text-base text-black">{item.dutyAddr}</td>
                                            <td className="py-4 font-roboto text-base text-black">{item.dutyTel1}</td>
                                            <td className="py-4">
                                                <button
                                                    onClick={() => nav(`/pharmacy/detail/${item.hpid}`)}
                                                    className="bg-[#0b2d85] text-white px-4 py-1 rounded-lg text-[14px] font-bold"
                                                >
                                                    상세 정보
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {!isLoading && !error && pharmacies.length > 0 && renderPageButtons()}
                </div>
            </div>

            <footer className="w-full bg-black text-white py-8 mt-10">
                <div className="flex justify-between items-center container mx-auto px-6">
                    <div className="flex items-center">
                        <img
                            src="/img/footer/logo.png"
                            alt="응급NAVI"
                            width="117"
                            height="100"
                        />
                        <div className="ml-4 text-xl font-bold">응급NAVI</div>
                    </div>
                    <div className="text-gray-400 text-sm">
                        서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원 | 대표전화:
                        1544-9970
                        <br />
                        © 2024 응급NAVI. All Rights Reserved.
                    </div>
                    <img src="/img/footer/group.png" alt="Group" width="145" height="34" />
                </div>
            </footer>
        </>
    );
};

export default PharmacySearch;
