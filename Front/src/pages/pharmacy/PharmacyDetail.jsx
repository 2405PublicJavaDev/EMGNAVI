import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const PharmacySearch = () => {
    const [pharmacies, setPharmacies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('dutyName');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [options, setOptions] = useState([]);
    const [showAutoComplete, setShowAutoComplete] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hoveredOption, setHoveredOption] = useState(null);
    const [favorites, setFavorites] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const itemsPerPage = 10;
    const nav = useNavigate();
    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);

    const { userId, setUserId } = useContext(UserContext);

    const categories = [
        { value: 'dutyName', label: '기관명' },
        { value: 'dutyAddr', label: '주소' },
    ];

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/user/checkLogin', { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(true);
                    setUserId(data.userId);
                } else {
                    setIsLoggedIn(false);
                    setUserId(null);
                }
            } catch (error) {
                console.error('로그인 상태 확인 실패:', error);
                setIsLoggedIn(false);
                setUserId(null);
            }
        };

        checkLoginStatus();
    }, [setUserId]);

    useEffect(() => {
        if (isLoggedIn && userId) {
            fetchFavorites();
        }
    }, [isLoggedIn, userId]);

    useEffect(() => {
        fetchPharmacies(0);
    }, [favorites]);

    const fetchFavorites = async () => {
        try {
            const response = await fetch(`/api/pharmacy/favorites?userId=${userId}`);
            const data = await response.json();
            const favoritesMap = {};
            data.forEach(favorite => {
                favoritesMap[favorite.refNo] = true;
            });
            setFavorites(favoritesMap);
        } catch (error) {
            console.error('Failed to fetch favorites:', error);
        }
    };

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
                const updatedPharmacies = data.pharmacies.map(pharmacy => ({
                    ...pharmacy,
                    favorite: favorites[pharmacy.hpid] || false
                }));
                setPharmacies(updatedPharmacies);
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
                    value: item.VALUE,
                    label: searchType === 'dutyName' ? item.LABEL : item.LABEL,
                }));
                setOptions(newOptions);
                setShowAutoComplete(newOptions.length > 0);
            })
            .catch((error) => {
                console.error('Error fetching autocomplete options:', error);
                setOptions([]);
            });
    };

    const toggleFavorite = async (hpid, dutyName, dutyAddr, dutyTel1) => {
        if (!isLoggedIn) {
            alert("로그인 후 즐겨찾기 기능을 사용할 수 있습니다.");
            return;
        }

        try {
            if (favorites[hpid]) {
                await fetch(`/api/pharmacy/favorite?userId=${userId}&refNo=${hpid}`, { method: 'DELETE' });
            } else {
                await fetch('/api/pharmacy/favorite', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ userId, refNo: hpid, dutyName, dutyAddr, dutyTel1 })
                });
            }
            setFavorites(prevFavorites => ({
                ...prevFavorites,
                [hpid]: !prevFavorites[hpid]
            }));
            setPharmacies(prevPharmacies => 
                prevPharmacies.map(pharmacy => 
                    pharmacy.hpid === hpid 
                        ? { ...pharmacy, favorite: !pharmacy.favorite }
                        : pharmacy
                )
            );
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
            alert('즐겨찾기 처리 중 오류가 발생했습니다.');
        }
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
                const updatedPharmacies = data.pharmacies.map(pharmacy => ({
                    ...pharmacy,
                    favorite: favorites[pharmacy.hpid] || false
                }));
                setPharmacies(updatedPharmacies);
                setTotalPages(data.totalPages || 1);
                setCurrentPage(page);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error searching for pharmacy:', error);
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

        let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(0, endPage - maxVisiblePages + 1);
        }

        const visiblePages = pageNumbers.slice(startPage, endPage + 1);

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
                        className={`${
                            page === currentPage
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
        if (e.key === 'Enter') {
            handleSearch(0);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) =>
                prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
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
                                placeholder={`원하시는 ${searchType === 'dutyName' ? '기관' : '주소'}의 이름을 검색해 주세요`}
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
                                                    color: 'black',}}
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
                                            <th className="py-4">즐겨찾기</th>
                                            <th className="py-4">기관명</th>
                                            <th className="py-4">주소</th>
                                            <th className="py-4">전화번호</th>
                                            <th className="py-4">상세 정보</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {pharmacies.map((pharmacy) => (
                                            <tr key={pharmacy.hpid} className="border-b">
                                                <td className="py-4 font-roboto text-base text-black">
                                                    <button onClick={() => toggleFavorite(pharmacy.hpid, pharmacy.dutyName, pharmacy.dutyAddr, pharmacy.dutyTel1)}>
                                                        <img
                                                            src={pharmacy.favorite
                                                                ? '/img/medicine/goldonestar.png'
                                                                : '/img/medicine/greyonestar.png'
                                                            }
                                                            alt="즐겨찾기"
                                                            className="w-6 h-6 mx-auto"
                                                        />
                                                    </button>
                                                </td>
                                                <td className="py-4 font-roboto text-base text-black">
                                                    {pharmacy.dutyName || '정보 없음'}
                                                </td>
                                                <td className="py-4 font-roboto text-base text-black">
                                                    {pharmacy.dutyAddr || '정보 없음'}
                                                </td>
                                                <td className="py-4 font-roboto text-base text-black">
                                                    {pharmacy.dutyTel1 || '정보 없음'}
                                                </td>
                                                <td className="py-4">
                                                    <button
                                                        onClick={() => nav(`/pharmacy/detail/${pharmacy.hpid}`)}
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
                            <img src="/img/footer/logo.png" alt="응급NAVI" width="117" height="100" />
                            <div className="ml-4 text-xl font-bold">응급NAVI</div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원 | 대표전화: 1544-9970
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