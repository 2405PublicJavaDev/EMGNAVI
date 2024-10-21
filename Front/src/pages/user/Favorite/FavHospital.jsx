import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import { UserContext } from '../../../UserContext';

Modal.setAppElement('#root');


export const FavHospital = () => {
    const { userId } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [hospitalList, setHospitalList] = useState([]); // 초기값은 빈 배열
    const [openSingleModalId, setOpenSingleModalId] = useState(null); // 모달 열기 상태 관리
    const [openMultiModalId, setOpenMultiModalId] = useState(false); // 다중 삭제 모달 상태 관리
    
    // 페이지네이션
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage] = useState(5);
    const [paginationInfo, setPaginationInfo] = useState({});
    const [totalCount, setTotalCount] = useState(0); // 총 개수
    
    // 병원 리스트
    const fetchData = async (page = 1) => {
        try {
            const res = await axios.get(`/api/favorite/hospital/list`, {
                params: {
                    page: page,
                    size: itemsPerPage
                }
            });
            console.log("Full server response:", res);

            const responseData = res.data.data;
            console.log("Response data:", responseData);

            // responseData의 구조에 따라 hospitalList와 paginationInfo를 설정
            const hospitalList = responseData.favoriteList || [];
            const paginationInfo = responseData.paginationInfo || {};
            
            setHospitalList(hospitalList);
            setPaginationInfo(paginationInfo);
            setCurrentPage(page);
            setTotalPages(paginationInfo.totPageCnt || 1);
            setTotalCount(paginationInfo.totCnt || 0);

            navigate(`?page=${page}`, { replace: true });

            console.log("Fetched hospital list:", hospitalList);
            console.log("Pagination info:", paginationInfo);
        } catch (err) {
            console.error("Hospital list fetch error:", err.response?.data || err.message);
            setHospitalList([]);
            setPaginationInfo({}); 
            throw err;
        }
    };
    
    useEffect(() => {
        if (userId) {
            fetchData(currentPage);
        } else {
            console.log('User is not logged in');
        }
    }, [userId, currentPage]);
    
    // 즐겨찾기 단일 삭제
    const deleteFavorite = async (refNo) => {
        try {
            const response = await axios.delete(`/api/favorite/single`, { params: {refNo}});
            if (response.status === 200) {
                console.log('삭제 성공:', response.data);
                // 병원 리스트에서 삭제된 항목 필터링 후 상태 업데이트
                setHospitalList(prevHospitalList => 
                    prevHospitalList.filter(hospital => hospital.refNo !== refNo)
                );
                closedModal(); // 모달 닫기
            } else {
                console.error('삭제 실패:', response.statusText);
            }
        } catch (error) {
            console.error('삭제 요청 중 오류 발생:', error);
        }
    };

    // 즐겨찾기 다중 삭제
    const deleteFavorites = async (refNos) => {
        try {
            const response = await axios.post(`/api/favorite/multi`, {refNos: refNos});
            if (response.status === 200){
                console.log('삭제 성공:', response.data);
                setHospitalList(prevHospitalList =>
                    prevHospitalList.filter(hospital => !refNos.includes(hospital.refNo))
                );
                closedMultiModal();
            } else {
                console.error('삭제 실패:', response.statusText);
            }
        } catch (error) {
            console.error('삭제 요청 중 오류 발생:', error);
        }
    };

    // 체크박스
    const [checkItems, setCheckItems] = useState([]);
    const allSelect = (checked) => {
        if (checked) {
            const allList = hospitalList.map((hospital) => hospital.refNo);
            setCheckItems(allList);
        } else {
            setCheckItems([]);
        }
    };
    const singleSelect = (checked, refNo) => {
        if (checked) {
            setCheckItems((prev) => [...prev, refNo]);
        } else {
            setCheckItems((prev) => prev.filter((addr) => addr !== refNo));
        }
    };

    // 모달 열기 및 닫기 로직
    const openSingleModal = (id) => {
        setOpenSingleModalId(id); // 선택된 병원 인덱스로 모달 오픈
    };
    const closedModal = () => {
        setOpenSingleModalId(null); // 모달 닫기
    };
    const openMultiModal = () => {
        setOpenMultiModalId(true); // 다중 삭제 모달 열기
    };
    const closedMultiModal = () => {
        setOpenMultiModalId(false); // 다중 삭제 모달 닫기
    };

    const selectHospital = openSingleModalId !== null ? hospitalList[openSingleModalId] : null; // 선택된 병원

    // 상세 페이지로 이동
    const detailPage = (hpid) => {
        navigate(`/hospital/detail/${hpid}`);
    };

    // 페이지네이션
    const Pagination = ({ paginationInfo, currentPage, onPageChange }) => {
        if (!paginationInfo || typeof paginationInfo.totPageCnt === 'undefined') {
          return null;
        }
      
        const pageNumbers = [];
        for (let i = 1; i <= paginationInfo.totPageCnt; i++) {
          pageNumbers.push(i);
        }
      
        return (
          <div className="flex justify-center mt-8">
            {currentPage > 1 && (
              <button
                onClick={() => onPageChange(currentPage - 1)}
                className="mx-1 w-8 h-8 border border-[#0B2D85] text-[#0B2D85] rounded"
              >
                ◀
              </button>
            )}
      
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => onPageChange(number)}
                className={`mx-1 w-8 h-8 ${
                  currentPage === number
                    ? "bg-[#0B2D85] text-white"
                    : "border border-[#0B2D85] text-[#0B2D85]"
                } rounded`}
              >
                {number}
              </button>
            ))}
      
            {currentPage < paginationInfo.totPageCnt && (
              <button
                onClick={() => onPageChange(currentPage + 1)}
                className="mx-1 w-8 h-8 border border-[#0B2D85] text-[#0B2D85] rounded"
              >
                ▶
              </button>
            )}
          </div>
        );
      };
    const handlePageChange = (newPage) => {
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            fetchData(newPage);
            navigate(`?page=${newPage}`, { replace: true });
        }
    };

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
                                <span className="px-3 font-bold">총 {totalCount}개</span>
                                <button className="text-[#333] bg-white border border-[#0B2D85] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]" 
                                    onClick={() => totalCount > 0 && openMultiModal()}>
                                    즐겨찾기 삭제
                                </button>
                            </div>
                            <table className="relative w-full bg-white table-fixed">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="w-[4%] p-3">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-[#0B2D85]" 
                                            onChange={(e) => allSelect(e.target.checked)} 
                                            checked={checkItems.length === hospitalList.length} />
                                        </th>
                                        <th className="w-[25%] p-3 font-bold">병원명</th>
                                        <th className="w-[40%] p-3 font-bold">주소</th>
                                        <th className="w-[15%] p-3 font-bold">대표 전화</th>
                                        <th className="w-[11%] p-3 font-bold"></th>
                                        <th className="w-[5%]  p-3 font-bold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {hospitalList.length === 0 ? (
                                    <tr className="h-[300px]">
                                        <td colSpan="9" className="text-center">
                                            <div className="flex items-center justify-center h-full">
                                                <span className="font-bold text-lg">즐겨찾기 등록한 병원이 없습니다.</span>
                                            </div>
                                        </td>
                                    </tr>
                                    ) : (
                                    hospitalList.map((item, index) => (
                                        <tr key={index}>
                                            <td className="w-[4%] p-3 border-b whitespace-nowrap overflow-hidden text-ellipsis">
                                                <div className="flex justify-center items-center h-full">
                                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#0B2D85]" 
                                                    onChange={(e) => singleSelect(e.target.checked, item.refNo)}
                                                    checked={checkItems.includes(item.refNo)} />
                                                </div>
                                            </td>
                                            <td className="w-[25%] border-b p-3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{item.dutyName}</td>
                                            <td className="w-[40%] border-b p-3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{item.dutyAddr}</td>
                                            <td className="w-[15%] border-b p-3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{item.dutyTel1}</td>
                                            <td className="w-[11%] p-3 items-center whitespace-nowrap overflow-hidden">
                                                <button onClick={() => detailPage(item.refNo)} className="bg-[#0B2D85] text-white px-4 py-1 rounded">상세 정보 보기</button>
                                            </td>
                                            <td className="w-[5%] items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                                <button onClick={() => openSingleModal(index)} className="px-4 py-1">⭐</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <div className="flex justify-center pb-[30px]">
                <Pagination
                    paginationInfo={paginationInfo}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

            <footer className="bg-black text-white py-8">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center mb-8 md:mb-0">
                    <img className="w-[117px] h-[100px]" src="/img/footer/logo.png" alt="Logo" />
                    <div className="mt-2 text-2xl font-black text-[#333] font-['Advent_Pro']">응급NAVI</div>
                </div>
                <div className="flex flex-col max-w-[638px]">
                    <div className="mb-4 text-sm font-bold text-[#686868] font-['Agdasima']">
                        이용약관              개인정보처리방침
                    </div>
                    <div className="text-sm leading-relaxed font-bold text-[#686868] font-['Agdasima']">
                        서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970
                        <br />
                        <span className="flex items-center">
                            <img className="w-2 h-2 mr-1" src="/img/footer/copyright.png" alt="Copyright" />
                            2024 응급NAVI.
                        </span>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <img className="w-[145px] h-[34px]" src="/img/footer/group.png" alt="Group" />
                </div>
                </div>
            </footer>

            {/* 단일 삭제 모달 */}
            <Modal
                isOpen={openSingleModalId !== null}
                onRequestClose={closedModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
            >
                {selectHospital && (
                    <div className="bg-white w-[40rem] max-h-[30vh] py-6 px-8 rounded-lg shadow-lg flex flex-col overflow-auto">
                        <div className="pb-3">
                            <div className="font-bold">{selectHospital.dutyName} 을/를 삭제하시겠습니까?</div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button className="text-white bg-[#0B2D85] rounded py-2 px-5 text-sm font-bold hover:bg-[#0E39A7]"
                                onClick={() => {
                                    deleteFavorite(selectHospital.refNo);
                                }}>확인</button>
                            <button className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]" onClick={closedModal}>취소</button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* 다중 삭제 모달 */}
            <Modal
                isOpen={openMultiModalId}
                onRequestClose={closedMultiModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
            >
                <div className="bg-white w-[40rem] max-h-[30vh] py-6 px-8 rounded-lg shadow-lg flex flex-col overflow-auto">
                    <div className="pb-3">
                        <div className="font-bold">
                        {
                            checkItems.length > 0 ? 
                            `${hospitalList.find(hospital => hospital.refNo === checkItems[0])?.dutyName} 외 ${checkItems.length - 1}개의 항목을 삭제하시겠습니까?` 
                            : '삭제할 항목이 없습니다.'
                        }
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button className="text-white bg-[#0B2D85] rounded py-2 px-5 text-sm font-bold hover:bg-[#0E39A7]"
                            onClick={() => {
                                deleteFavorites(checkItems);
                            }}>확인</button>
                        <button className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]" onClick={closedMultiModal}>취소</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default FavHospital;
