package com.emginfo.emgnavi.review.service.impl;

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
    @Transactional
    public List<Reviews> getReviewListByRefNo(String refNo) {
        List<Reviews> reviews = reviewMapper.getReviewListByRefNo(refNo);
        return reviews;
//        return reviewMapper.getReviewListByRefNo(refNo);
    }
}
