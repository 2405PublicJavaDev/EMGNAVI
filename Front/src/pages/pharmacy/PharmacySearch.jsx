import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    const [isSearchActive, setIsSearchActive] = useState(false);
    const itemsPerPage = 10;
    const nav = useNavigate();
    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);

    const location = useLocation();

    const { userId } = useContext(UserContext);

    const categories = [
        { value: 'dutyName', label: '약국명' },
        { value: 'dutyAddr', label: '주소' },
    ];

    useEffect(() => {
        if (userId) {
            fetchFavorites();
        }
    }, [userId]);

    useEffect(() => {
        if (location.state) {
            const { searchType: newSearchType, searchQuery: newSearchQuery } = location.state;
            setSearchType(newSearchType);
            setSearchQuery(newSearchQuery);
            handleSearch(0, newSearchType, newSearchQuery);
        } else {
            fetchPharmacies(0);
        }
    }, [location]);

    useEffect(() => {
        if(!location.state){
            if (userId || Object.keys(favorites).length > 0) {
                fetchPharmacies(0);
            } else {
                fetchPharmacies(0);
            }
        }
    }, [favorites]);

    const fetchFavorites = async () => {
        try {
            const response = await fetch(`/api/pharmacy/favorites?userId=${userId}`);
            const data = await response.json();
            const favoritesMap = {};
            data.forEach(favorite => {
                favoritesMap[favorite.REFNO] = true;
            });
            setFavorites(favoritesMap);
        } catch (error) {
            console.error('Failed to fetch favorites:', error);
        }
    };

    const fetchPharmacies = (page = 0) => {
        setIsLoading(true);
        setError(null);
        setIsSearchActive(false);

        fetch(`/api/pharmacy/list?page=${page}&size=${itemsPerPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const updatedPharmacies = data.pharmacies
                    .map(pharmacy => ({
                        ...pharmacy,
                        favorite: favorites[pharmacy.hpid] || false
                    }))
                    .sort((a, b) => b.favorite - a.favorite);

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

    const toggleFavorite = async (hpid, dutyName, dutyAddr, dutyTel1, e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!userId) {
            alert("로그인 후 즐겨찾기 기능을 사용할 수 있습니다.");
            return;
        }
    
        try {
            let method = favorites[hpid] ? 'DELETE' : 'POST';
            let body = new URLSearchParams({ userId, refNo: hpid });
    
            if (method === 'POST') {
                body.append('dutyName', dutyName);
                body.append('dutyAddr', dutyAddr);
                body.append('dutyTel1', dutyTel1);
            }
    
            const response = await fetch(`/api/pharmacy/favorite`, {
                method,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });

            if (!response.ok) {
                throw new Error('Failed to update favorite');
            }
    
            setFavorites(prevFavorites => ({
                ...prevFavorites,
                [hpid]: !prevFavorites[hpid]
            }));
    
            if (isSearchActive) {
                // 검색 모드일 경우, 현재 목록 내에서만 업데이트
                setPharmacies(prevPharmacies =>
                    prevPharmacies.map(pharmacy =>
                        pharmacy.hpid === hpid
                            ? { ...pharmacy, favorite: !pharmacy.favorite }
                            : pharmacy
                    )
                );
            } else {
                // 일반 목록 모드일 경우, 정렬을 포함한 업데이트 수행
                setPharmacies(prevPharmacies =>
                    prevPharmacies.map(pharmacy =>
                        pharmacy.hpid === hpid
                            ? { ...pharmacy, favorite: !pharmacy.favorite }
                            : pharmacy
                    ).sort((a, b) => b.favorite - a.favorite)
                );
            }
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
            alert('즐겨찾기 처리 중 오류가 발생했습니다.');
        }
    };

    const handleSearch = (page = 0, type = searchType, query = searchQuery) => {
        if (!query) {
            fetchPharmacies(0);
            return;
        }

        setIsLoading(true);
        setError(null);
        setIsSearchActive(true);

        const queryParams = new URLSearchParams({
            [type]: query,
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
                    favorite: userId ? (favorites[pharmacy.hpid] || false) : false
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
        const serverPage = newPage;
        if (isSearchActive) {
            handleSearch(serverPage, searchType, searchQuery);
        } else {
            fetchPharmacies(serverPage);
        }
    };

    const renderPageButtons = () => {
        const maxVisiblePages = 10;
        const totalPageGroups = Math.ceil(totalPages / maxVisiblePages);
        const currentPageGroup = Math.floor(currentPage / maxVisiblePages);
    
        const startPage = currentPageGroup * maxVisiblePages;
        const endPage = Math.min(startPage + maxVisiblePages, totalPages);
    
        const visiblePages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
    
        return (
            <div className="flex justify-center mt-8">
                {currentPageGroup > 0 && (
                    <button
                        onClick={() => handlePageChange(startPage - 1)}
                        className="mx-1 w-8 h-8 border border-[#0b2d85] text-[#0b2d85] rounded transition duration-300 hover:bg-[#0b2d85] hover:text-white"
                    >
                        ◀
                    </button>
                )}
    
                {visiblePages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 w-8 h-8 rounded transition duration-300 ${
                            currentPage === page
                                ? "bg-[#0b2d85] text-white"
                                : "border border-[#0b2d85] text-[#0b2d85]"
                        }`}
                    >
                        {page + 1}
                    </button>
                ))}
    
                {currentPageGroup < totalPageGroups - 1 && (
                    <button
                        onClick={() => handlePageChange(endPage)}
                        className="mx-1 w-8 h-8 border border-[#0b2d85] text-[#0b2d85] rounded transition duration-300 hover:bg-[#0b2d85] hover:text-white"
                    >
                        ▶
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
            <div className="flex flex-col mt-[83px] items-center justify-center bg-white">
                <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[50px]">
                    <div className="flex justify-end mb-8 mt-7">
                        <select
                            value={searchType}
                            onChange={(e) => {
                                setSearchType(e.target.value);
                                setSearchQuery('');
                                setOptions([]);
                            }}
                            className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033] outline-0"
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
                                placeholder={`원하시는 ${searchType === 'dutyName' ? '약국' : '주소'}의 이름을 검색해 주세요`}
                                className="border p-2 w-[360px] h-[36px] text-sm leading-[20px] border-[#0000001a] text-black bg-white outline-0"
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
            key={option.value} // 여기에 고유한 key를 추가
            className={`p-2 hover:bg-gray-100 cursor-pointer text-black text-sm font-normal ${
                index === focusedOptionIndex ? 'bg-gray-100' : ''
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
    <li key="no-results" className="p-2 text-gray-500 text-sm font-normal">검색 결과가 없습니다</li>
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
                            <div className="flex justify-center items-center h-[500px] text-[70px] font-roboto text-black"></div>
                        ) : error ? (
                            <div className="flex justify-center items-center h-[500px]">
                                <p className="text-4xl">에러 발생: {error}</p>
                            </div>
                        ) : pharmacies.length === 0 ? (
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
                                                        <th className="py-4 pl-[87px] text-left text-sm font-semibold text-white uppercase tracking-wider w-1/4">기관명</th>
                                                        <th className="py-4 pr-[130px] text-sm text-sm font-semibold text-white uppercase tracking-wider w-1/2">위치</th>
                                                        <th className="py-4 pr-[100px] text-center text-sm font-semibold text-white uppercase tracking-wider  w-1/6">전화번호</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {pharmacies.map((pharmacy) => (
                                                        <tr key={pharmacy.hpid}
                                                            className="hover:bg-gray-50 transition-colors duration-200"
                                                            onClick={() => nav(`/pharmacy/detail/${pharmacy.hpid}`)}
                                                            style={{ cursor: 'pointer' }}>
                                                            <td className="py-4 px-6">
                                                                <div className="flex items-center space-x-3">
                                                                    <button
                                                                        onClick={(e) => toggleFavorite(pharmacy.hpid, pharmacy.dutyName, pharmacy.dutyAddr, pharmacy.dutyTel1, e)}
                                                                        className="flex-shrink-0 group"
                                                                    >
                                                                        <img
                                                                            src={pharmacy.favorite
                                                                                ? '/img/medicine/goldonestar.png'
                                                                                : '/img/medicine/greyonestar.png'}
                                                                            alt="즐겨찾기"
                                                                            className="w-6 h-6 transition-transform duration-200 transform hover:scale-110"
                                                                        />
                                                                    </button>
                                                                    <p className="text-sm font-medium text-gray-900 truncate">{pharmacy.dutyName || '정보 없음'}</p>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 pl-[100px] max-w-xl">
                                                                <span className="text-sm text-gray-600 truncate max-w-xs">
                                                                    {pharmacy.dutyAddr.length > 50
                                                                        ? pharmacy.dutyAddr.slice(0, 50) + '...'
                                                                        : pharmacy.dutyAddr}
                                                                </span>
                                                            </td>
                                                            <td className="py-4 pr-[100px]">
                                                                <span className="pl-[20px] py-1 inline-flex text-sm text-gray-600 truncate max-w-xs">{pharmacy.dutyTel1 || '정보 없음'}</span>
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

                    {!isLoading && !error && pharmacies.length > 0 && renderPageButtons()}
                </div>
            </div>

            <div className="absolute left-0 top-[1155px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
                <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                    <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                    <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png" alt="Footer Logo"></img>
                </div>
                <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png" alt="Footer Group"></img>
                <div className="absolute left-[404px] top-[137px] w-[621px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">2024 응급NAVI.</div>
                <div className="absolute left-[390px] top-[62px] w-[742px] h-[90px] flex">
                    <div className="absolute left-0 top-[54px] w-[742px] h-[36px] flex">
                        <div className="absolute left-0 top-0 w-[742px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-997<br /></div>
                        <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/copyright.png" alt="Copyright"></img>
                    </div>
                    <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                </div>
            </div>
        </>
    );
};

export default PharmacySearch;