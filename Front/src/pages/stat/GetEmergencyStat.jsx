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

        if (searchType === 'dutyName') {
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

        console.log(searchType+'&&'+queryParams);

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
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-[180px]">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-center text-gray-800 leading-tight font-NotoSerifTamilSlanted">
                            응급실 통계 검색
                        </h1>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex justify-center mb-6">
                            <select
                                value={searchType}
                                onChange={(e) => {
                                    setSearchType(e.target.value);
                                    setSearchQuery('');
                                    setOptions([]);
                                }}
                                className="border rounded-l-md px-3 py-2 text-sm text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {categories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>

                            <div className="relative flex-grow">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                    onFocus={() => setShowAutoComplete(true)}
                                    onBlur={handleInputBlur}
                                    onKeyDown={handleKeyDown}
                                    placeholder={`통계대상 ${searchType === 'dutyName' ? '병원' : '지역'}을 검색해 주세요`}
                                    className="border px-3 py-2 w-full text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {showAutoComplete && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-sm max-h-48 overflow-y-auto">
                                        {options.length > 0 ? (
                                            options.map((option, index) => (
                                                <li
                                                    key={option.value}
                                                    className={`p-2 hover:bg-gray-100 cursor-pointer text-sm ${index === focusedOptionIndex ? 'bg-gray-100' : ''
                                                        }`}
                                                    onClick={() => {
                                                        setSearchQuery(option.label);
                                                        setSelectedOption(option);
                                                        setShowAutoComplete(false);
                                                        handleSearch(0);
                                                    }}
                                                >
                                                    {option.label}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="p-2 text-gray-500 text-sm">검색 결과가 없습니다</li>
                                        )}
                                    </ul>
                                )}
                            </div>

                            <button
                                onClick={() => handleSearch()}
                                className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-700 transition duration-300"
                            >
                                검색
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-600">
                            검색조건: {searchType === 'dutyAddr' ? '지역' : '병원'} |
                            검색범위: {searchQuery !== '' ? searchQuery : searchType === 'dutyAddr' ? '전국' : '없음'}
                        </p>
                    </div>

                    {hospital && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">병원 상세 정보</h2>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                    <GetSketchMap latitude={hospital.wgs84Lat} longitude={hospital.wgs84Lon} placeName={hospital.dutyName} />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-6">
                                    <h3 className="text-lg font-semibold mb-2">{hospital.dutyName}</h3>
                                    <p className="text-gray-600 mb-1">주소: {hospital.dutyAddr}</p>
                                    <p className="font-bold mb-1">진료과목: {hospital.dgidIdName}</p>
                                    <p className="mb-1">전화번호: {hospital.dutyTel1}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">
                                {searchType === 'dutyAddr' ? '지역 ' : searchQuery} 잔여 응급병상 요일별 {searchType === 'dutyName' ? '평균' : '합계'}
                            </h2>
                            <Chart key={`DOW-${chartKey}`} searchType={searchType} statType="DOW" keyword={keyValue} />
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">
                                {searchType === 'dutyAddr' ? '지역 ' : searchQuery} 잔여 응급병상 시간별 {searchType === 'dutyName' ? '평균' : '합계'}
                            </h2>
                            <Chart key={`APDW-${chartKey}`} searchType={searchType} statType="HOD" keyword={keyValue} />
                        </div>


                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            {searchType === 'dutyAddr' ? '지역 ' : searchQuery} 잔여 응급병상 요일 및 오전/오후 {searchType === 'dutyName' ? '평균' : '합계'}
                        </h2>
                        <Chart key={`APDW2-${chartKey}`} searchType={searchType} statType="APDW" keyword={keyValue} />
                    </div>
                </div>
            </main>

            <div className="w-full mt-[100px] bg-black py-10">
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
    );
}
export default GetEmergencyStat;