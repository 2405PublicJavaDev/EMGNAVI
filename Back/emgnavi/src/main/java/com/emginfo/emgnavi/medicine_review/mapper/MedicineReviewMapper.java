package com.emginfo.emgnavi.medicine_review.mapper;

import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MedicineReviewMapper {
    // 의약품 리뷰 조회
    List<MedicineReviews> selectMedicineReviews(String itemSeq);

    // 리뷰 작성
    int insertReview(MedicineReviews review);

    // WRITER_ID로 닉네임 조회
    @Select("SELECT USER_NICKNAME FROM USER_TBL WHERE USER_ID = #{writerId}")
    String selectNicknameByWriterId(String writerId);
}