package com.emginfo.emgnavi.user.service.impl;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.mapper.UserMapper;
import com.emginfo.emgnavi.user.model.vo.Token;
import com.emginfo.emgnavi.user.model.vo.User;
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
    public SingleMessageSentResponse sendVerificationCode(String userPhone, String verificationCode) {
        Message message = new Message();
        message.setFrom("01053248588");

        message.setTo(userPhone);

        message.setText("[응급NAVI] 인증번호[" + verificationCode + "]를 화면에 입력해주세요");
        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));

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

    @Override
    public int checkNicknameDuplicate(UserNicknameRequest request) {
        int result = mapper.checkNicknameDuplicate(request);
        return result;
    }

    @Override
    public User selectIdByPhone(VerifyPhoneRequest request) {
        User user = mapper.selectIdByPhone(request);
        return user;
    }

    @Override
    public User checkLogin(LoginRequest request) {
        User user = mapper.checkLogin(request);
        return user;
    }

    @Override
    public User selectUserbyId(UserInfoRequest request) {
        User user = mapper.selectUserById(request);
        return user;
    }

    @Override
    public User selectUserbyId(UserIdRequest request) {
        User user = mapper.selectUserById(request);
        return user;
    }

    @Override
    public int modifyUser(UserInfoRequest request) {
        int result = mapper.modifyUser(request);
        return result;
    }

    @Override
    public int changePw(LoginRequest request) {
        int result = mapper.changePw(request);
        return result;
    }

    @Override
    public void saveResetToken(String userId, String tokenId) {
        mapper.saveResetToken(userId, tokenId);
    }

    @Override
    public boolean resetPassword(String tokenId, String userPw) {
        Token token = mapper.selectTokenById(tokenId);
        if (token != null) {
            UserIdRequest request = new UserIdRequest();
            request.setUserId(token.getUserId());
            System.out.println("서비스토큰 :" + token.getTokenId());
            User user = mapper.selectUserById(request);
            if(user != null) {
                LoginRequest request1 = new LoginRequest();
                request1.setUserId(token.getUserId());
                request1.setUserPw(userPw);
                mapper.changePw(request1);
                mapper.deleteToken(tokenId);
                return true;
            }
        }
        return false;
    }

    @Override
    public int deleteUser(UserIdRequest request) {
        int result = mapper.deleteUser(request);
        return result;
    }
}
