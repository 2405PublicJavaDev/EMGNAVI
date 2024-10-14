package com.emginfo.emgnavi.review.service;

import com.emginfo.emgnavi.review.dto.PostReviewRequest;
import com.emginfo.emgnavi.review.vo.Reviews;

import java.util.List;

public interface ReviewService {

    int postReview(String id, PostReviewRequest request);

    List<Reviews> getReviewListByRefNo(String refNo);
}
