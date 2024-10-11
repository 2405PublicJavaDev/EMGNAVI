package com.emginfo.emgnavi.user.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoRequest {
    private String userId;
    private String userPw;
    private String userNickname;
    private String userPhone;
    private String userName;
    private String userGender;
    private String userAddress;
    private String marketingAgree;
}
