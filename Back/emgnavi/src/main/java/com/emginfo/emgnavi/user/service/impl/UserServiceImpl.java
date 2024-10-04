package com.emginfo.emgnavi.user.service.impl;

import com.emginfo.emgnavi.user.model.dto.UserIdRequest;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import com.emginfo.emgnavi.user.model.mapper.UserMapper;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import com.emginfo.emgnavi.user.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final DefaultMessageService messageService;
    private UserMapper mapper;

    public UserServiceImpl(UserMapper mapper) {
        this.messageService = NurigoApp.INSTANCE.initialize("NCSY6JZLRXVWS3BX", "RDC9PGPKKGCSIQSWT4IFHK0NNO1IOVW1", "https://api.coolsms.co.kr");
        this.mapper = mapper;
    }

    @Override
    public SingleMessageSentResponse sendVerificationCode(String userPhone) {
        Message message = new Message();
        message.setFrom("01053248588");
        message.setTo(userPhone);
        message.setText("제발 가져라");

        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
        System.out.println(response);

        return response;
    }

    @Override
    public int insertUser(UserInfoRequest request) {
        int result = mapper.insertUser(request);
        return result;
    }

    @Override
    public int checkIdDuplicate(UserIdRequest request) {
        int result = mapper.checkIdDuplicate(request);
        return result;
    }
}
