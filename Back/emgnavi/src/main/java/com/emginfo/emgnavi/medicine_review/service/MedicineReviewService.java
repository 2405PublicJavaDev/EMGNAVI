package com.emginfo.emgnavi.medicine_review.service;

import com.emginfo.emgnavi.medicine_review.mapper.MedicineReviewMapper;
import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineReviewService {

    private final MedicineReviewMapper medicineReviewMapper;

    public MedicineReviewService(MedicineReviewMapper medicineReviewMapper) {
        this.medicineReviewMapper = medicineReviewMapper;
    }

    // 의약품 리뷰 조회
    public List<MedicineReviews> getMedicineReviews(String itemSeq) {
        return medicineReviewMapper.selectMedicineReviews(itemSeq);
    }

    // 의약품 리뷰 작성
    public MedicineReviews createMedicineReview(MedicineReviews review) {
        medicineReviewMapper.insertReview(review);
        return review;
    }

    // 닉네임 조회
    public String getNicknameByWriterId(String writerId) {
        return medicineReviewMapper.selectNicknameByWriterId(writerId);
    }

    /**
     * 리뷰 삭제 로직: 로그인된 사용자와 리뷰 작성자가 일치할 경우에만 삭제
     *
     * @param reviewId 삭제할 리뷰의 ID
     * @param userId   로그인된 사용자 ID
     * @return 삭제 성공 여부
     */
    public boolean deleteReview(Long reviewId, String userId) {
        // 리뷰 작성자의 ID를 DB에서 조회
        String writerId = medicineReviewMapper.selectWriterIdByReviewId(reviewId);

        // writerId와 로그인된 userId가 일치하는지 확인
        if (writerId != null && writerId.equals(userId)) {
            // 일치할 경우 리뷰 삭제
            medicineReviewMapper.deleteReview(reviewId);
            return true;
        }

        // 작성자와 사용자가 일치하지 않으면 false 반환
        return false;
    }
}
