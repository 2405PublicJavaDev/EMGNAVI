import { useEffect, useState } from "react";
import useAxios from "../../axios/useAxios";

const { kakao } = window;

function GetHospitalMap() {

    // 병원 데이터를 저장할 State 선언
    const [hospitals, setHospitals] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [map, setMap] = useState(null);
    const { response, error, loading, setConfig } = useAxios();

    const [positions, setPosition] = useState([]);
    const addMarkerPosition = (newPosition) => {
        setPosition(prev => [...prev, newPosition]);
    };

    useEffect(() => {

        // 현재 위치를 받아오는 함수
        function onGeoOkay(position) {
            console.log(position);

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
        if(latitude && longitude){
            // 카카오맵을 초기화하는 부분
            const container = document.getElementById('map');
            const options = {
                // 현재 위치에 지도 위치
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 3
            };
            setMap(new kakao.maps.Map(container, options));

            // 병원 데이터 가져오기
            // fetch(`/api/map/getAroundEmgRoom?latitude=${latitude}&longitude=${longitude}&distance=10000`)
            fetch(`http://127.0.0.1:8888/api/map/getAroundEmgRoom?latitude=${latitude}&longitude=${longitude}&distance=30000`)
                .then(response => response.json())
                .then(data => {
                    setHospitals(data.data); // 받아온 병원 데이터를 State에 저장
                })
                .catch(error => {
                    console.error('Error fetching hospital data:', error);
                });
        }
    }, [latitude, longitude])
    
    useEffect(() => {
        if(map){
            // 현재 위치에 마커 표시
            let markerPosition = new kakao.maps.LatLng(latitude, longitude);
            // let markerPosition = new kakao.maps.LatLng(37.651957172510606, 127.30437739416751);
            let marker = new kakao.maps.Marker({
                map: map,
                position: markerPosition,
            });
        }
    }, [map])

    // useEffect(() => {
    //     if()
    // })
    
    // useEffect(() => {
    //     if (latitude && longitude) {
    //         setConfig({
    //             method: 'GET',
    //             url: `/api/map/getAroundEmgRoom?latitude=${latitude}&longitude=${longitude}&distance=10000`,
    //         });
    //         // console.log('useAxios');
    //         // console.log(response);
    //     }
    // }, [latitude, longitude, setConfig]);

    // 병원 데이터를 이용해 마커 표시하기
    useEffect(() => {
        if (map && hospitals && hospitals.length > 0) {
            console.log(hospitals);

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            hospitals.forEach(hospital => {
                console.log("test");
                console.log(hospital.dutyName, hospital.wgs84Lat, hospital.wgs84Lon);

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(hospital.wgs84Lat, hospital.wgs84Lon), // 마커를 표시할 위치
                    title : hospital.dutyName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            });
        }
    }, [map, hospitals]);

    return (
        <div id="map" style={{
            width: '100%',
            height: '900px'
        }}></div>
    )
}

export default GetHospitalMap