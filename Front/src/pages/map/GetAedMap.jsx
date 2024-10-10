import { useState, useEffect } from "react";

const { kakao } = window;

function GetAedMap() {
    // AED 정보 저장
    const [aeds, setAeds] = useState();
    const [latitude, setlatitude] = useState(null);
    const [longitude, setlongitude] = useState(null);

    const [map, setMap] = useState(null);
    const [circle, setCircle] = useState(null);
    const [zoomControl] = useState(new kakao.maps.ZoomControl());
    const [searchRadius, setSearchRadius] = useState(100); 

    const [markers, setMarkers] = useState([]);
    const [infoWindows, setInfoWindow] = useState([]);
    const addInfoWindow = (newInfoWindow) => {
        setInfoWindow(prev => [...prev, newInfoWindow]);
    };
    
    // 현재 위치 가져오기
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            setlatitude(lat);
            setlongitude(lon);
        },
        (error) => {
            console.error("Error getting location:", error);
            // 에러 코드에 따른 처리
            switch(error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
            }
        },
        {
            enableHighAccuracy: true, // 더 정확한 위치 요청
            timeout: 5000,
            maximumAge: 0 // 캐시된 위치 정보 사용하지 않음
        });

    }, [])

    // 마커 표시, 원 표시
    useEffect(() => {
        if(latitude && longitude){
            // 카카오맵 초기화
            const locPosition = new kakao.maps.LatLng(latitude, longitude); // 현재 위치를 지도 좌표로
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 3
            }
            const map = new kakao.maps.Map(container, options); // 지도 생성
            setMap(map);

            // 현재 위치 마커 표시
            const marker = new kakao.maps.Marker({
                position: locPosition
            });
            marker.setMap(map);

            // 새로운 원 객체를 생성
            const newCircle = new kakao.maps.Circle({
                center: new kakao.maps.LatLng(latitude, longitude), //원의 중심 좌표
                radius: searchRadius,                               // 미터 단위의 원의 반지름
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
        }
        
        
    }, [searchRadius, latitude, longitude]);
    
    // 데이터 가져오기, 반경 표시
    useEffect(() => {
        if (searchRadius && latitude && longitude) {
            if (aeds) {
                setAeds(null);
            }
            // aed 데이터 가져오기
            fetch(`/api/map/getAroundAed?latitude=${latitude}&longitude=${longitude}&distance=${searchRadius}`)
            // fetch(`/api/map/getAroundAed?latitude=${latitude}&longitude=${longitude}&distance=100`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAeds(data.data);
            })
            .catch(error => console.error("Error:", error));

            // 기존에 그려진 원이 있으면 제거
            if (circle) {
                circle.setMap(null);
            }
            // 새로운 원 객체를 생성
            const newCircle = new kakao.maps.Circle({
                center: new kakao.maps.LatLng(latitude, longitude), //원의 중심 좌표
                radius: searchRadius,                               // 미터 단위의 원의 반지름
                strokeWeight: 5,                                    // 선의 두께
                strokeColor: '#75B8FA',                             // 선의 색깔
                strokeOpacity: 1,                                   // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
                strokeStyle: 'dashed',                              // 선의 스타일
                fillColor: '#CFE7FF',                               // 채우기 색깔
                fillOpacity: 0.1                                    // 채우기 불투명도
            });
            // 설정한 원을 지도에 표시
            newCircle.setMap(map);
            
            // circle 상태 업데이트
            setCircle(newCircle);

            // 마커를 새로 그리기 전에 기존 마커를 제거
            markers.forEach(position => {
                position.setMap(null);
            });
            // 마커를 새로 그리기 전에 기존 인포윈도우를 제거
            infoWindows.forEach(infoWindow => {
                infoWindow.setMap(null);
            });
        }
    }, [searchRadius, latitude, longitude]);

    // 마커 배열 추가. 저장
    useEffect(() => {
        if (map && aeds && aeds.length > 0){
            console.log(aeds);
            const newMarkers = [];
            const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
            aeds.forEach(aed => {
                const markerPosition = new kakao.maps.LatLng(aed.wgs84Lat, aed.wgs84Lon); // AED 위치 설정
                const imageSize = new kakao.maps.Size(24, 35); // 마커 크기
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 이미지 생성

                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                    title: aed.org,
                    map: map // 생성된 지도에 마커 추가
                });
                newMarkers.push(marker); // 마커 배열에 저장
                // 마커의 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: aed.org
                });
                addInfoWindow(infowindow);

                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
            });
            setMarkers(newMarkers); // 마커 배열 상태에 저장
        }
    }, [map, aeds]);

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
    // useEffect(() => {
    //     if (map && latitude && longitude) {
    //         // console.log('mapLevel:' + map.getLevel());
    //         if (circle) {
    //             circle.setMap(null);
    //         }

    //         const newCircle = new kakao.maps.Circle({
    //             center: new kakao.maps.LatLng(latitude, longitude), // 원의 중심 좌표
    //             radius: searchRadius,                               // 미터 단위의 원의 반지름
    //             strokeWeight: 5,                                    // 선의 두께
    //             strokeColor: '#75B8FA',                             // 선의 색깔
    //             strokeOpacity: 1,                                   // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
    //             strokeStyle: 'dashed',                              // 선의 스타일
    //             fillColor: '#0B2D85',                               // 채우기 색깔
    //             fillOpacity: 0                                      // 채우기 불투명도
    //         });

    //         setCircle(newCircle);
    //         // 설정한 원을 지도에 표시
    //         setCircle(newCircle); // 상태 업데이트

    //         newCircle.setMap(map);
    //         // console.log('searchRadius:' + searchRadius);

    //         markers.forEach(position => {
    //             position.setMap(null);
    //         });
    //     }
    // }, [searchRadius, latitude, longitude]);

    // 검색반경 확대 버튼을 누르면 호출되어 지도를 확대하는 함수
    
    function increaseRadius() {
        const newRadius = searchRadius + 100;

        // 현재 searchRadius 값과 새로운 값이 다를 때만 업데이트
        if (newRadius !== searchRadius) {
            // console.log('old:' + searchRadius);
            setSearchRadius(newRadius);
            // console.log('new:' + searchRadius);
        }
    };

    // 검색반경 축소 버튼을 누르면 호출되어 지도를 축소하는 함수
    function reduceRadius() {
        if (searchRadius > 100) {
            const newRadius = searchRadius - 100;

            // 현재 searchRadius 값과 새로운 값이 다를 때만 업데이트
            if (newRadius !== searchRadius) {
                // console.log('old:' + searchRadius);
                setSearchRadius(newRadius);
                // console.log('new:' + searchRadius);
            }
        }
    };

    return (
        <div className="flex">
        <div className="flex w-[15%] h-[100vh] bg-white p-4">
            <div className="flex flex-col">
                <h1>
                    <img className="left-[24px] top-0" width="111" height="97" src="/img/header/logo.png" alt="Logo"></img>
                </h1>
                <div className="text-center"><button>병원</button></div>
                <div className="text-center"><button>약국</button></div>
                <div className="text-center"><button>AED</button></div>

            </div>
            <div className="flex flex-col">
                <button className="bg-red-500 text-white mb-2">AED 사용 방법 가이드</button>
                <div className="flex justify-between">
                    <button className="text-black">반경 1km</button>
                    <button className="text-black">반경 2km</button>
                </div>
                <div className="mt-4">
                    {/* <table>
                        <tbody>
                            {aeds && aeds.length > 0 ?
                                ( 
                                    aeds.map((aed, index) => {(
                                        <tr key={index}>
                                            <td>{aed.org}</td>
                                            <td>{aed.clerkTel}</td>
                                            <td>{aed.buildAddress}</td>
                                            <td>{aed.buildPlace}</td>
                                        </tr>
                                    )})
                                )
                                :
                                (
                                    <tr>
                                        <td>조회 결과가 없습니다.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
        <div className="w-[85%] h-[100vh] relative">
            <div id='map' className="w-full h-full absolute"></div>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                overflow: 'hidden',
                height: '30px',
                margin: '0',
                padding: '0',
                zIndex: 100,
                fontSize: '12px',
                fontFamily: "'Malgun Gothic', '맑은 고딕', sans-serif",
                border: '1px solid #919191',
                borderRadius: '5px',
                backgroundColor: 'lightGray'
            }}>
                <button onClick={() => reduceRadius()} >
                    반경 감소
                </button>
                <span style={{
                    paddingLeft: '10px',
                    paddingRight: '10px'
                }}>{("검색반경(" + searchRadius / 100) + "Km)"}</span>
                <button onClick={() => increaseRadius()} >
                    반경 증가
                </button>

            </div>
        </div>
    </div>
    );
};

export default GetAedMap;
