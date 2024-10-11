package com.emginfo.emgnavi.user.service;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.User;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;

public interface UserService {

    SingleMessageSentResponse sendVerificationCode(String userPhone, String verificationCode);

    int insertUser(UserInfoRequest request);

    int checkIdDuplicate(UserIdRequest request);

    int checkNicknameDuplicate(UserNicknameRequest request);

    User selectIdByPhone(VerifyPhoneRequest request);

    User checkLogin(LoginRequest request);

    User selectUserbyId(UserInfoRequest request);

    int modifyUser(UserInfoRequest request);
}
