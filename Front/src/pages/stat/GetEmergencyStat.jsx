import React, { useState, useEffect, useRef } from 'react';
import GetSketchMap from '../map/GetSketchMap';
import Chart from '../stat/Chart';


const GetEmergencyStat = () => {
    // HospitalSearch 에서 가져온 useState => 일단 다 가져왔는데 필요없는거 날릴 예정
    const [hospital, setHospital] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('dutyAddr');
    const [keyValue, setKeyValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState([]);
    const [showAutoComplete, setShowAutoComplete] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hoveredOption, setHoveredOption] = useState(null);
    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);

    // const [reloadChart, setReloadChart] = useState(false);  // 차트 재렌더링을 위한 상태

    const [chartKey, setChartKey] = useState(0);

    const categories = [
        { value: 'dutyAddr', label: '지역' },
        { value: 'dutyName', label: '병원' },
      ];

    // 검색어 자동완성 기능
    const fetchAutoCompleteOptions = (inputValue) => {
        if (inputValue.length < 2) {
          setOptions([]);
          return;
        }
        
        fetch(`/api/hospital/autocomplete?query=${inputValue}&searchType=${searchType}`)
          .then((response) => response.json())
          .then((data) => {
            console.log('Autocomplete data:', data);
            const newOptions = data.map((item) => ({
              value: item.hpid,
              label: searchType === 'dutyName' ? item.DUTYNAME : item.DUTYADDR,
            }));
            setOptions(newOptions);
            setShowAutoComplete(newOptions.length > 0);
          })
          .catch((error) => {
            console.error('Error fetching autocomplete options:', error);
            setOptions([]);
          });
      };

    // 검색어 자동완성 클릭 이벤트 핸들러
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

    // 검색어 자동완성 방향키 이벤트 핸들러
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

    // 자동완성 입력값 변경 핸들러
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setSelectedOption(null);
        setHoveredOption(null);
        fetchAutoCompleteOptions(value);
        setFocusedOptionIndex(-1);
    };
    
    // 검색창에 자동완성 데이터를 넣어주는 핸들러
    const handleInputBlur = () => {
        setTimeout(() => {
            if (hoveredOption) {
                setSearchQuery(hoveredOption.label);
                setSelectedOption(hoveredOption);
            }
            setShowAutoComplete(false);
        }, 200);
    };

    //////////////////////////////////////

    const handleSearch = () => {
        
        // setIsLoading(true);
        // setError(null);

        
    
        const queryParams = new URLSearchParams({
          [searchType]: searchQuery,
        });

        if(searchType === 'dutyName'){
            const url = `/api/hospital/search?${queryParams}`;
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
                setHospital(data.hospitals[0]);
                setKeyValue(data.hospitals[0].hpid);
                // setIsLoading(false);
              })
              .catch((error) => {
                console.error('Error searching for hospital:', error);
                setError('Failed to search hospitals');
                // setIsLoading(false);
              });
        }
        else {
            setHospital(null);
            setKeyValue(searchQuery);
        }

        // reloadChart 상태를 변경하여 차트가 다시 로드되도록 설정
        // setReloadChart(prev => !prev);
        setChartKey(prevKey => prevKey + 1);
    
      };

    // useEffect(() => {
    //     // 병원검색 시 활용 예정
    //     fetch(`/api/hospital/detail/${hpid}`)
    //         .then((response) => response.json())
    //         .then((data) => setHospital(data))
    //         .catch((error) => console.error('Error fetching hospital details:', error));

    // }, [hpid]);

    ///////////////////////////////////////


    // if (!hospital) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="container mx-auto px-4 py-64">

                        {/* 통계 검색조건 섹션 */}

                        <h1 className="text-[52px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                            통계 검색조건을 입력해 주세요
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
                                placeholder={`통계대상 ${searchType === 'dutyName' ? '병원' : '지역'}을 검색해 주세요`}
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
                                        className={`p-2 hover:bg-gray-100 cursor-pointer text-black text-base font-normal ${
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
                                    <li className="p-2 text-gray-500 text-base font-normal">검색 결과가 없습니다</li>
                                )}
                                </ul>
                            )}
                            </div>

                            <button
                            onClick={() => handleSearch()}
                            className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md"
                            >
                            검색
                            </button>
                        </div>

                        {/* 현재의 검색 타입 및 검색대상 표시 섹션 */}
                        <h1 className="text-[36px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                            검색조건 : {searchType === 'dutyAddr' ? ('지역') : ('병원')} 검색범위 : {searchQuery !== '' ? (searchQuery) : searchType === 'dutyAddr' ? ('전국') : ('없음')}
                        </h1>

                        {/* 병원 상세 정보 섹션 */}
                        {hospital ? (
                            <div className="mb-12">
                                <h1 className="text-3xl font-bold mb-6">병원 상세 정보</h1>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex mb-4">
                                        <GetSketchMap  latitude={hospital.wgs84Lat} longitude={hospital.wgs84Lon} placeName={hospital.dutyName}/>
                                        <div className='max-w-[700px] ml-[50px]'>
                                            <h2 className="text-2xl font-semibold mb-2">{hospital.dutyName}</h2>
                                            <p className="text-gray-600 mb-2">주소: {hospital.dutyAddr}</p>
                                            <p className="font-bold mb-2">진료과목: {hospital.dgidIdName}</p>
                                            <p className="mb-2">전화번호: {hospital.dutyTel1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ('')}

                        {/* 통계 데이터 섹션 */}
                        <div className="mt-36">
                            <p className="mt-[100px] text-[30px] font-bold mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                                {searchType === 'dutyAddr' ? ('지역 ') : (searchQuery)} 잔여 응급병상 요일별 {searchType === 'dutyName' ? (" 평균") : (" 합계")}
                            </p>
                            <Chart key={`DOW-${chartKey}`} searchType={searchType} statType="DOW" keyword={keyValue} />
                            <p className="mt-[100px] text-[30px] font-bold mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                                {searchType === 'dutyAddr' ? ('지역 ') : (searchQuery)} 잔여 응급병상 요일 및 오전/오후 {searchType === 'dutyName' ? (" 평균") : (" 합계")}
                            </p>
                            <Chart key={`APDW-${chartKey}`} searchType={searchType} statType="APDW" keyword={keyValue} />
                            <p className="mt-[100px] text-[30px] font-bold mb-8 leading-[48px] font-NotoSerifTamilSlanted">
                                {searchType === 'dutyAddr' ? ('지역 ') : (searchQuery)} 잔여 응급병상 시간별 {searchType === 'dutyName' ? (" 평균") : (" 합계")}
                            </p>
                            <Chart key={`HOD-${chartKey}`} searchType={searchType} statType="HOD" keyword={keyValue} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <footer className="w-full bg-black text-white py-8 mt-auto">
                <div className="container mx-auto px-6 flex justify-between items-center">
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

export default GetEmergencyStat;