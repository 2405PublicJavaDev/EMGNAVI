package com.emginfo.emgnavi.user.service;

import com.emginfo.emgnavi.user.model.dto.UserIdRequest;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.stereotype.Service;

public interface UserService {

    SingleMessageSentResponse sendVerificationCode(String userPhone);

    int insertUser(UserInfoRequest request);

    int checkIdDuplicate(UserIdRequest request);
}
