import { useState, useEffect } from "react";

const { kakao } = window;

const GetAedMap = () => {
    // AED 정보 저장
    const {aedInfo, setAedInfo} = useState();
    
    useEffect(() => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도

            const locPosition = new kakao.maps.LatLng(lat, lon); // 현재 위치를 지도 좌표로

            const container = document.getElementById('map'); // 지도를 표시할 div
            const options = {
                center: locPosition, // 현재 위치로 중심 좌표 설정
                level: 3 // 지도의 확대 레벨
            };
            const map = new kakao.maps.Map(container, options); // 지도 생성

            // 현재 위치에 마커를 표시
            const marker = new kakao.maps.Marker({
                position: locPosition
            });
            marker.setMap(map); // 마커를 지도에 추가
        });
    }, []);

    return (
        <div className="flex">
        {/* <div className="flex w-[15%] h-[100vh] bg-white p-4">
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
                    <span>list</span>
                </div>
            </div>
        </div> */}
        <div className="w-[100%] h-[100vh] relative">
            <div id='map' className="w-full h-full absolute"></div>
        </div>
    </div>
    );
};

export default GetAedMap;
