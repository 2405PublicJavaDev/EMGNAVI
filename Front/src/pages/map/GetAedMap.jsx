import React, { useState, useEffect } from "react";
import { TableVirtuoso } from "react-virtuoso";
import { TableContainer, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';  // Material-UI import
import Modal from "react-modal";

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
    
    // 이미지 표시 및 다운로드 Modal
    const [openModalId, setOpenModalId] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const [downloadFileName, setDownloadFileName] = useState("");

    const openModal = (imagePath, fileName) => {
        setModalImage(imagePath);
        setDownloadFileName(fileName);
        setOpenModalId(true);
    };

    const closeModal = () => {
        setOpenModalId(null);
        setModalImage(null);
        setDownloadFileName("");
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
    
    // 로딩 상태 추가
    const [loading, setLoading] = useState(false);

    // 데이터 가져오기, 반경 표시
    useEffect(() => {
        if (searchRadius && latitude && longitude) {
            setLoading(true); // 데이터 가져오기 전에 로딩 상태로 변경
            
            // aed 데이터 가져오기
            fetch(`/api/map/getAroundAed?latitude=${latitude}&longitude=${longitude}&distance=${searchRadius}`)
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
        if (newRadius !== searchRadius && newRadius <= 1000) {
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
            if (newRadius !== searchRadius && newRadius >= 100) {
                // console.log('old:' + searchRadius);
                setSearchRadius(newRadius);
                // console.log('new:' + searchRadius);
            }
        }
    };

    // 현재 위치와 AED 위치 사이의 거리를 계산할 함수. Haversine 공식 사용
    function getDistanceFromLatLonInKm(latitude1, longitude1, latitude2, longitude2) {
        const R = 6371; // 지구의 반지름 (단위: km)
        const dLat = deg2rad(latitude2 - latitude1);  // 위도 차이, radian으로 변환
        const dLon = deg2rad(longitude2 - longitude1);  // 경도 차이, radian으로 변환'
        // 두 좌표 사이의 구면 거리를 구하기 a
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) + // 위도 차이, 삼각 함수 계산
            Math.cos(deg2rad(latitude1)) * Math.cos(deg2rad(latitude2)) * // 두 지점의 위도에 대한 코사인 곱
            Math.sin(dLon/2) * Math.sin(dLon/2); // 경도 차이에 대한 삼각 함수 계산
        // 구면 위에서 두 점 사이의 중심각 구하기 c
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const distance = R * c; // 두 좌표 사이의 거리 (km)
        return distance * 1000; // 미터로 변환
    }
    
    // 각도 -> radian으로 변환하는 함수
    function deg2rad(deg) {
        return deg * (Math.PI / 180); // (pi/180)
    }

    return (
        <div className="flex">
            <div className="flex w-[20%] h-[100vh] bg-white p-4">
                <div className="flex flex-col w-[25%]">
                    <h1>
                        <img className="left-[24px] top-0" width="111" height="97" src="/img/header/logo.png" alt="Logo"></img>
                    </h1>
                    <div className="text-center font-bold py-3"><button>병원</button></div>
                    <div className="text-center font-bold py-3"><button>약국</button></div>
                    <div className="text-center font-bold bg-[#0B2D85] text-[#ffffff] py-3"><button>AED</button></div>
                </div>
                <div className="flex flex-col w-[75%]">
                    <div className="space-y-3 px-[10px]">
                        <button onClick={() => openModal("/img/aed/자동심장충격기 사용방법.jpg", "자동심장충격기_사용방법.jpg")} 
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg transition duration-300">
                            AED 사용 방법
                        </button>
                        <button onClick={() => openModal("/img/aed/심폐소생술 방법.jpg", "심폐소생술_방법.jpg")} 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition duration-300">
                            심폐소생술 방법
                        </button>
                        <div className="bg-white p-4 rounded-lg !my-[5px]">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-bold">검색 반경</span>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => reduceRadius()} className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full transition duration-300 ease-in-out">
                                        -
                                    </button>
                                    <span className="text-gray-800 font-bold">{searchRadius}m</span>
                                    <button onClick={() => increaseRadius()} className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full transition duration-300 ease-in-out">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 반경 내 조회된 장소들 리스트 출력 */}
                    <div className="h-[calc(100vh-200px)] border-t border-solid border-[#e5e7eb]">
                        {aeds && aeds.length > 0 ? (
                            <TableVirtuoso
                                style={{ height: "100%", boxShadow: "none"}}
                                // searchRadius 보다 작은지
                                data={aeds.filter(aed => getDistanceFromLatLonInKm(latitude, longitude, aed.wgs84Lat, aed.wgs84Lon) <= searchRadius) }
                                components={TableComponents}
                                itemContent={(index, aed) => (
                                    <>
                                        <TableRow key={index} className="aed-item">
                                            <TableCell className="aed-name font-bold text-gray-800" style={{border: 'none', padding:'5px 10px 0px 10px', fontWeight: '900', color: '#0B2D85', fontSize: '16px'}}>{aed.org}</TableCell>
                                        </TableRow>
                                        <TableRow key={`${index}-tel`}>
                                            <TableCell className="aed-tel text-sm text-gray-600" style={{border: 'none', padding:'5px 10px'}}>{aed.clerkTel}</TableCell>
                                        </TableRow>
                                        <TableRow key={`${index}-address`}>
                                            <TableCell className="aed-address text-sm text-gray-500" style={{padding: '0 10px 5px 10px'}}>{aed.buildAddress} {aed.buildPlace}</TableCell>
                                        </TableRow>
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
            <div className="w-[80%] h-[100vh] relative">
                <div id='map' className="w-full h-full absolute"></div>
                {/* <div style={{
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
                </div> */}
            </div>
            <Modal
                isOpen={openModalId !== null}
                onRequestClose={closeModal}
                 className="fixed inset-0 flex items-center justify-center z-50"  // 모달이 부모 div에 종속되지 않도록 fixed로 설정하고 z-index를 50으로 설정하여 모달이 최상단에 나타나도록 수정
                 overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"   // 오버레이의 z-index도 40으로 설정하여 전체 화면을 덮도록 수정
                shouldCloseOnOverlayClick={true}
                style={{
                    content: {
                        position: 'fixed',                // 모달을 페이지 상단에 고정시키기 위해 fixed로 설정
                        top: '50%',                       
                        left: '50%',                      
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)', // 화면 중앙으로 정확히 배치되도록 transform 설정
                        zIndex: 10000,                      // 모달의 z-index를 높게 설정하여 다른 요소 위에 표시되도록 수정
                        },
                        overlay: {
                        zIndex: 9999,                       // 오버레이의 z-index도 높게 설정하여 모달과 함께 화면을 덮도록 수정
                    }
                }}
            >
                <div className="modal-content bg-white rounded-lg p-4 max-w-2xl w-full max-h-[90vh] flex flex-col">
                    <div className="flex items-center justify-end px-4">
                        {/* <h2 className="text-1.5xl font-bold">{downloadFileName.includes("AED") ? "AED 사용 방법" : "심폐소생술 방법"}</h2> */}
                        <div className="flex justify-end mb-2">
                            <a 
                                href={modalImage} 
                                download={downloadFileName}
                                className="rounded py-2 px-5 text-sm font-bold text-blue"
                            >
                                다운로드
                            </a>
                            <button 
                                onClick={closeModal}
                                className="text-black font-bold transition duration-300"
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto flex-grow">
                        {modalImage && (
                            <img src={modalImage} alt="Modal Image" className="w-full" />
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GetAedMap;
