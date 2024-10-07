package com.emginfo.emgnavi.user.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserIdRequest {
//    @NotBlank(message = "아이디를 입력해주세요.")
    private String userId;
}