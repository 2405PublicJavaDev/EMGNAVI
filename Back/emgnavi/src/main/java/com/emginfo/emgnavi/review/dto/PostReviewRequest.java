package com.emginfo.emgnavi.review.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PostReviewRequest {

    private String refNo;
    private int rating;
    private String content;
}