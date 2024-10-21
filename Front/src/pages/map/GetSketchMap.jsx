import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { kakao } = window;


function GetSketchMap({ latitude, longitude, placeName }) {
    const nav = useNavigate();

    const [map, setMap] = useState(null);

    const [marker, setMarker] = useState(null);

    useEffect(() => {
        console.log("lat:"+latitude);
        console.log("lon:"+longitude);
        // 카카오맵을 초기화하는 부분
        const container = document.getElementById('map');
        const options = {
            // props로 받은 GPS 좌표 위치에 지도 위치
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 4
        };
        setMap(new kakao.maps.Map(container, options));
    }, []);

    useEffect(() => {
        if (map) {
            // 전달받은 GPS 좌표 위치에 마커 표시
            let markerPosition = new kakao.maps.LatLng(latitude, longitude);
            setMarker(
                new kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                })
            );
        }
    }, [map]);
    
    useEffect(() => {
        if(marker) {
            // 마커의 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: placeName
            });
            infowindow.open(map, marker);
        }
    }, [marker])

    return (
        <>
                <div id="map" style={{
                    width: '300px',
                    height: '300px',
                }}></div>
        </>
    )
}

export default GetSketchMap