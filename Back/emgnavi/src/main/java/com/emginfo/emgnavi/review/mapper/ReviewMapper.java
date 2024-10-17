package com.emginfo.emgnavi.review.mapper;

import com.emginfo.emgnavi.review.vo.Reviews;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {

    /**
     * 리뷰 작성 Mapper
     * @param review
     * @return int
     */
    int postReview(Reviews review);

    /**
     * 리뷰 참조로 조회 Mapper
     * @param refNo
     * @return List<Reviews>
     */
    List<Reviews> getReviewListByRefNo(String refNo);

    /**
     * 리뷰 번호로 조회 Mapper
     * @param no
     * @return Reviews
     */
    Reviews getReviewOneByNo(String no);

    /**
     * 리뷰 수정 Mapper
     * @param review
     * @return int
     */
    int updateReview(Reviews review);

    /**
     * 리뷰 삭제 Mapper
     * @param no
     * @return int
     */
    int deleteReview(String no);
}