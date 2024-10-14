package com.emginfo.emgnavi.review.service;

import com.emginfo.emgnavi.review.dto.PostReviewRequest;

public interface ReviewService {

    int postReview(String id, PostReviewRequest request);
}
