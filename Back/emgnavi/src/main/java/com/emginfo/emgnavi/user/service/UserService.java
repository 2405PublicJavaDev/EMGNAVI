package com.emginfo.emgnavi.user.service;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.User;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;

import java.util.HashMap;

public interface UserService {

    SingleMessageSentResponse sendVerificationCode(String userPhone, String verificationCode);

    int insertUser(UserInfoRequest request);

    int checkIdDuplicate(UserIdRequest request);

    int checkNicknameDuplicate(UserNicknameRequest request);

    User selectIdByPhone(VerifyPhoneRequest request);

    User checkLogin(LoginRequest request);

    User selectUserbyId(UserInfoRequest request);

    User selectUserbyId(UserIdRequest request);

    int modifyUser(UserInfoRequest request);

    int changePw(LoginRequest request);

    void saveResetToken(String userId, String tokenId);

    boolean resetPassword(String tokenId, String userPw);

    int deleteUser(UserIdRequest request);

    int changePhone(ChangePhoneRequest request);

    String getKaKaoAccessToken(String code);

    HashMap<String, Object> getKakaoUserInfo (String accessToken);

    String getNaverAccessToken(String code);

    HashMap<String, Object> getNaverUserInfo(String accessToken);

    String getGoogleAccessToken(String code);

    HashMap<String, Object> getGoogleUserInfo(String accessToken);

    User selectUserbyId(String userId);

    String convertGender(String gender);

    String convertPhone(String phone);

}
