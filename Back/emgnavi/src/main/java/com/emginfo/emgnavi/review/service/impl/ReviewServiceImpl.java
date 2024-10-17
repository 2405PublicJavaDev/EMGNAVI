package com.emginfo.emgnavi.review.service.impl;

import com.emginfo.emgnavi.review.dto.GetReviewOneByNoResponse;
import com.emginfo.emgnavi.review.dto.PostReviewRequest;
import com.emginfo.emgnavi.review.mapper.ReviewMapper;
import com.emginfo.emgnavi.review.service.ReviewService;
import com.emginfo.emgnavi.review.vo.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private ReviewMapper reviewMapper;

    public ReviewServiceImpl() {}
    @Autowired
    public ReviewServiceImpl(ReviewMapper reviewMapper) { this.reviewMapper = reviewMapper; }

    @Override
    @Transactional()
    public int postReview(String id, PostReviewRequest request) {
        Reviews review = Reviews.builder()
                .writerId(id)
                .refNo(request.getRefNo())
                .rating(request.getRating())
                .content(request.getContent())
                .build();
        return reviewMapper.postReview(review);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Reviews> getReviewListByRefNo(String refNo) {
        List<Reviews> reviewList = reviewMapper.getReviewListByRefNo(refNo);
        return reviewList;
//        return reviewMapper.getReviewListByRefNo(refNo);
    }

    @Override
    @Transactional(readOnly = true)
    public GetReviewOneByNoResponse getReviewOneByNo(String no) {
        Reviews review = reviewMapper.getReviewOneByNo(no);
        GetReviewOneByNoResponse response = new GetReviewOneByNoResponse();
        response.setWriterId(review.getWriterId());
        response.setContent(review.getContent());
        return response;
    }

    @Override
    public int deleteReview(String no) {
        return reviewMapper.deleteReview(no);
    }
}
