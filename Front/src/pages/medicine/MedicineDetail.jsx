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
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <StarRating rating={review.rating} onRatingChange={() => { }} isClickable={false} />
                    <span className="ml-2 text-sm text-gray-600">{review.writerNickname}님 | {review.createdDateLong}</span>
                </div>
                <button className="flex items-center text-red-500 hover:text-red-600">
                    <img className="w-5 h-5 mr-1" src="/img/medicine/report.png" alt="신고버튼" />
                    <span className="text-sm font-bold">신고하기</span>
                </button>
            </div>
            <p className="text-base mb-4">{review.content}</p>
            <div className="flex justify-end">
                <button
                    className="px-4 py-2 bg-[#0B2D85] text-white rounded hover:bg-[#0939AD] transition text-sm"
                    onClick={onClose}
                >
                    닫기
                </button>
            </div>
        </div>
    );
};

const MedicineDetail = () => {
    const [medicine, setMedicine] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const { itemSeq } = useParams();
    const itemsPerPage = 10;

    useEffect(() => {
        fetch(`/api/medicine/detail/${itemSeq}`)
            .then((response) => response.json())
            .then((data) => setMedicine(data))
            .catch((error) => console.error('Error fetching medicine details:', error));

        fetch(`/api/reviews
/medicine?itemSeq=${itemSeq}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setReviews(data);
                } else {
                    console.error('리뷰 데이터가 배열이 아닙니다:', data);
                    setReviews([]);
                }
            })
            .catch((error) => {
                console.error('리뷰 데이터를 가져오는 중 오류 발생:', error);
                setReviews([]);
            });
    }, [itemSeq]);

    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

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
        <>
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
                                    <div className="w-14 text-center">번호</div>
                                    <div className="w-28 text-center">평점</div>
                                    <div className="flex-1 text-center">리뷰</div>
                                    <div className="w-36 text-center">작성일자</div>
                                    <div className="w-40 text-center">작성자</div>
                                    <div className="w-32 text-center">상세정보</div>
                                </div>
                                {currentReviews.length === 0 ? (
                                    <div className="px-6 py-4 text-center">리뷰가 없습니다.</div>
                                ) : (
                                    currentReviews.map((review) => (
                                        <React.Fragment key={review.no}>
                                            <div className="px-6 py-4 flex items-center border-t border-gray-200">
                                                <div className="w-14 text-center">{review.no}</div>
                                                <div className="w-28 text-center">
                                                    <StarRating rating={review.rating} onRatingChange={() => { }} isClickable={false} />
                                                </div>
                                                <div className="flex-1 text-center">
                                                    {review.content.length > 15 ? `${review.content.slice(0, 15)}...` : review.content}
                                                </div>

                                                <div className="w-36 text-center">{review.createdDateShort}</div>
                                                <div className="w-40 text-center">{review.writerNickname}</div>
                                                <div className="w-32 text-center">
                                                    <button
                                                        className="px-4 py-2 bg-[#0B2D85] text-white rounded-full hover:bg-[#0939AD] transition"
                                                        onClick={() => toggleReviewDetail(review.no)}
                                                    >
                                                        자세히 보기
                                                    </button>
                                                </div>
                                            </div>
                                            {expandedReviewId === review.no && (
                                                <div className="px-6 py-4">
                                                    <리뷰상세보기내용 review={review} onClose={() => setExpandedReviewId(null)} />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))
                                )}
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
        </>
    );
};

export default MedicineDetail;
