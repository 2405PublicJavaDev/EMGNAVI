package com.emginfo.emgnavi.user.service.impl;

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

    public UserServiceImpl() {
        this.messageService = NurigoApp.INSTANCE.initialize("NCSY6JZLRXVWS3BX", "RDC9PGPKKGCSIQSWT4IFHK0NNO1IOVW1", "https://api.coolsms.co.kr");
    }

    @Override
    public SingleMessageSentResponse sendVerificationCode(String userPhone) {
        Message message = new Message();
        message.setFrom("01053248588");
        message.setTo(userPhone);
        message.setText("문자 테스트");

        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
        System.out.println(response);

        return response;
    }
}
