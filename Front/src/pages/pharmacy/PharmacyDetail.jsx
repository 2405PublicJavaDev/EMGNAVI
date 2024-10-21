import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReportPopup from '../report/ReportPopup';
import Modal from 'react-modal';
import GetSketchMap from '../map/GetSketchMap';
import { UserContext } from '../../UserContext';

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
            onDelete(review.no);
        }
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <StarRating rating={review.rating} onRatingChange={() => { }} isClickable={false} />
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

const PharmacyDetail = () => {
    const [pharmacy, setPharmacy] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const { hpid } = useParams();
    const { userId } = useContext(UserContext);
    const itemsPerPage = 10;
    const [isFavorite, setIsFavorite] = useState(false);
    const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    const fetchReviews = useCallback(() => {
        fetch(`/api/medicine_reviews/medicine?itemSeq=${hpid}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setReviews(data);
                } else {
                    setReviews([]);
                }
            })
            .catch(() => setReviews([]));
    }, [hpid]);

    useEffect(() => {
        const fetchPharmacyDetail = async () => {
            try {
                const response = await fetch(`/api/pharmacy/detail/${hpid}`);
                const data = await response.json();
                setPharmacy(data);
            } catch {
                setPharmacy(null);
            }
        };

        const fetchFavoriteStatus = async () => {
            if (userId) {
                try {
                    const response = await fetch(`/api/pharmacy/is-favorite?userId=${userId}&refNo=${hpid}`);
                    const data = await response.json();
                    setIsFavorite(data.isFavorite);
                } catch {
                    setIsFavorite(false);
                }
            }
        };

        fetchPharmacyDetail();
        fetchFavoriteStatus();
        fetchReviews();
    }, [hpid, userId, fetchReviews]);

    const handleDeleteReview = async (reviewId) => {
        try {
            const response = await fetch(`/api/medicine_reviews/medicine/${reviewId}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            // 서버 응답 상태 및 내용 확인
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('리뷰 삭제 실패:', errorMessage);
                alert(`리뷰 삭제 실패: ${errorMessage}`);
                return;
            }

            alert('리뷰가 성공적으로 삭제되었습니다.');
            
            // 삭제 후 즉시 UI에서 해당 리뷰 제거
            setReviews(prevReviews => prevReviews.filter(review => review.no !== reviewId));
        } catch (error) {
            console.error('리뷰 삭제 중 오류 발생:', error);
            alert('리뷰 삭제 중 오류가 발생했습니다.');
        }
    };

    const handleSubmit = async () => {
        if (!userId) {
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
                    rating: rating,
                    userId: userId
                }),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('리뷰 작성에 실패했습니다.');
            }

            const data = await response.json();
            alert('리뷰가 성공적으로 작성되었습니다.');
            fetchReviews();
            setReview('');
            setRating(0);
        } catch (error) {
            alert('리뷰 작성 중 오류가 발생했습니다.');
        }
    };

    const handleFavorite = async () => {
        if (!userId) {
            alert('로그인이 필요합니다.');
            return;
        }

        // 즉시 UI 업데이트
        setIsFavorite(prev => !prev);

        try {
            const method = isFavorite ? 'DELETE' : 'POST';
            const url = '/api/pharmacy/favorite';
            const body = new URLSearchParams({
                userId,
                refNo: hpid
            });

            if (method === 'POST') {
                body.append('dutyName', pharmacy.dutyName);
                body.append('dutyAddr', pharmacy.dutyAddr);
                body.append('dutyTel1', pharmacy.dutyTel1);
            }

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: body.toString(),
            });

            if (!response.ok) {
                throw new Error('즐겨찾기 처리에 실패했습니다.');
            }

            const text = await response.text();
            console.log('Server response:', text);  // 서버 응답 로깅

            let result;
            try {
                result = JSON.parse(text);
            } catch (e) {
                // JSON 파싱 실패 시, 텍스트 응답을 성공으로 간주
                result = { success: text.includes('successfully') };
            }

            if (result.success) {
                alert(isFavorite ? '즐겨찾기에서 삭제되었습니다.' : '즐겨찾기에 등록되었습니다.');
            } else {
                throw new Error(result.message || '즐겨찾기 처리에 실패했습니다.');
            }
        } catch (error) {
            console.error('즐겨찾기 처리 중 오류:', error);
            alert('즐겨찾기 처리 중 오류가 발생했습니다.');
            // 오류 발생 시 UI 원상복구
            setIsFavorite(prev => !prev);
        }
    };

    const handleOpenReportPopup = (review) => {
        setSelectedReview(review);
        setIsReportPopupOpen(true);
    };

    const handleCloseReportPopup = () => {
        setIsReportPopupOpen(false);
        setSelectedReview(null);
    };

    if (!pharmacy) {
        return <div>Loading...</div>;
    }

    console.log('Total reviews:', reviews.length);
    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="container mx-auto px-4 py-64">
                        {/* 약국 상세 정보 섹션 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6">약국 상세 정보</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex mb-4">
                                    <GetSketchMap latitude={pharmacy.wgs84Lat} longitude={pharmacy.wgs84Lon} placeName={pharmacy.dutyName} />
                                    <div className='max-w-[700px] ml-[50px]'>
                                        <div className='flex'>
                                            <h2 className="text-2xl font-semibold mb-2">{pharmacy.dutyName}</h2>
                                            <button className="w-[40px] h-[35px]" onClick={handleFavorite}>
                                                <img
                                                    src={isFavorite ? "/img/medicine/goldonestar.png" : "/img/medicine/greyonestar.png"}
                                                    alt="Favorite Star"
                                                    className="w-full h-full"
                                                />
                                            </button>
                                        </div>
                                        <p className="text-gray-600 mb-2">주소: {pharmacy.dutyAddr}</p>
                                        <p className="font-bold mb-2">전화번호: {pharmacy.dutyTel1}</p>
                                        <p className="mb-2">우편번호: {pharmacy.postCdn1}-{pharmacy.postCdn2}</p>
                                        <p className="mb-2">약도: {pharmacy.dutyMapping}</p>
                                        <p className="mb-2">운영 정보: {pharmacy.dutyInf}</p>
                                        <p className="mb-2">위도: {pharmacy.wgs84Lat}</p>
                                        <p>경도: {pharmacy.wgs84Lon}</p>
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
                                        onChange={(e) => setReview(e.target.value)}
                                        disabled={!userId}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="mr-2">평점:</span>
                                            <StarRating rating={rating} onRatingChange={setRating} isClickable={!!userId} />
                                        </div>
                                        <div className="flex items-center">
                                            {!userId && (
                                                <div className="flex items-center mr-4 text-red-500">
                                                    <span>로그인 후 작성 가능합니다.</span>
                                                </div>
                                            )}
                                            <button
                                                className={`px-4 py-2 rounded transition ${userId ? "bg-[#0B2D85] text-white hover:bg-[#0939AD]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                                onClick={handleSubmit}
                                                disabled={!userId}
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
                                        {currentReviews.map((review) => (
                                            <React.Fragment key={review.no}>
                                                <div className="px-6 py-4 flex items-center border-t border-gray-200">
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
                                                            onClick={() => setExpandedReviewId(expandedReviewId === review.no ? null : review.no)}
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
                                                            onDelete={() => handleDeleteReview(review.no)}
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
                                        onClick={() => setCurrentPage(page + 1)}
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

export default PharmacyDetail;
