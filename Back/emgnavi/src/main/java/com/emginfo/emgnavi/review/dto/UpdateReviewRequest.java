package com.emginfo.emgnavi.review.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UpdateReviewRequest {

    @Min(value = 1, message = "최소 별점은 1입니다.")
    @Max(value = 5, message = "최대 별점은 5입니다.")
    private int rating;

    @NotBlank(message = "내용은 필수값입니다.")
    private String content;
}