import { useState } from "react";
import Modal from "react-modal";

const generateDummyData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    no: (index + 1).toString(),
    writer: `user${index + 1}@gmail.com`,
    review: `리뷰 내용 ${index + 1}입니다.`,
    reporter: `reporter${index + 1}@gmail.com`,
    date: `2024.09.${1 + index}`,
    content: index % 2 === 0 ? '욕설, 비방' : '도배, 스팸',
    state: index % 3 === 0 ? '신고 접수' : '처리 완료',
    unfreezeDate: index % 3 === 0 ? '-' : `2024.10.${index + 1}`
  }));
};

export const ReportList = () => {
  const [reportList, setReportList] = useState(generateDummyData(7));
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };  

  const selectedReport = openModalId !== null ? reportList[openModalId] : null;

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
                              <td className="w-[12%] border-b p-3 text-center">{item.writer}</td>
                              <td className="w-[23%] border-b p-3 text-center">{item.review}</td>
                              <td className="w-[12%] border-b p-3 text-center">{item.reporter}</td>
                              <td className="w-[10%] border-b p-3 text-center">{item.date}</td>
                              <td className="w-[10%] border-b p-3 text-center">{item.content}</td>
                              <td className="w-[10%] border-b p-3 text-center">{item.state}</td>
                              <td className="w-[10%] border-b p-3 text-center">{item.unfreezeDate}</td>
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
            {/* 작성자 정보 */}
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">작성자</span>
              <span>{selectedReport.writer}</span>
            </div>
            
            {/* 신고자 정보 */}
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고자</span>
              <span>{selectedReport.reporter}</span>
            </div>
            
            {/* 신고 날짜 */}
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고 날짜</span>
              <span>{selectedReport.date}</span>
            </div>

            {/* 신고 내용 */}
            <div className="flex items-center">
              <span className="text-[0.94rem] font-bold inline-block w-28">신고 내용</span>
              <span>{selectedReport.state}</span>
            </div>

            {/* 리뷰 내용 */}
            <div className="flex flex-col">
              <span className="text-[0.94rem] font-bold inline-block w-28">리뷰 내용</span>
              <span className="w-full p-3 mt-2 bg-[#f5f5f5] rounded h-[100px] overflow-y-auto">{selectedReport.review}</span>
            </div>

            {selectedReport.state === '신고 접수' ? (
                <>
                    {/* 정지 시킬 회원 */}
                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">정지 시킬 회원</span>
                        <label className="mr-4">
                            <input className="mr-1 accent-[#CA1738]" type="radio" name="unfreeze" value="작성자" /> 작성자
                        </label>
                        <label>
                            <input className="mr-1 accent-[#CA1738]" type="radio" name="unfreeze" value="신고자" /> 신고자
                        </label>
                    </div>

                    {/* 정지 기간 */}
                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">정지 기간</span>
                        <input className="py-1 px-2 rounded border border-[#e0e0e0]" type="date" />
                    </div>
                </>
            ) : (
                <div className="p-3 bg-[#f5f5f5] rounded flex flex-col">
                    <div className="pb-3">
                        <span className="text-[0.94rem] font-bold inline-block w-28 text-[#CA1738]">정지된 회원</span>
                        <span>{selectedReport.writer}</span>
                    </div>
                    <div>
                        <span className="text-[0.94rem] font-bold inline-block w-28 text-[#CA1738]">정지 해제 날짜</span>
                        <span>{selectedReport.unfreezeDate}</span>
                    </div>
                </div>
            )}
        
            </div>
          {/* 확인 및 닫기 버튼 */}
          <div className="flex justify-end gap-4 px-6">
            {selectedReport.state === '신고 접수' && (
                <button className="text-white bg-[#ca1738] rounded py-2 px-5 text-sm font-bold hover:bg-[#a0122b]">
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
