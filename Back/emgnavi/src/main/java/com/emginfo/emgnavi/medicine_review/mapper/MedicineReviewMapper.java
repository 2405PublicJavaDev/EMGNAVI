package com.emginfo.emgnavi.medicine_review.mapper;

import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MedicineReviewMapper {
    // 의약품 리뷰 조회
    List<MedicineReviews> selectMedicineReviews(String itemSeq);

    // WRITER_ID로 닉네임 조회
    @Select("SELECT USER_NICKNAME FROM USER_TBL WHERE USER_ID = #{writerId}")
    String selectNicknameByWriterId(String writerId);

    // 약국 및 병원 리뷰 관련 메서드는 주석 처리된 상태로 유지
    // List<MedicineReviews> selectPharmacyReviews(String pharmacyId);
    // List<MedicineReviews> selectHospitalReviews(String hospitalId);
    // int insertReview(MedicineReviews review);
}