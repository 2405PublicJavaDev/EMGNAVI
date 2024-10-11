package com.emginfo.emgnavi.support.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResponseSupportRequest {

    private String writerId;
    private String requestContent;
    @NotBlank(message = "내용은 필수 입력 값입니다.")
    private String responseContent;
}