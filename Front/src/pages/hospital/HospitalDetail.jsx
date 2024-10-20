import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReportPopup from '../report/ReportPopup';
import Modal from 'react-modal';
import GetSketchMap from '../map/GetSketchMap';
import Chart from '../stat/Chart';

Modal.setAppElement('#root');

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

const 리뷰상세보기내용 = ({ review, onClose, onDelete, handleOpenReportPopup }) => {
    const handleDeleteClick = () => {
        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (confirmed) {
            onDelete(review.no); // 리뷰 삭제 로직 실행
        }
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <StarRating rating={review.rating} onRatingChange={() => {}} isClickable={false} />
                    <span className="ml-2 text-sm text-gray-600">{review.writerNickname}님 | {review.createdDateLong}</span>
                </div>
                <button className="flex items-center text-red-500 hover:text-red-600"
                    onClick={() => handleOpenReportPopup(review)}>
                    <img className="w-5 h-5 mr-1" src="/img/medicine/report.png" alt="신고버튼" />
                    <span className="text-sm font-bold">신고하기</span>
                </button>
            </div>
            <p className="text-base mb-4">{review.content}</p>
            <div className="flex justify-end">
                {review.isOwner && (
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm mr-2"
                        onClick={handleDeleteClick}
                    >
                        삭제
                    </button>
                )}
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

const HospitalDetail = () => {
    const [hospital, setHospital] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가
    const { hpid } = useParams();
    const itemsPerPage = 10;

    // 신고 팝업
    const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null); // 선택된 리뷰 저장

    const fetchReviews = useCallback(() => {
        fetch(`/api/medicine_reviews/medicine?itemSeq=${hpid}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Received review data:', data); // 추가된 로그
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
    }, [hpid]);

    useEffect(() => {
        // 로그인 상태 확인 로직
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/user/checkLogin', { credentials: 'include' });
                setIsLoggedIn(response.ok);
            } catch (error) {
                console.error('로그인 상태 확인 실패:', error);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();

        fetch(`/api/hospital/detail/${hpid}`)
            .then((response) => response.json())
            .then((data) => setHospital(data))
            .catch((error) => console.error('Error fetching hospital details:', error));

        fetchReviews();
    }, [hpid, fetchReviews]);

    const handleDeleteReview = async (reviewId) => {
        try {
            const response = await fetch(`/api/medicine_reviews/medicine/${reviewId}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('리뷰 삭제에 실패했습니다.');
            }

            alert('리뷰가 성공적으로 삭제되었습니다.');
            fetchReviews(); // 리뷰 목록 새로고침
        } catch (error) {
            console.error('리뷰 삭제 중 오류 발생:', error);
            alert('리뷰 삭제 중 오류가 발생했습니다.');
        }
    };

    const handleOpenReportPopup = (review) => {
        setSelectedReview(review);
        setIsReportPopupOpen(true);
    }
    const handleCloseReportPopup = () => {
        setIsReportPopupOpen(false);
        setSelectedReview(null);
    };


    console.log('Total reviews:', reviews.length);
    console.log('Items per page:', itemsPerPage);
    console.log('Current page:', currentPage);
    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    console.log('Index range:', indexOfFirstReview, '-', indexOfLastReview);
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    console.log('Current reviews:', currentReviews);

    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            alert('로그인 후 리뷰를 작성할 수 있습니다.');
            return;
        }

        try {
            const response = await fetch('/api/medicine_reviews/medicine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refNo: hpid,
                    content: review,
                    rating: rating
                }),
                credentials: 'include' // 세션 쿠키를 포함시키기 위해
            });

            if (!response.ok) {
                throw new Error('로그인후 작성가능합니다.');
            }

            const data = await response.json();
            console.log('리뷰가 성공적으로 작성되었습니다:', data);

            // 알림 창 표시
            alert('리뷰가 성공적으로 작성되었습니다!');

            // 리뷰 작성 후 리뷰 목록 새로고침
            fetchReviews();

            // 입력 필드 초기화
            setReview('');
            setRating(0);
        } catch (error) {
            console.error('Error:', error);
            alert(error.message);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleReviewDetail = (reviewId) => {
        setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
    };

    if (!hospital) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="container mx-auto px-4 py-64">
                        {/* 제품 상세 정보 섹션 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6">병원 상세 정보</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex mb-4">
                                    <GetSketchMap  latitude={hospital.wgs84Lat} longitude={hospital.wgs84Lon} placeName={hospital.dutyName}/>
                                    <div className='max-w-[700px] ml-[50px]'>
                                        <h2 className="text-2xl font-semibold mb-2">{hospital.dutyName}</h2>
                                        <p className="text-gray-600 mb-2">주소: {hospital.dutyAddr}</p>
                                        <p className="font-bold mb-2">진료과목: {hospital.dgidIdName}</p>
                                        <p className="mb-2">전화번호: {hospital.dutyTel1}</p>
                                        {hospital.dutyHayn == 1 ?
                                        (
                                            <>
                                                <p className="mb-2">응급실번호: {hospital.dutyTel3}</p>
                                                <p>응급병상 요일별 평균</p>
                                                <div className="w-[95%]">
                                                    <Chart searchType="dutyName" statType="DOW" keyword={hospital.hpid} />
                                                </div>
                                            </>
                                        ) :
                                        ('')
                                        }
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
                                        disabled={!isLoggedIn}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="mr-2">평점:</span>
                                            <StarRating rating={rating} onRatingChange={handleRatingChange} isClickable={isLoggedIn} />
                                        </div>
                                        <div className="flex items-center">
                                            {!isLoggedIn && (
                                                <div className="flex items-center mr-4 text-red-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 mr-1"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 8a8 8 0 11-16 0 8 8 0 0116 0zm-8 3a1 1 0 10-2 0 1 1 0 002 0zm-1-5a1 1 0 00-1 1v2a1 1 0 102 0V7a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>로그인 후 작성 가능합니다.</span>
                                                </div>
                                            )}
                                            <button
                                                className={`px-4 py-2 rounded transition ${
                                                    isLoggedIn 
                                                        ? "bg-[#0B2D85] text-white hover:bg-[#0939AD]" 
                                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                }`}
                                                onClick={handleSubmit}
                                                disabled={!isLoggedIn}
                                            >
                                                작성 완료
                                            </button>
                                        </div>
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
                                    {/* <div className="w-14 text-center">번호</div> */}
                                    <div className="w-28 text-center ml-16">평점</div>
                                    <div className="flex-1 text-center">리뷰</div>
                                    <div className="w-36 text-center">작성일자</div>
                                    <div className="w-40 text-center">작성자</div>
                                    <div className="w-32 text-center">상세정보</div>
                                </div>
                                {currentReviews.length === 0 ? (
                                    <div className="px-6 py-4 text-center">리뷰가 없습니다.</div>
                                ) : (
                                    <>
                                        {console.log('Rendering reviews:', currentReviews)} {/* 추가된 로그 */}
                                        {currentReviews.map((review) => (
                                            <React.Fragment key={review.no}>
                                                <div className="px-6 py-4 flex items-center border-t border-gray-200">
                                                    {/* <div className="w-14 text-center">{review.no}</div> */}
                                                    <div className="w-28 text-center ml-16">
                                                        <StarRating rating={review.rating} onRatingChange={() => { }} isClickable={false} />
                                                    </div>
                                                    <div className="flex-1 text-center truncate">
                                                        {review.content.length > 15 ? review.content.slice(0, 15) + '...' : review.content}
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
                                                        <리뷰상세보기내용
                                                            review={review}
                                                            onClose={() => setExpandedReviewId(null)}
                                                            onDelete={handleDeleteReview}
                                                            handleOpenReportPopup={handleOpenReportPopup}
                                                        />
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </>
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
                            {/* 신고하기 모달 */}
                            <Modal 
                                isOpen={isReportPopupOpen} 
                                onRequestClose={handleCloseReportPopup} 
                                contentLabel="신고 팝업"
                                className="fixed inset-0 flex items-center justify-center z-50"
                                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
                            >
                                <ReportPopup
                                    review={selectedReview}
                                    onClose={handleCloseReportPopup}
                                />
                            </Modal>
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

export default HospitalDetail;
