package com.emginfo.emgnavi.support.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PostSupportRequest {

    @NotBlank(message = "제목은 필수 입력 값입니다.")
    private String title;
    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    private String content;
}