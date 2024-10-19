import React, { useEffect, useState } from "react";
import { TableVirtuoso } from "react-virtuoso";
import { TableContainer, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';  // Material-UI import
import Chart from "../stat/Chart";

const { kakao } = window;

// 스크롤 페이징 (MUI Table)
const TableComponents = {
    Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
    Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
    TableRow: (props) => <TableRow {...props} />,  // 정의된 TableRow 사용
};
// displayName을 추가(작성 안해도 되는데 Component definition is missing display name 문구 떠있어서 추가함)
TableComponents.Scroller.displayName = 'TableScroller';
TableComponents.Table.displayName = 'Table';
TableComponents.TableBody.displayName = 'TableBody';
TableComponents.TableRow.displayName = 'TableRow';

function GetEmergencyMap() {

    // 병원 데이터를 저장할 State 선언
    const [hospitals, setHospitals] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [map, setMap] = useState(null);
    const [circle, setCircle] = useState(null);
    const [zoomControl] = useState(new kakao.maps.ZoomControl());
    const [searchRadius, setSearchRadius] = useState(1000);     // 거리 기본 단위는 1m이며, 검색 반경 초기값은 1km로 되어있음

    const [myPosition, setMyPosition] = useState(null);
    const [positions, setPosition] = useState([]);
    const addMarkerPosition = (newPosition) => {
        setPosition(prev => [...prev, newPosition]);
    };
    const [infoWindows, setInfoWindow] = useState([]);
    const addInfoWindow = (newInfoWindow) => {
        setInfoWindow(prev => [...prev, newInfoWindow]);
    };

    useEffect(() => {

        // 현재 위치를 받아오는 함수
        function onGeoOkay(position) {
            // console.log(position);

            // 위도 경도를 받아오는 부분
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            // 위도, 경도를 state에 저장
            setLatitude(lat);
            setLongitude(lng);

        }

        function onGeoError() {
            alert("I can't find you. No weather for you.");
        }

        navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);

    }, []);


    useEffect(() => {
        if (latitude && longitude) {
            // 카카오맵을 초기화하는 부분
            if (!map) {
                const container = document.getElementById('map');
                const options = {
                    // 현재 위치에 지도 위치
                    center: new kakao.maps.LatLng(latitude, longitude),
                    level: 4
                };
                setMap(new kakao.maps.Map(container, options));
            }
        }
    }, [latitude, longitude]);

    useEffect(() => {
        if (searchRadius && latitude && longitude) {
            if (hospitals) {
                setHospitals(null);
            }
            fetch(`http://127.0.0.1:8888/api/map/getAroundEmgRoom?latitude=${latitude}&longitude=${longitude}&distance=${searchRadius}`)
                .then(response => response.json())
                .then(data => {
                    setHospitals(data.data); // 받아온 병원 데이터를 State에 저장
                })
                .catch(error => {
                    console.error('Error fetching hospital data:', error);
                });
            // console.log('hospitals:' + hospitals.length);

            // console.log('positions:' + positions.length)
        }
    }, [searchRadius, latitude, longitude]);

    useEffect(() => {
        if (map && latitude && longitude) {
            // 기존에 그려진 내 위치 마커가 있으면 제거
            if (myPosition) {
                myPosition.setMap(null);
            }
            // 현재 위치에 마커 표시
            let markerPosition = new kakao.maps.LatLng(latitude, longitude);
            setMyPosition(
                new kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                })
            );

            // 기존에 그려진 원이 있으면 제거
            if (circle) {
                circle.setMap(null);
            }
            // 새로운 원 객체를 생성
            const newCircle = new kakao.maps.Circle({
                center: new kakao.maps.LatLng(latitude, longitude), //원의 중심 좌표
                radius: searchRadius,                                         // 미터 단위의 원의 반지름
                strokeWeight: 5,                                    // 선의 두께
                strokeColor: '#75B8FA',                             // 선의 색깔
                strokeOpacity: 1,                                   // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
                strokeStyle: 'dashed',                              // 선의 스타일
                fillColor: '#CFE7FF',                               // 채우기 색깔
                fillOpacity: 0.1                                    // 채우기 불투명도
            });
            setCircle(newCircle);
            // 설정한 원을 지도에 표시
            newCircle.setMap(map);
            // console.log('searchRadius:' + searchRadius);

            // 마커를 새로 그리기 전에 기존 마커를 제거
            positions.forEach(position => {
                position.setMap(null);
            });
            // 마커를 새로 그리기 전에 기존 인포윈도우를 제거
            infoWindows.forEach(infoWindow => {
                infoWindow.setMap(null);
            });

            map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);

        }
    }, [map, latitude, longitude]);

    // 병원 데이터를 이용해 마커 표시하기
    useEffect(() => {
        if (map && hospitals && hospitals.length > 0) {
            console.log(hospitals);

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            hospitals.forEach(hospital => {
                console.log(hospital.dutyName, hospital.wgs84Lat, hospital.wgs84Lon);

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(hospital.wgs84Lat, hospital.wgs84Lon), // 마커를 표시할 위치
                    text: hospital.hvec,
                    // title: hospital.dutyName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage, // 마커 이미지 
                });
                addMarkerPosition(marker);

                // 마커의 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: hospital.dutyName + '(응급병상:' + hospital.hvec + '석)'
                });
                addInfoWindow(infowindow);

                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
            });
        }
    }, [hospitals]);

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function () {
            infowindow.close();
        };
    }

    // searchRadius 변경을 감지하여 동작하는 useEffect
    useEffect(() => {
        if (map) {
            // console.log('mapLevel:' + map.getLevel());

            if (circle) {
                circle.setMap(null);
            }

            const newCircle = new kakao.maps.Circle({
                center: new kakao.maps.LatLng(latitude, longitude), //원의 중심 좌표
                radius: searchRadius,                                         // 미터 단위의 원의 반지름
                strokeWeight: 5,                                    // 선의 두께
                strokeColor: '#75B8FA',                             // 선의 색깔
                strokeOpacity: 1,                                   // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
                strokeStyle: 'dashed',                              // 선의 스타일
                fillColor: '#CFE7FF',                               // 채우기 색깔
                fillOpacity: 0.1                                    // 채우기 불투명도
            });
            setCircle(newCircle);
            // 설정한 원을 지도에 표시
            newCircle.setMap(map);
            // console.log('searchRadius:' + searchRadius);

            positions.forEach(position => {
                position.setMap(null);
            });
        }
    }, [searchRadius, latitude, longitude]);

    // 검색반경 확대 버튼을 누르면 호출되어 지도를 확대하는 함수
    function increaseRadius() {
        const newRadius = searchRadius + 1000;

        // 현재 searchRadius 값과 새로운 값이 다를 때만 업데이트
        if (newRadius !== searchRadius) {
            // console.log('old:' + searchRadius);
            setSearchRadius(newRadius);
            // console.log('new:' + searchRadius);
        }
    };

    // 검색반경 축소 버튼을 누르면 호출되어 지도를 축소하는 함수
    function reduceRadius() {
        if (searchRadius > 1000) {
            const newRadius = searchRadius - 1000;

            // 현재 searchRadius 값과 새로운 값이 다를 때만 업데이트
            if (newRadius !== searchRadius) {
                // console.log('old:' + searchRadius);
                setSearchRadius(newRadius);
                // console.log('new:' + searchRadius);
            }
        }
    };

    return (
        <>

            <div className="flex">

                <div className="flex w-[25%] h-[100vh] bg-white p-4">
                    <div className="flex flex-col w-[25%]">
                        <h1>
                            <img className="left-[24px] top-0 cursor-pointer" width="111" height="97" src="/img/header/logo.png" alt="Logo" onClick={() => window.location.href = '/'}></img>
                        </h1>
                        <div className="text-center font-bold bg-[#0B2D85] text-[#ffffff] py-3"><button>응급실</button></div>
                        <div className="text-center font-bold py-3"><button onClick={() => window.location.href = 'getHospitalMap'}>병원</button></div>
                        <div className="text-center font-bold py-3"><button onClick={() => window.location.href = 'getPharmacyMap'}>약국</button></div>
                        <div className="text-center font-bold py-3"><button onClick={() => window.location.href = 'getAedMap'}>AED</button></div>
                    </div>
                    <div className="flex flex-col w-[75%]">
                        <div className="space-y-3 px-[10px]">

                            <div className="bg-white p-4 rounded-lg !my-[5px]">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 font-bold">검색 반경</span>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => reduceRadius()} className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full transition duration-300 ease-in-out">
                                            -
                                        </button>
                                        <span className="text-gray-800 font-bold">{searchRadius / 1000}Km</span>
                                        <button onClick={() => increaseRadius()} className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full transition duration-300 ease-in-out">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 반경 내 조회된 장소들 리스트 출력 */}
                        <div className="h-[calc(100vh-200px)] border-t border-solid border-[#e5e7eb]">
                            {hospitals && hospitals.length > 0 ? (
                                <TableVirtuoso
                                    style={{ height: "100%", boxShadow: "none" }}
                                    data={hospitals}
                                    components={TableComponents}
                                    itemContent={(index, hospital) => (
                                        <>
                                            <TableRow key={index} className="emergency-item">
                                                <TableCell className="aed-name font-bold text-gray-800 cursor-pointer" style={{ border: 'none', padding: '5px 10px 0px 10px', fontWeight: '900', color: '#0B2D85', fontSize: '16px'}} onClick={() => window.location.href = '/hospital/detail/'+hospital.hpid}>{hospital.dutyName}</TableCell>
                                            </TableRow>
                                            <TableRow key={`${index}-hvec`}>
                                                <TableCell className="aed-tel text-sm text-gray-600" style={{ border: 'none', padding: '5px 10px' }}><b>{'응급병상 : ' + hospital.hvec + ' 🛏️'}</b></TableCell>
                                            </TableRow>
                                            <TableRow key={`${index}-tel`}>
                                                <TableCell className="aed-tel text-sm text-gray-600" style={{ border: 'none', padding: '5px 10px' }}>{hospital.dutyTel3}</TableCell>
                                            </TableRow>
                                            <TableRow key={`${index}-address`}>
                                                <TableCell className="aed-address text-sm text-gray-500" style={{ padding: '0 10px 5px 10px' }}>{hospital.dutyAddr}</TableCell>
                                            </TableRow>
                                            <div className="w-[95%]">
                                                <Chart searchType="hospital" statType="DOW" keyword={hospital.hpid} />
                                            </div>
                                        </>
                                    )}
                                />
                            ) : (
                                // 조회된 결과가 없을 때
                                <div style={{ padding: '20px', textAlign: 'center', fontSize: '16px', color: '#999' }}>
                                    조회된 결과가 없습니다.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div id="map" style={{
                    width: '75%',
                    height: '950px',
                    // zIndex: 1
                }}></div>

            </div>
        </>
    )
}

export default GetEmergencyMap