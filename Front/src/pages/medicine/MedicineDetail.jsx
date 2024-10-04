import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange, isClickable = true }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <img
                    key={star}
                    src={star <= rating ? "/img/medicine/goldonestar.png" : "/img/medicine/greyonestar.png"}
                    alt={`Star ${star}`}
                    className="w-6 h-6"
                    onClick={isClickable ? () => onRatingChange(star) : null}
                    style={{ cursor: isClickable ? 'pointer' : 'default' }}
                />
            ))}
        </div>
    );
};

const MedicineDetail = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const dummyProductInfo = {
        업체명: "제약회사",
        제품명: "종합감기약",
        품목기준코드: "123456789",
        수정일자: "2024.08.15",
        efcyQesitm: "이 약은 식욕감퇴(식욕부진), 위부팽만감, 소화불량, 과식, 체함, 구역, 구토에 사용합니다.",
        useMethodQesitm: `
            만 15세 이상 및 성인: 1회 1병(75 mL)
            만 11세 이상~만 15세 미만: 1회 2/3병(50 mL)
            만 8세 이상~만 11세 미만: 1회 1/2병(37.5 mL)
            만 5세 이상~만 8세 미만: 1회 1/3병(25 mL)
            만 3세 이상~만 5세 미만: 1회 1/4병(18.75 mL)
            만 1세 이상~만 3세 미만: 1회 1/5병(15 mL) 1일 3회 식후에 복용합니다. 복용간격은 4시간 이상으로 합니다.
        `,
        atpnWarnQesitm: "(내용 없음)",
        atpnQesitm: `
            만 3개월 미만의 젖먹이는 이 약을 복용하지 마십시오.
            복용 전 상의가 필요한 경우: 만 1세 미만의 젖먹이, 임부 또는 임신 가능성이 있는 여성, 카라멜에 과민증 환자 또는 경험자, 나트륨 제한 식이를 하는 사람
            정해진 용법과 용량을 잘 지키십시오.
            어린이에게 투여할 경우 보호자의 지도 감독하에 투여하십시오.
            1개월 정도 복용해도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.
        `,
        intrcQesitm: "(내용 없음)",
        seQesitm: "(내용 없음)",
        depositMethodQesitm: `
            습기와 빛을 피해 실온에서 보관하십시오.
            어린이의 손이 닿지 않는 곳에 보관하십시오.
        `,
    };

    const dummyReviews = [
        { 번호: 1, 평점: 5, 리뷰: '의사 선생님 처방으로 먹기 시작했어요.', 작성일자: '2024.08.26', 작성자: 'CUS4829' },
        { 번호: 2, 평점: 4, 리뷰: '2주째 복용 중인데 효과가 있어요.', 작성일자: '2024.08.26', 작성자: 'ID7391' },
        { 번호: 3, 평점: 5, 리뷰: '부모님께 추천드렸더니 좋아하셨어요.', 작성일자: '2024.08.26', 작성자: 'USER5602' },
        { 번호: 4, 평점: 3, 리뷰: '효과는 있지만 가끔 속이 불편해요.', 작성일자: '2024.08.26', 작성자: 'C9384K' },
        { 번호: 5, 평점: 4, 리뷰: '복용법이 간단해서 좋아요.', 작성일자: '2024.08.26', 작성자: 'A7281M' },
        { 번호: 6, 평점: 2, 리뷰: '처음엔 괜찮았는데 시간이 지나니...', 작성일자: '2024.08.26', 작성자: 'U6392L' },
        { 번호: 7, 평점: 5, 리뷰: '저에게 너무 잘 맞는 약인 것 같아요.', 작성일자: '2024.08.26', 작성자: 'B8201N' },
        { 번호: 8, 평점: 5, 리뷰: '가격도 비싸지 않고 좋네요.', 작성일자: '2024.08.26', 작성자: 'E5729P' },
        { 번호: 9, 평점: 1, 리뷰: '최악이에요 정말...', 작성일자: '2024.08.26', 작성자: 'G3017R' },
        { 번호: 10, 평점: 4, 리뷰: '하나 아쉬운 게 있다면...', 작성일자: '2024.08.26', 작성자: 'T9405S' },
        { 번호: 11, 평점: 3, 리뷰: '효과가 생각보다 늦게 나타나네요.', 작성일자: '2024.08.27', 작성자: 'H8372A' },
        { 번호: 12, 평점: 4, 리뷰: '이 약 괜찮아요, 추천합니다.', 작성일자: '2024.08.28', 작성자: 'N2837L' },
        { 번호: 13, 평점: 2, 리뷰: '다른 약이 더 잘 맞아요.', 작성일자: '2024.08.29', 작성자: 'P9283F' },
        { 번호: 14, 평점: 5, 리뷰: '저에게 딱 맞는 약이네요.', 작성일자: '2024.08.30', 작성자: 'K3729D' },
        { 번호: 15, 평점: 4, 리뷰: '부작용이 없어서 좋아요.', 작성일자: '2024.08.31', 작성자: 'M1827B' },
    ];

    const totalPages = Math.ceil(dummyReviews.length / itemsPerPage);
    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    const currentReviews = dummyReviews.slice(indexOfFirstReview, indexOfLastReview);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        console.log('리뷰:', review);
        console.log('평점:', rating);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="relative w-[100%] h-[3200px] bg-[#fff] overflow-hidden mt-[-40px]">
                        {/* 제품 상세 정보 섹션 */}
                        <div className="absolute left-[122px] top-[224px] w-[1728px] h-[1799px] overflow-hidden">
                            <div className="absolute left-0 top-[76px] w-[1728px] h-[1646px] bg-[#fff] overflow-hidden">
                                <div className="absolute left-[303px] top-[181px] w-[1121px] h-[590px]"></div>
                                <div className="absolute left-[-16px] top-[-96px] w-[1728px] h-[1646px] overflow-hidden">
                                    <div className="absolute left-[65px] top-[638px] w-[925px] h-[571px]"></div>
                                    <div className="absolute left-[535px] top-[69px] w-[913px] h-[447px]">
                                        <div className="absolute left-0 top-0 w-[913px] h-[116px] text-[36px] leading-[18px] font-['Roboto'] font-bold text-[#000] flex flex-col justify-center">제품 상세 정보</div>
                                        <div className="absolute left-0 top-[147px] w-[1175px] h-[500px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[5px]">
                                            <div className="absolute left-0 top-[-30px] w-[471px] h-[368px] flex">
                                                <div className="absolute left-[1px] top-[151px] w-[470px] h-[22px]"></div>
                                                <div className="absolute left-0 top-0 w-[470px] h-[368px]">
                                                    <div className="absolute left-0 top-0 w-[459px] h-[435px]">
                                                        <div className="absolute left-[10px] top-[50px] w-[1144px] h-[360px] text-[18px] leading-[18px] font-['Roboto'] font-bold text-[#000]">
                                                            효능 (efcyQesitm): {dummyProductInfo.efcyQesitm}<br />
                                                            사용법 (useMethodQesitm):<br />
                                                            {dummyProductInfo.useMethodQesitm}<br />
                                                            주의사항 경고 (atpnWarnQesitm): {dummyProductInfo.atpnWarnQesitm}<br />
                                                            주의사항 (atpnQesitm):<br />
                                                            {dummyProductInfo.atpnQesitm}<br />
                                                            상호작용 (intrcQesitm): {dummyProductInfo.intrcQesitm}<br />
                                                            부작용 (seQesitm): {dummyProductInfo.seQesitm}<br />
                                                            보관법 (depositMethodQesitm):<br />
                                                            {dummyProductInfo.depositMethodQesitm}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute left-[22px] top-[-70px] w-[907px] h-[81px] leading-[18px] font-['Roboto'] font-bold flex flex-col justify-center">
                                                <span className="text-[18px] text-[#000]">{dummyProductInfo.업체명}/{dummyProductInfo.제품명}</span>
                                                <span className="text-[14px] text-[#00000078]">{dummyProductInfo.품목기준코드} | {dummyProductInfo.수정일자}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-[-9px] top-[35px] w-[528px] h-[594px] overflow-hidden">
                                <div className="absolute left-0 right-0 bottom-0 h-0 border-[1px] border-solid border-[#00000000]"></div>
                            </div>
                            <img className="absolute left-[-10px] top-[241px]" width="495" height="270" src="/img/medicine/AlYak.png" alt="Product"></img>
                        </div>

                        {/* 리뷰 작성 섹션 */}
                        <div className="absolute left-[-35px] top-[1027px] w-[1869px] h-[637px] overflow-hidden">
                            <div className="absolute left-[673px] top-[74px] w-[468px] h-[443px]">
                                <div className="absolute left-[-444px] top-[-22px] w-[1355px] flex flex-col items-start justify-start gap-[22px]">
                                    <div className="self-stretch text-[58px] leading-[43px] font-['Roboto'] font-bold text-[#000]">리뷰 작성</div> <br />
                                    <div className="self-stretch text-[22px] leading-[22px] font-['Roboto'] text-[#000]">의견을 자유롭게 작성해 주세요.</div>
                                </div>
                                <div className="absolute left-[-444px] top-[198px] w-[1356px] h-[281px]">
                                    <div className="absolute left-0 top-[-47px] w-[468px] h-[281px]">
                                        <div className="absolute left-0 top-0 w-[977px] h-[329px] border-[1px] border-solid border-[#000] overflow-hidden">
                                            <div className="absolute left-0 top-[0px] w-[977px] h-[328px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[5px]">
                                                <textarea
                                                    className="w-full h-[286px] text-[13px] leading-[18px] font-['Roboto'] text-[#00000080] p-4 border rounded-lg mt-10"
                                                    placeholder="내용을 입력 해 주세요"
                                                    value={review}
                                                    onChange={handleReviewChange}
                                                />
                                                <div className="absolute left-[0px] right-[0px] bottom-[286px] h-0 border-[1px] border-solid border-[#000]"></div>
                                                <div className="absolute left-[810px] top-[8px] flex items-center">
                                                    <div className="text-[14px] leading-[18px] font-['Roboto'] font-bold text-[#000] whitespace-nowrap">평점</div>
                                                    <div className="ml-2">
                                                        <StarRating rating={rating} onRatingChange={handleRatingChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-[234px] top-[180px] w-[216px] h-[43px]"></div>
                                    <div className="absolute left-0 top-[180px] w-[216px] h-[43px]"></div>
                                    <img className="absolute left-[1033px] top-[-184px]" width="544" height="554" src="/img/medicine/review.png" alt="Decoration"></img>
                                </div>
                            </div>
                            <div className="absolute left-[991px] top-[574px] w-[216px] flex flex-col items-center justify-center p-[11px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[7px]">
                                <button className="text-[14px] leading-[22px] font-['Roboto'] font-medium text-[#fff] whitespace-nowrap" onClick={handleSubmit}>작성 완료</button>
                            </div>
                        </div>

                        {/* 리뷰 목록 섹션 */}
                        <div className="absolute left-[-370px] top-[1752px] w-[2472px] h-[2132px] bg-[#fff] overflow-hidden">
                            <div className="absolute left-[434px] top-[259px] w-[1604px] h-[843px]"></div>
                            <div className="absolute left-[-371px] top-[-10px] w-[3213px] h-[1774px] ">
                                <div className="absolute left-0 top-[0px] w-[3213px] h-[1774px] flex">
                                    <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[3213px] h-[1774px] overflow-hidden">
                                        <div className="absolute left-[417px] top-[128px] w-[2380px] h-[380px]">
                                            <div className="absolute left-0 top-0 w-[2380px] h-[380px]">
                                                <div className="absolute left-0 top-0 w-[2380px] h-[271px]">
                                                    <div className="absolute left-[723px] top-[27px] w-[1105px] text-[59px] leading-[54px] font-['NotoSerifTamilSlanted'] font-bold text-[#000] text-center">리뷰 목록</div>
                                                    <div className="absolute left-[1009px] top-[380px]"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-y-1/2 right-[902px] top-[calc(50%+-51px)] w-[1239px] h-[859px] flex flex-col items-center justify-start border-[1.8px] border-solid border-[#0000001a] rounded-[4px] overflow-hidden">
                                            <div className="relative self-stretch h-[90px] shrink-0 bg-[#cccccc1a] border-[1px] border-solid border-[#000]">
                                                <div className="absolute left-[23px] top-[27px] w-[34px] h-[23px]"></div>
                                                <div className="absolute left-[479px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">리뷰</div>
                                                <div className="absolute left-[699px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">작성일자</div>
                                                <div className="absolute left-[864px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">작성자</div>
                                                <div className="absolute left-[186px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">평점</div>
                                                <div className="absolute left-[870px] top-[35px] w-[508px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">상세정보</div>
                                                <div className="absolute left-[33px] top-[35px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">번호</div>
                                            </div>
                                            {currentReviews.map((review, index) => (
                                                <div key={index} className="relative self-stretch h-[77px] shrink-0">
                                                    <div className="absolute left-[34px] top-[32px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">{review.번호}</div>
                                                    <div className="absolute left-[186px] top-[32px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">
                                                        <StarRating rating={review.평점} onRatingChange={() => { }} isClickable={false} />
                                                    </div>
                                                    <div className="absolute left-[428px] top-[30px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">{review.리뷰}</div>
                                                    <div className="absolute left-[681px] top-[32px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">{review.작성일자}</div>
                                                    <div className="absolute left-[1010px] top-[23px] w-[169px] flex flex-col items-start justify-start pt-0 pr-0 pb-0 pl-[56px]">
                                                        <div className="self-stretch h-[41px] shrink-0 flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute left-[881px] top-[17px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">{review.작성자}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* 페이지네이션 */}
                                        <div className="absolute left-[1558px] top-[1301px] w-[286px] h-[83px] bg-[#fff] overflow-hidden flex justify-center space-x-2">
                                            {[...Array(totalPages).keys()].map((page) => (
                                                <div key={page} className="w-[53px] h-[53px] flex">
                                                    
                                                    <button
                                                        onClick={() => handlePageChange(page + 1)}
                                                        className={`absolute text-center bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold ${currentPage === page + 1 ? 'bg-blue-700' : ''}`}
                                                    >
                                                        {page + 1}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer 영역 */}
                    <footer className="w-full bg-black text-white py-8 mt-auto">
                        <div className="container mx-auto px-6 flex justify-between items-center">
                            <div className="flex items-center">
                                <img src="/img/footer/logo.png" alt="응급NAVI" width="117" height="100" />
                                <div className="ml-4 text-xl font-bold">응급NAVI</div>
                            </div>
                            <div className="text-gray-400 text-sm">
                                서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원 | 대표전화: 1544-9970
                                <br />
                                © 2024 응급NAVI. All Rights Reserved.
                            </div>
                            <img src="/img/footer/group.png" alt="Group" width="145" height="34" />
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default MedicineDetail;
