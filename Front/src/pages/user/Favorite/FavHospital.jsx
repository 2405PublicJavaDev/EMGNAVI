import { useState } from "react";
import Modal from "react-modal";

const generateDummyData = (count) => {
    return Array.from({ length: count }, (_, index) => ({
        dutyName: `강남재활의학과의원 ${index + 1}`,
        dutyAddr: `부산광역시 강서구 명지국제${index + 1}로 257, 티에스스퀘어 3층 302, 303호 (명지동)`,
        dutyTel1: `${index + 1000}-${index + 1000}`,
    }));
};

export const FavHospital = () => {
    const [hospitalList, sethospitalList] = useState(generateDummyData(7));
    
    // 체크박스
    const [checkItems, setCheckItems] = useState([]);
    const allSelect = (checked) => {
        if(checked){
            const allList = hospitalList.map((hospital) => hospital.dutyAddr);
            setCheckItems(allList);
        } else {
            setCheckItems([]);
        }
    };
    const singleSelect = (checked, dutyAddr) => {
        if (checked){
            setCheckItems((prev => [...prev, dutyAddr]));
        } else {
            setCheckItems((prev => prev.filter((addr) => addr !== dutyAddr)));
        }
    }

    // 즐겨찾기 해제
    const [openModalId, setOpenModalId] = useState(null); 
    const openModal = (id) => {
        setOpenModalId(id);
    }
    const closedModal = () => {
        setOpenModalId(null);
    }
    const selectHospital = openModalId !== null ? hospitalList[openModalId] : null;

    // 상세 페이지로 이동
    const detailPage = () => {};

return (
    <div className="w-full min-h-screen bg-white flex flex-col">
        <main className="flex-grow bg-white py-10">
            <div className="relative mx-auto top-[70px] bg-white rounded-lg p-8">
                <div className="absolute top-0 left-0 right-0 w-[100%] h-[194px] bg-[#0B2D85] rounded-t-lg"></div>
                <div className="flex justify-center">
                    <div className="w-[1490px]">
                        <div className="relative w-full left-[30px] top-[50px] h-[80px] text-white text-3xl font-bold mb-8 flex">
                            즐겨찾는 병원
                        </div>
                        <div className="relative w-full px-3 pt-2 pb-1 flex justify-end items-center bg-white rounded-tl-lg rounded-tr-lg overflow-hidden">
                            <span className="px-3 font-bold">총 {hospitalList.length}개</span>
                            <button className="text-[#333] bg-white border border-[#0B2D85] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5] font-bbold" 
                                onClick={() => openModal(hospitalList.dutyName)}>즐겨찾기 삭제</button>
                        </div>
                        <table className="relative w-full bg-white overflow-hidden">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-[#0B2D85]" onChange={(e) => allSelect(e.target.checked)} 
                                        checked={checkItems.length === hospitalList.length} />
                                    </th>
                                    <th className="p-3 font-bold">병원명</th>
                                    <th className="p-3 font-bold">주소</th>
                                    <th className="p-3 font-bold">대표 전화</th>
                                    <th className="p-3 font-bold"></th>
                                    <th className="p-3 font-bold"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {hospitalList.length === 0 ? 
                                (
                                <tr className="h-[300px]">
                                    <td colSpan="9" className="text-center">
                                    <div className="flex items-center justify-center h-full">
                                        <span className="font-bold text-lg">즐겨찾기 등록한 병원이 없습니다.</span>
                                    </div>
                                    </td>
                                </tr>
                                ) 
                                :
                                (hospitalList.map((item, index) => (
                                    <tr key={index}>
                                        <td className="p-3 border-b">
                                            <div className="flex justify-center items-center h-full">
                                                <input type="checkbox" className="form-checkbox w-[5%] h-4 w-4 text-[#0B2D85]" 
                                                onChange={(e) => singleSelect(e.target.checked, item.dutyAddr)}
                                                checked={checkItems.includes(item.dutyAddr)}/>
                                            </div>
                                        </td>
                                        <td className="w-[20%] border-b p-3 text-center">{item.dutyName}</td>
                                        <td className="w-[43%] border-b p-3 text-center">{item.dutyAddr}</td>
                                        <td className="w-[15%] border-b p-3 text-center">{item.dutyTel1}</td>
                                        <td className="w-[12%] border-b p-3 items-center">
                                            <button 
                                            onClick={() => detailPage()}
                                            className="bg-[#0B2D85] text-white px-4 py-1 rounded"
                                            >
                                            상세 정보 보기
                                            </button>
                                        </td>
                                        <td className="w-[3%] border-b p-3 items-center">
                                            <button onClick={() => openModal(index)} className="px-4 py-1">⭐</button>
                                        </td>
                                    </tr>
                                )))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="mx-1 w-8 h-8 bg-[#0B2D85] text-white rounded">1</button>
                    <button className="mx-1 w-8 h-8 border border-[#0B2D85] text-[#0B2D85] rounded">2</button>
                    <button className="mx-1 w-8 h-8 border border-[#0B2D85] text-[#0B2D85] rounded">3</button>
                    <button className="mx-1 w-8 h-8 border border-[#0B2D85] text-[#0B2D85] rounded">4</button>
                </div>
            </div>
        </main>

      {/* {footer} */}
    <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/img/logo_white.png" alt="응급NAVI 로고" className="h-12" />
            <span className="ml-2 font-bold text-2xl">응급NAVI</span>
          </div>
          <div className="text-sm">
            <p>서울 중구 남대문로 120 대일빌딩 2,3층 KH정보교육원 종로지원</p>
            <p>대표자명 : 민용식 | 대표전화 : 1544-9970</p>
            <p>© 2024 응급NAVI.</p>
          </div>
        </div>
    </footer>

    <Modal
        isOpen={openModalId !==null}
        onRequestClose={closedModal}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
        {selectHospital && (
            <div className="bg-white w-[40rem] max-h-[30vh] py-6 px-8 rounded-lg shadow-lg flex flex-col overclow-auto">
                <div className="pb-3">
                    <div className="font-bold">{selectHospital.dutyName} 을/를 삭제하시겠습니까?</div>
                </div>
                <div className="flex justify-end gap-4">
                    <button className="text-white bg-[#0B2D85] rounded py-2 px-5 text-sm font-bold hover:bg-[#0E39A7]">확인</button>
                    <button className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]" onClick={closedModal}>취소</button>
                </div>
            </div>
        )}

    </Modal>
    </div>
);
};

export default FavHospital;
