import { useState } from "react";

export const ReportPopup = () => {
    // 리뷰 데이터
    const [review, setReview] = useState();

    // 신고 데이터
    const [report, setReport] = useState({
        writerId: `${review.writerId}`,
        content: `${review.content}`,
        reportId: ``,
        refDate: ``
    });

    return (
        <div>
            <div className="bg-white w-[40rem] max-h-[90vh] p-8 rounded-lg shadow-lg flex flex-col overflow-auto">
                <div className="text-[#CA1738] text-3xl font-bold py-4 px-6 border-b border-[#e9e9e9]">
                    신고 하기
                </div>
                <div className="px-6 py-4 space-y-4 flex-grow">
                    {/* 작성자 정보 */}
                    <div className="flex items-center">
                        <span className="text-[0.94rem] font-bold inline-block w-28">작성자</span>
                        <span>{report.writerId}</span>
                    </div>

                    {/* 리뷰 내용 */}
                    <div className="flex flex-col">
                        <span className="text-[0.94rem] font-bold inline-block w-28">리뷰 내용</span>
                        <span className="w-full p-3 mt-2 bg-[#f5f5f5] rounded h-[100px] overflow-y-auto">{report.content}</span>
                    </div>

                    {/* 신고 옵션 */}
                    <div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="reportOption" value="insult" className="mr-2"/> 욕설, 비방
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="reportOption" value="spam" className="mr-2"/> 도배, 스팸
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="reportOption" value="illegal" className="mr-2"/> 불법, 부적절한 내용
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="reportOption" value="etc" className="mr-2"/> 기타
                        </div>
                    </div>
                </div>
                
                {/* 신고 및 취소 버튼 */}
                <div className="flex justify-end gap-4 px-6">
                    <button className="text-white bg-[#ca1738] rounded py-2 px-5 text-sm font-bold hover:bg-[#a0122b]" onClick={}>
                        신고
                    </button>
                    <button className="text-[#333] bg-white border border-[#e0e0e0] rounded py-2 px-5 text-sm font-bold hover:bg-[#f5f5f5]">
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReportPopup;
