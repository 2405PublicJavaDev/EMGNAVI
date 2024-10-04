package com.emginfo.emgnavi.user.controller;

import ch.qos.logback.core.CoreConstants;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import com.emginfo.emgnavi.user.model.dto.VerifyPhoneRequest;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.UserService;
import com.emginfo.emgnavi.user.service.impl.UserServiceImpl;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class UserController {

    public UserService uService;

    public UserController() {}

    @Autowired
    public UserController(UserService userService) {
        this.uService=userService; }

    @PostMapping("/verify/phone")
    public void verifyPhone(@RequestBody VerifyPhoneRequest request) {
        System.out.println(request);
        String userPhone = request.getPhoneNumber();
        SingleMessageSentResponse result = uService.sendVerificationCode(userPhone);
    }

    @PostMapping("/user/insert")
    public void insertUser(@RequestBody UserInfoRequest request) {
        System.out.println(request);
        String userId = request.getUserId();
        System.out.println(userId);
    }
}
