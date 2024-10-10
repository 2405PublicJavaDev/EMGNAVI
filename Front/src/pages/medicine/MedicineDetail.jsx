import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

const 리뷰상세보기내용 = ({ review, onClose }) => {
    return (
        <div className="w-full bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out">
            <div className="max-w-[1070px] mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">리뷰 상세보기 - {review.작성자}</h3>
                    <span className="text-sm text-gray-500">{review.작성일자}</span>
                </div>
                <div className="mb-4">
                    <StarRating rating={review.평점} onRatingChange={() => { }} isClickable={false} />
                </div>
                <p className="text-base mb-6">{review.리뷰}</p>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={onClose}
                    >
                        삭제
                    </button>
                    <button
                        className="px-4 py-2 bg-[#0B2D85] text-white rounded hover:bg-[#0939AD] transition"
                        onClick={onClose}
                    >
                        등록
                    </button>
                </div>
            </div>
        </div>
    );
};

const MedicineDetail = () => {
    const [medicine, setMedicine] = useState(null);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const { itemSeq } = useParams(); // URL에서 itemSeq를 가져옴
    const itemsPerPage = 10;

    useEffect(() => {
        // API 호출로 의약품 상세 정보를 가져옴
        fetch(`/api/medicine/detail/${itemSeq}`)
            .then((response) => response.json())
            .then((data) => setMedicine(data))
            .catch((error) => console.error('Error fetching medicine details:', error));
    }, [itemSeq]);

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
        { 번호: 16, 평점: 5, 리뷰: '정말 잘 듣는 약입니다.', 작성일자: '2024.09.01', 작성자: 'Q12345' }
    ]; {/*더미 리뷰*/}

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

    const toggleReviewDetail = (reviewId) => {
        setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
    };

    if (!medicine) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="container mx-auto px-4 py-64">
                    {/* 제품 상세 정보 섹션 */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-6">제품 상세 정보</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex mb-4">
                                {medicine.itemImage ? (
                                    <img className="w-1/3 mr-6" src={medicine.itemImage || "/img/no-image.png"} alt="Product" />

                                ) : (
                                    <div className="w-1/3 mr-6 flex items-center justify-center text-gray-500">이미지 준비 중</div>
                                )}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">{medicine.entpName}/{medicine.itemName}</h2>
                                    <p className="text-gray-600 mb-2">{medicine.itemSeq} | {medicine.updateDe}</p>
                                    <p className="font-bold mb-2">효능: {medicine.efcyQesitm}</p>
                                    <p className="mb-2">사용법: {medicine.useMethodQesitm}</p>
                                    <p className="mb-2">주의사항: {medicine.atpnQesitm}</p>
                                    <p>보관법: {medicine.depositMethodQesitm}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 리뷰 작성 섹션 */}
                    <div className="mb-12 flex space-x-6">
                        <div className="w-2/3">
                            <h2 className="text-2xl font-bold mb-4">리뷰 작성</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <textarea
                                    className="w-full h-32 p-2 border rounded-md mb-4"
                                    placeholder="의견을 자유롭게 작성해 주세요."
                                    value={review}
                                    onChange={handleReviewChange}
                                />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="mr-2">평점:</span>
                                        <StarRating rating={rating} onRatingChange={handleRatingChange} />
                                    </div>
                                    <button
                                        className="px-4 py-2 bg-[#0B2D85] text-white rounded hover:bg-[#0939AD] transition"
                                        onClick={handleSubmit}
                                    >
                                        작성 완료
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3">
                            <img className="w-full h-auto object-cover" src="/img/medicine/review.png" alt="리뷰 작성 이미지" />
                        </div>
                    </div>

                    {/* 리뷰 목록 섹션 */}
                    <div className="mt-36">
                        <h2 className="text-4xl font-bold mb-28 text-center">리뷰 목록</h2>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 w-full">
                            <div className="px-6 py-4 bg-gray-100 flex font-bold text-lg">
                                <div className="w-14 text-center">번호</div> {/* 번호 열 크기 조금 축소 */}
                                <div className="w-28 text-center">평점</div> {/* 평점 열 크기 */}
                                <div className="flex-1 text-center">리뷰</div> {/* 리뷰 열 크기는 flex-1로 설정해 유동적으로 맞춤 */}
                                <div className="w-36 text-center">작성일자</div> {/* 작성일자 크기 축소 */}
                                <div className="w-36 text-center">작성자</div> {/* 작성자 크기 축소 */}
                                <div className="w-32 text-center">상세정보</div> {/* 상세정보 크기 */}
                            </div>
                            {currentReviews.map((review) => (
                                <React.Fragment key={review.번호}>
                                    <div className="px-6 py-4 flex items-center border-t border-gray-200">
                                        <div className="w-14 text-center">{review.번호}</div> {/* 번호 크기 */}
                                        <div className="w-28 text-center">
                                            <StarRating rating={review.평점} onRatingChange={() => { }} isClickable={false} />
                                        </div>
                                        <div className="flex-1 text-center truncate">{review.리뷰}</div> {/* 리뷰 크기 */}
                                        <div className="w-36 text-center">{review.작성일자}</div> {/* 작성일자 크기 */}
                                        <div className="w-36 text-center">{review.작성자}</div> {/* 작성자 크기 */}
                                        <div className="w-32 text-center">
                                            <button
                                                className="px-4 py-2 bg-[#0B2D85] text-white rounded-full hover:bg-[#0939AD] transition"
                                                onClick={() => toggleReviewDetail(review.번호)}
                                            >
                                                상세 정보
                                            </button>
                                        </div>
                                    </div>
                                    {expandedReviewId === review.번호 && (
                                        <리뷰상세보기내용 review={review} onClose={() => setExpandedReviewId(null)} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* 페이지네이션 */}
                        <div className="mt-14 flex justify-center space-x-2">
                            {[...Array(totalPages).keys()].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page + 1)}
                                    className={`px-4 py-2 rounded-lg border border-[#0939AD] ${currentPage === page + 1 ? 'bg-[#0B2D85] text-white' : 'bg-white text-[#0B2D85] hover:bg-gray-200'
                                        }`}
                                >
                                    {page + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
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

export default MedicineDetail;
