package com.emginfo.emgnavi.user.service;

import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.stereotype.Service;

public interface UserService {

    SingleMessageSentResponse sendVerificationCode(String userPhone);
}
