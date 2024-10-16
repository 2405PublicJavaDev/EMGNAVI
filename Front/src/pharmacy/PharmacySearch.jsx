import React, { useState } from 'react';

const PharmacySearch = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchCategory, setSearchCategory] = useState('아이디');
    const [showCategoryList, setShowCategoryList] = useState(false);
    const itemsPerPage = 7;

    const categories = ['아이디', '리뷰 내용', '작성일자', '평점', '기능 번호'];

    const dummyReviews = [
        { id: 1, userId: 'user01@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 5, feature: 'A' },
        { id: 2, userId: 'user02@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 4, feature: 'B' },
        { id: 3, userId: 'user03@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 5, feature: 'C' },
        { id: 4, userId: 'user04@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 3, feature: 'D' },
        { id: 5, userId: 'user05@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 4, feature: 'E' },
        { id: 6, userId: 'user06@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 2, feature: 'F' },
        { id: 7, userId: 'user07@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 5, feature: 'G' },
        { id: 8, userId: 'user08@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 3, feature: 'H' },
        { id: 9, userId: 'user09@gmail', content: '리뷰 내용입니다.', date: '2024.09.30', rating: 4, feature: 'I' },
    ];

    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    const currentReviews = dummyReviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(dummyReviews.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex justify-center"> {/* justify-center 추가 */}
                {[1, 2, 3, 4, 5].map((star) => (
                    <img
                        key={star}
                        src={star <= rating ? "/img/medicine/goldonestar.png" : "/img/medicine/greyonestar.png"}
                        alt={`Star ${star}`}
                        width="33"
                        height="27"
                        className="mx-1"  
                    />
                ))}
            </div>
        );
    };

    const toggleCategoryList = () => {
        setShowCategoryList(!showCategoryList);
    };

    const selectCategory = (category) => {
        setSearchCategory(category);
        setShowCategoryList(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="pt-[165px] w-full bg-white"></div>
            <div className="flex-grow relative w-[100%] bg-[#fff] overflow-hidden" style={{marginTop: '-161px'}}>
                <div className="relative w-[100%] h-[900px] bg-[#fff] overflow-hidden">
                    <div className="absolute left-[-3px] top-[124px] w-[1923px] h-[170px] bg-[#0b2d85]"></div>
                    <div className="absolute left-[-5px] top-[161px] w-[100%] h-[725px] overflow-hidden">
                        <div className="absolute left-[212px] top-0 w-[333px] h-[57px] text-[25px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">
                            약국 조회
                        </div>
                        <div className="absolute -translate-y-1/2 right-[198px] top-[calc(50%+-36px)] w-[1460px] h-[535px] flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#fff] rounded-[5px] overflow-hidden shadow-sm border-[#0000001a]">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#cccccc1a]">
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">번호</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">작성자 아이디</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">리뷰 내용</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">작성일자</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">평점</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">기능 번호</th>
                                        <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">리뷰 관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentReviews.map((review, index) => (
                                        <tr key={review.id} className="h-[68px]">
                                            <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                            <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{review.userId}</td>
                                            <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{review.content}</td>
                                            <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{review.date}</td>
                                            <td className="text-center">{renderStars(review.rating)}</td>
                                            <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{review.feature}</td>
                                            <td className="text-center">
                                                <button className="w-[80px] h-[36px] bg-[#0b2d85] rounded-[8px] text-[14px] font-['Roboto'] font-bold text-[#fff]">
                                                    관리
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Pagination */} 
                        <div className="absolute left-[920px] top-[615px] w-[190px] h-[55px] bg-[#fff] overflow-hidden flex">
                            {[...Array(totalPages).keys()].map((number) => (
                                <div key={number} className="w-[35px] h-[35px] mx-[5px] flex items-center justify-center cursor-pointer" onClick={() => handlePageChange(number + 1)}>
                                    {/* <img src="/img/medicine/bluebox.png" alt="Page box" width="35" height="35" /> */}
                                    <div className="absolute text-center bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold">
                                        {number + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* 검색창 - 페이지네이션 하단으로 이동 */} 
                        <div className="absolute left-[760px] top-[670px] w-[416px] h-[37px] flex justify-center">
                            <select className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]">
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="원하시는 리뷰를 검색해 주세요"
                                className="border p-2 w-[250px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#0000001a] rounded-l-md"
                            />
                            <button className="bg-[#0b2d85] text-white px-4 h-[36px] text-[18px] rounded-r-md">
                                검색
                            </button>
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
    );
};

export default PharmacySearch;
