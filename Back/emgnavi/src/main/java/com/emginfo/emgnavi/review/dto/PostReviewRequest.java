package com.emginfo.emgnavi.review.dto;

import lombok.Data;

@Data
public class PostReviewRequest {

    private String refNo;
    private int rating;
    private String content;
}