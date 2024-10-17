package com.emginfo.emgnavi.review.service;

import com.emginfo.emgnavi.review.dto.GetReviewOneByNoResponse;
import com.emginfo.emgnavi.review.dto.PostReviewRequest;
import com.emginfo.emgnavi.review.dto.UpdateReviewRequest;
import com.emginfo.emgnavi.review.vo.Reviews;

import java.util.List;

public interface ReviewService {

    /**
     * 리뷰 작성 Service
     * @param id
     * @param request
     * @return int
     */
    int postReview(String id, PostReviewRequest request);

    /**
     * 리뷰 참조로 조회 Service
     * @param refNo
     * @return List<Reviews>
     */
    List<Reviews> getReviewListByRefNo(String refNo);

    /**
     * 리뷰 번호로 조회 Service
     * @param no
     * @return GetReviewOneByNoResponse
     */
    GetReviewOneByNoResponse getReviewOneByNo(String no);

    /**
     * 리뷰 수정 Service
     * @param no
     * @return int
     */
    int updateReview(int no, UpdateReviewRequest request);

    /**
     * 리뷰 삭제 Service
     * @param no
     * @return int
     */
    int deleteReview(String no);
}