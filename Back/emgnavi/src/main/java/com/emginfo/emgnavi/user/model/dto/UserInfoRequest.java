package com.emginfo.emgnavi.user.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoRequest {
//    @NotBlank(message = "아이디를 입력해주세요.")
    private String userId;
//    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String userPw;
//    @NotBlank(message = "닉네임을 입력해주세요.")
    private String userNickname;
    private String userPhone;
    private String userName;
    private String userGender;
    private String userAddress;
    private String marketingAgree;
}
