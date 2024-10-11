package com.emginfo.emgnavi.user.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
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
