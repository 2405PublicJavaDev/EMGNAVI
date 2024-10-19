import { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../UserContext';

export const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [openModalId, setOpenModalId] = useState(null);
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();
  const [targetId, setTargetId] = useState("");
  const [unfreezeDate, setUnfreezeDate] = useState("");
  const [processedReports, setProcessedReports] = useState({}); // 

  const openModal = (index) => {
    setOpenModalId(index);
    const report = reportList[index];
    console.log(`Selected report:`, report);
  
    if (report.status === 0) {
      setTargetId("");
      setUnfreezeDate("");
    } else {
      // 처리된 신고 정보 사용
      const processedInfo = processedReports[report.no];
      setTargetId(processedInfo?.targetId || report.targetId || "");
      setUnfreezeDate(processedInfo?.unfreezeDate || report.unfreezeDate || "");
    }
  
    console.log(`targetId: ${report.targetId}, unfreezeDate: ${report.unfreezeDate}`);
  };

  const closeModal = () => {
    setOpenModalId(null);
    setTargetId(""); // 모달 닫을 때 targetId 초기화
    setUnfreezeDate(""); // 모달 닫을 때 날짜 초기화
  };

  const selectedReport = openModalId !== null ? reportList[openModalId] : null;

  useEffect(() => {
    // userId가 ''이 아닐 때에만 동작
    if (userId !== '') {
      console.log(userId);
      if (userId === null || userId !== 'admin') {
          // 경고문구 출력 후 이전 페이지로 강제이동
          alert('관리자 계정이 아닙니다!');
          navigate(-1);
      }else {
        const fetchData = async () => {
          try {
            const res = await axios.get('/api/admin/reportList');
            setReportList(res.data.data);
            console.log("Fetched report list:", res.data.data);
          } catch (err) {
            console.error("Report list fetch error:", err.response?.data || err.message);
            throw err;
          }
        };
        fetchData();
      }
  }
  }, [userId]);

  const reportAction = async (no, targetId, unfreezeDate) => {
    try {
      const response = await axios.post(`/api/reports/${no}`, {
        targetId: targetId,
        unfreezeDate: unfreezeDate,
      });
      console.log('신고 처리 성공 : ', response.data);
      return response.data;
    } catch (error) {
      console.log('신고 처리 오류 : ', error.response?.data || error.message);
      throw error;
    }
  };

  const handleConfirm = async () => {
    if (!unfreezeDate) {
      alert('정지 날짜를 선택해주세요');
      return;
    }
    if (!targetId) {
      alert('정지 시킬 회원을 선택해주세요');
      return;
    }
  
    if (selectedReport) {
      try {
        console.log('신고 처리 요청 데이터:', { no: selectedReport.no, targetId, unfreezeDate });
        const result = await reportAction(selectedReport.no, targetId, unfreezeDate);
        console.log('신고 처리 결과:', result);
  
        const updatedReport = {
          ...selectedReport,
          status: 1,
          targetId: result.targetId || targetId,
          unfreezeDate: result.unfreezeDate || unfreezeDate
        };
  
        setReportList(prevList => prevList.map(report => 
          report.no === selectedReport.no ? updatedReport : report
        ));
  
        // 처리된 신고 정보 저장
        setProcessedReports(prev => ({
          ...prev,
          [selectedReport.no]: {
            targetId: result.targetId || targetId,
            unfreezeDate: result.unfreezeDate || unfreezeDate
          }
        }));
  
        console.log("업데이트된 리포트:", updatedReport);
        closeModal();
      } catch (error) {
        console.error('신고 처리 오류:', error);
        alert('신고 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  // 리뷰 내용 글자 수 제한
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const handleTargetIdChange = (e) => {
    setTargetId(e.target.value);
    console.log(`TargetId changed to: ${e.target.value}`);
  };

  const handleUnfreezeDate = (e) => {
    setUnfreezeDate(e.target.value);
    console.log(`UnfreezeDate changed to: ${e.target.value}`);
  }

  // 상태 변경 시 localStorage에 저장
useEffect(() => {
  localStorage.setItem('processedReports', JSON.stringify(processedReports));
}, [processedReports]);

// 컴포넌트 마운트 시 localStorage에서 데이터 로드
useEffect(() => {
  const savedReports = localStorage.getItem('processedReports');
  if (savedReports) {
    setProcessedReports(JSON.parse(savedReports));
  }
}, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <main className="flex-grow bg-white py-10">
        <div className="relative mx-auto top-[70px] bg-white rounded-lg p-8">
          <div className="absolute top-0 left-0 right-0 w-[100%] h-[194px] bg-[#850B2D] rounded-t-lg"></div>
          <div className="flex justify-center">
            <div className="w-[1490px]">
                <div className="relative w-full left-[30px] top-[50px] h-[80px] text-white text-3xl font-bold mb-8 flex">
                    회원 신고 리스트
                </div>
                <table className="relative w-full p-3 top-[2px] bg-white rounded-tr-lg rounded-tl-lg overflow-hidden">
                    <thead className="p-3">
                      <tr className="bg-[#FFF5F6]">
                          <th className="p-3 font-bold"></th>
                          <th className="p-3 font-bold">작성자 아이디</th>
                          <th className="p-3 font-bold">리뷰 내용</th>
                          <th className="p-3 font-bold">신고자 아이디</th>
                          <th className="p-3 font-bold">신고 날짜</th>
                          <th className="p-3 font-bold">신고 내용</th>
                          <th className="p-3 font-bold">신고 상태</th>
                          <th className="p-3 font-bold">정지 해제 날짜</th>
                          <th className="p-3 font-bold"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      reportList.length === 0 ? 
                      (
                        <tr className="h-[300px]">
                          <td colSpan="9" className="text-center">
                            <div className="flex items-center justify-center h-full">
                              <span className="font-bold text-lg">신고 내역이 없습니다.</span>
                            </div>
                          </td>
                        </tr>
                      )
                      :
                      (reportList.map((item, index) => (
                        <tr key={index}>
                            <td className="w-[3%] border-b p-3 text-center">{item.no}</td>
                            <td className="w-[12%] border-b p-3 text-center">{item.writerId}</td>
                            <td className="w-[23%] border-b p-3 text-center">{truncateText(item.reviewContent, 18)}</td>
                            <td className="w-[12%] border-b p-3 text-center">{item.reporterId}</td>
                            <td className="w-[10%] border-b p-3 text-center">{item.reportDate}</td>
                            <td className="w-[15%] border-b p-3 text-center">{truncateText(item.content, 10)}</td>
                            <td className="w-[8%] border-b p-3 text-center">
                              {item.status === 0 ? "신고 접수" : "처리 완료"}</td>
                            <td className="w-[10%] border-b p-3 text-center">{item.unfreezeDate === null ? "-" : item.unfreezeDate}</td>
                            <td className="w-[10%] border-b p-3 text-center">
                                <button 
                                onClick={() => openModal(index)}
                                className="bg-[#CA1738] text-white px-4 py-1 rounded"
                                >
                                관리
                                </button>
                            </td>
                        </tr>
                      )))
                    }
                    </tbody>
                </table>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="mx-1 w-8 h-8 bg-[#CA1738] text-white rounded">1</button>
            <button className="mx-1 w-8 h-8 border border-[#CA1738] text-[#CA1738] rounded">2</button>
            <button className="mx-1 w-8 h-8 border border-[#CA1738] text-[#CA1738] rounded">3</button>
            <button className="mx-1 w-8 h-8 border border-[#CA1738] text-[#CA1738] rounded">4</button>
          </div>
        </div>
      </main>

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
        isOpen={openModalId !== null} 
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        {selectedReport && (
        <div className="bg-white w-[40rem] max-h-[90vh] p-8 rounded-lg shadow-lg flex flex-col overflow-auto">
          <div className="text-[#CA1738] text-3xl font-bold py-4 px-6 border-b border-[#e9e9e9]">
            신고 관리
          </div>
          <div className="px-6 py-4 space-y-4 flex-grow">
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">작성자</span>
              <span>{selectedReport.writerId}</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고자</span>
              <span>{selectedReport.reporterId}</span>
            </div>

            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고 날짜</span>
              <span>{selectedReport.reportDate}</span>
            </div>

            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고 내용</span>
              <span>{selectedReport.content}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[0.94rem] font-bold inline-block w-28">리뷰 내용</span>
              <span className="w-full p-3 mt-2 bg-[#f5f5f5] rounded h-[100px] overflow-y-auto">{selectedReport.reviewContent}</span>
            </div>

            {selectedReport.status === 0 ? (
                <>
                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">정지 시킬 회원</span>
                        <label className="mr-4">
                            <input className="mr-1 accent-[#CA1738]" type="radio" name="unfreeze" 
                            value={selectedReport.writerId}
                            onChange={handleTargetIdChange}
                            checked={targetId === selectedReport.writerId}
                            required/> 작성자
                        </label>
                        <label>
                            <input className="mr-1 accent-[#CA1738]" type="radio" name="unfreeze" 
                            value={selectedReport.reporterId}
                            onChange={handleTargetIdChange}
                            checked={targetId === selectedReport.reporterId}
                            /> 신고자
                        </label>
                    </div>

                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">정지 기간</span>
                        <input className="py-1 px-2 rounded border border-[#e0e0e0]" type="date"
                        value={unfreezeDate} 
                        onChange={handleUnfreezeDate}
                        required/>
                    </div>
                </>
            ) : (
                <div className="p-3 bg-[#f5f5f5] rounded flex flex-col">
                    <div className="pb-3">
                        <span className="text-[0.94rem] font-bold inline-block w-28 text-[#CA1738]">정지된 회원</span>
                        <span>{processedReports[selectedReport.no]?.targetId || selectedReport.targetId || '정보 없음'}</span>
                    </div>
                    <div>
                        <span className="text-[0.94rem] font-bold inline-block w-28 text-[#CA1738]">정지 해제 날짜</span>
                        <span>{processedReports[selectedReport.no]?.unfreezeDate || selectedReport.unfreezeDate || '정보 없음'}</span>
                    </div>
                </div>
            )}
          </div>
          <div className="flex justify-end gap-4 px-6">
            {selectedReport.status === 0 && (
                <button className="text-white bg-[#ca1738] rounded py-2 px-5 text-sm font-bold hover:bg-[#a0122b]" onClick={handleConfirm}>
                확인
                </button>
            )}
            <button className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
        )}
      </Modal>
    </div>
  );
};

export default ReportList;
