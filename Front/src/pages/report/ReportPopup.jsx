import { useState, useContext } from "react";
import axios from 'axios';
import { UserContext } from '../../UserContext'; 

const ReportPopup = ({ review, onClose }) => {
    const { userId } = useContext(UserContext); 
    const [reportReason, setReportReason] = useState(''); // 선택된 신고 사유 상태
    const [reportContent, setReportContent] = useState(''); // '기타' 신고 사유에 대한 내용

    // 신고 사유 선택 변경 핸들러
    const handleReportReasonChange = (event) => {
        setReportReason(event.target.value); // 선택된 신고 사유 설정
        if (event.target.value !== '기타') {
            setReportContent(''); // '기타'가 아닌 경우 입력한 내용을 초기화
        }
    };

    // 신고 제출 핸들러
    const handleSubmit = async () => {
        if (reportReason === '기타' && !reportContent) {
            alert('기타 사유를 입력해 주세요.');
            return;
        }
    
        // 서버에 보낼 신고 데이터 준비
        const reportData = {
            writerId: review.writerId,  // 리뷰 작성자 ID
            reporterId: userId,         // 신고자 ID
            reviewContent: review.content,  // 리뷰 내용
            content: reportReason === '기타' ? reportContent : reportReason,  // 신고 내용: '기타'일 경우 reportContent 사용
        };
    
        try {
            const response = await axios.post(`/api/report/${review.no}`, reportData);
    
            if (response.status !== 200) {
                throw new Error('신고 처리에 실패했습니다.');
            }
    
            alert('신고가 성공적으로 접수되었습니다.');
            onClose();  // 팝업 닫기
        } catch (error) {
            console.error('신고 처리 중 오류 발생:', error);
            alert('신고 처리 중 오류가 발생했습니다.');
        }
    };     

    return (
        <div className="bg-white w-[35rem] max-h-[90vh] p-8 rounded-lg shadow-lg flex flex-col overflow-auto">
            <div className="flex flex-col overflow-auto">
                <div className="text-[#CA1738] text-3xl font-bold py-4 px-6 border-b border-[#e9e9e9]">
                    신고 하기
                </div>

                <div className="px-6 py-4 space-y-4 flex-grow">
                    {/* 리뷰 작성자의 ID 표시 */}
                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">작성자</span>
                        <span>{review?.writerId || '알 수 없음'}</span> {/* review가 없을 때 기본값 */}
                    </div>

                    {/* 리뷰 내용 표시 */}
                    <div className="flex flex-col">
                        <span className="text-[0.94rem] font-bold inline-block w-28">리뷰 내용</span>
                        <span className="w-full p-3 mt-2 bg-[#f5f5f5] rounded h-[100px] overflow-y-auto">
                            {review?.content || '리뷰 내용이 없습니다.'} {/* review가 없을 때 기본값 */}
                        </span>
                    </div>

                    {/* 신고 사유 선택 (라디오 버튼) */}
                    <div className="mt-4">
                        <div className="flex items-center mb-2 accent-[#CA1738]">
                            <input
                                type="radio"
                                name="reportOption"
                                value="욕설, 비방"
                                className="mr-2"
                                checked={reportReason === '욕설, 비방'}
                                onChange={handleReportReasonChange}
                            />
                            욕설, 비방
                        </div>
                        <div className="flex items-center mb-2 accent-[#CA1738]">
                            <input
                                type="radio"
                                name="reportOption"
                                value="도배, 스팸"
                                className="mr-2"
                                checked={reportReason === '도배, 스팸'}
                                onChange={handleReportReasonChange}
                            />
                            도배, 스팸
                        </div>
                        <div className="flex items-center mb-2 accent-[#CA1738]">
                            <input
                                type="radio"
                                name="reportOption"
                                value="불법, 부적절한 내용"
                                className="mr-2"
                                checked={reportReason === '불법, 부적절한 내용'}
                                onChange={handleReportReasonChange}
                            />
                            불법, 부적절한 내용
                        </div>
                        <div className="flex items-center mb-2 accent-[#CA1738]">
                            <input
                                type="radio"
                                name="reportOption"
                                value="기타"
                                className="mr-2"
                                checked={reportReason === '기타'}
                                onChange={handleReportReasonChange}
                            />
                            기타
                        </div>

                        {/* '기타'가 선택된 경우 텍스트 입력란 표시 */}
                        {reportReason === '기타' && (
                            <textarea
                                className="w-full p-2 border rounded-md mt-2"
                                placeholder="신고 사유를 작성해 주세요."
                                value={reportContent}
                                onChange={(e) => setReportContent(e.target.value)}
                            />
                        )}
                    </div>
                </div>

                {/* 신고 및 취소 버튼 */}
                <div className="flex justify-end gap-4 px-6">
                    <button
                        className="text-white bg-[#ca1738] rounded py-2 px-5 text-sm font-bold hover:bg-[#a0122b]"
                        onClick={handleSubmit}
                    >
                        신고
                    </button>
                    <button
                        className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportPopup;
