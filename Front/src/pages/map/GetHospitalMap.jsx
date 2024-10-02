import { useEffect } from "react";

const { kakao } = window;

function GetHospitalMap() {

    useEffect(() => {

        function onGeoOkay(position) {
            console.log(position);

            // 위도 경도를 받아오는 부분
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                // center: new kakao.maps.LatLng(37.5629654, 126.986331),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            let markerPosition = new kakao.maps.LatLng(latitude, longitude);
            let marker = new kakao.maps.Marker({
                position: markerPosition,
            });

            marker.setMap(map);
        }
        
        function onGeoError() {
            alert("I can't find you. No weather for you.");
        }
        
        navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);


    })

    return (
        <div id="map" style={{
            width: '100%',
            height: '900px'
        }}></div>
    )
}

export default GetHospitalMap