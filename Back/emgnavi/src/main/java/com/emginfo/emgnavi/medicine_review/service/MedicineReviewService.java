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
}