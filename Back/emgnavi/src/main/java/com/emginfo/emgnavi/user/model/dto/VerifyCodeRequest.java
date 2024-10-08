package com.emginfo.emgnavi.user.model.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VerifyCodeRequest {
    private String userPhone;
    private String verifyCode;
}
