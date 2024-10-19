import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import GetSketchMap from '../map/GetSketchMap';
import Chart from '../stat/Chart';


const GetEmergencyStat = () => {
    // HospitalSearch 에서 가져온 useState => 일단 다 가져왔는데 필요없는거 날릴 예정
    const [hospitals, setHospitals] = useState([]);
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
    const itemsPerPage = 10;
    const nav = useNavigate();
    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);

    const categories = [
        { value: 'dutyName', label: '병원명' },
        { value: 'dutyAddr', label: '병원주소' },
      ];

    const [hospital, setHospital] = useState(null);
    const { hpid } = useParams();

    const [chartDowData, setChartDowData] = useState([]);
    const [chartApdwData, setChartApdwData] = useState([]);
    const [chartHodData, setChartHodData] = useState([]);

    const fetchEmergencyStat = (page = 0) => {
        setIsLoading(true);
        setError(null);

        const fetchDowData = async () => {
            try {
                const response = await fetch(
                    `${rootUrl}/api/stat/getEmergencyStat?statType=${statType}${hpid ? `&hpid=${hpid}` : ""}`
                );
                // `http://127.0.0.1:8888/api/stat/getEmergencyStat?statType=APDW&hpid=A1100001`
                const json = await response.json();
                setChartDowData(json.data);
            } catch (error) {
                console.log("Error :", error);
            }
        };
        const fetchApdwData = async () => {
            try {
                const response = await fetch(
                    `${rootUrl}/api/stat/getEmergencyStat?statType=${statType}${hpid ? `&hpid=${hpid}` : ""}`
                );
                // `http://127.0.0.1:8888/api/stat/getEmergencyStat?statType=APDW&hpid=A1100001`
                const json = await response.json();
                setChartApdwData(json.data);
            } catch (error) {
                console.log("Error :", error);
            }
        };
        const fetchHodData = async () => {
            try {
                const response = await fetch(
                    `${rootUrl}/api/stat/getEmergencyStat?statType=${statType}${hpid ? `&hpid=${hpid}` : ""}`
                );
                // `http://127.0.0.1:8888/api/stat/getEmergencyStat?statType=APDW&hpid=A1100001`
                const json = await response.json();
                setChartHodData(json.data);
            } catch (error) {
                console.log("Error :", error);
            }
        };
        fetchDowData();
    
        fetch(`/api/hospital/list?page=${page}&size=${itemsPerPage}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setHospitals(data.hospitals || []);
            setTotalPages(data.totalPages || 1);
            setCurrentPage(page);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('There was an error fetching the hospital list!', error);
            setError('Failed to fetch hospitals');
            setIsLoading(false);
          });
    };

    useEffect(() => {
        // 병원검색 시 활용 예정
        fetch(`/api/hospital/detail/${hpid}`)
            .then((response) => response.json())
            .then((data) => setHospital(data))
            .catch((error) => console.error('Error fetching hospital details:', error));

    }, [hpid]);




    // if (!hospital) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="container mx-auto px-4 py-64">

                        {/* 통계 검색조건 섹션 */}

                        {/* 병원 상세 정보 섹션 */}
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
                                        {hospital.dutyHayn == 1 ?
                                        (
                                            <>
                                                <p className="mb-2">응급실번호: {hospital.dutyTel3}</p>
                                                <p>응급병상 요일별 평균</p>
                                                <div className="w-[95%]">
                                                    <Chart statType="DOW" hpid={hospital.hpid} />
                                                </div>
                                            </>
                                        ) :
                                        ('')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 통계 데이터 섹션 */}
                        <div className="mt-36">

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