import { useEffect, useState } from "react";

const { kakao } = window;

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
            // console.log(hospitals);

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            hospitals.forEach(hospital => {
                // console.log(hospital.dutyName, hospital.wgs84Lat, hospital.wgs84Lon);

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(hospital.wgs84Lat, hospital.wgs84Lon), // 마커를 표시할 위치
                    title: hospital.dutyName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage // 마커 이미지 
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
            <div id="map" style={{
                width: '100%',
                height: '900px',
                zIndex: 1
            }}>
            </div>
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
                }}>{("검색반경(" + searchRadius / 1000) + "Km)"}</span>
                <button onClick={() => increaseRadius()} >
                    반경 증가
                </button>

            </div>
        </>
    )
}

export default GetEmergencyMap