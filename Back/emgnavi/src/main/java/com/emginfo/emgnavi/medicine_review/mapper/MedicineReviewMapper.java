package com.emginfo.emgnavi.medicine_review.mapper;

import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Delete;

import java.util.List;

@Mapper
public interface MedicineReviewMapper {

    // 의약품 리뷰 조회
    List<MedicineReviews> selectMedicineReviews(String itemSeq);

    // 리뷰 작성
    int insertReview(MedicineReviews review);

    // WRITER_ID로 닉네임 조회
    String selectNicknameByWriterId(String writerId);

    // 리뷰 작성자 ID 조회
    String selectWriterIdByReviewId(Long reviewId);

    // 리뷰 삭제 - XML 매퍼에서 사용
    int deleteReview(Long reviewId);
}
