import { useEffect, useState } from "react";

const { kakao } = window;

function GetHospitalMap() {

    // 병원 데이터를 저장할 State 선언
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {

        // 현재 위치를 받아오는 함수
        function onGeoOkay(position) {
            console.log(position);

            // 위도 경도를 받아오는 부분
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            // 카카오맵을 초기화하는 부분
            const container = document.getElementById('map');
            const options = {
                // 현재 위치에 지도 위치
                center: new kakao.maps.LatLng(latitude, longitude),
                // center: new kakao.maps.LatLng(37.5629654, 126.986331),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);

            // 현재 위치에 마커 표시
            let markerPosition = new kakao.maps.LatLng(latitude, longitude);
            let marker = new kakao.maps.Marker({
                position: markerPosition,
            });

            marker.setMap(map);

            // 병원 데이터 가져오기
            fetch(`http://127.0.0.1:8888/api/map/getAroundEmgRoom?latitude=${latitude}&longitude=${longitude}&distance=2000`)
                .then(response => response.json())
                .then(data => {
                    setHospitals(data.data); // 받아온 병원 데이터를 상태에 저장
                    console.log(data.data);
                    console.log(hospitals);
                })
                .catch(error => {
                    console.error('Error fetching hospital data:', error);
                });
        }

        function onGeoError() {
            alert("I can't find you. No weather for you.");
        }

        navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);

    }, []);

    // 병원 데이터를 이용해 마커 표시하기
    useEffect(() => {
        if (hospitals.length > 0) {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(hospitals[0].latitude, hospitals[0].longitude), // 첫 병원 위치로 중심 이동
                level: 3
            };
            const map = new kakao.maps.Map(container, options);

            hospitals.forEach(hospital => {
                let markerPosition = new kakao.maps.LatLng(hospital.latitude, hospital.longitude);
                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        }
    }, [hospitals]);

    return (
        <div id="map" style={{
            width: '100%',
            height: '900px'
        }}></div>
    )
}

export default GetHospitalMap