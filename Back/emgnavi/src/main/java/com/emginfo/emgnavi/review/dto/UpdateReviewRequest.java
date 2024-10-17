package com.emginfo.emgnavi.review.dto;

import lombok.Data;

@Data
public class UpdateReviewRequest {

    private int rating;
    private String content;
}