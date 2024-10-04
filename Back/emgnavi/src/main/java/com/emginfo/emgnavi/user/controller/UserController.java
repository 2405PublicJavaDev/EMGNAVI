package com.emginfo.emgnavi.user.controller;

import ch.qos.logback.core.CoreConstants;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.user.model.dto.UserIdRequest;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import com.emginfo.emgnavi.user.model.dto.VerifyPhoneRequest;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.UserService;
import com.emginfo.emgnavi.user.service.impl.UserServiceImpl;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
//        System.out.println(request);
        String userPhone = request.getPhoneNumber();
        SingleMessageSentResponse result = uService.sendVerificationCode(userPhone);
    }

    @PostMapping("/user")
    public void insertUser(@RequestBody UserInfoRequest request) {
        int result = uService.insertUser(request);
        if (result > 0 ) {
            System.out.println("성공");
        } else {
            System.out.println("실패");
        }
//        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
    }

    @PostMapping("/id/duplicate")
    public ResponseEntity<String> checkIdDuplicate(@RequestBody UserIdRequest request) {
        int result = uService.checkIdDuplicate(request);
        String message;
        if (result > 0) {
            message = "이미 사용중인 아이디입니다.";
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        } else {
            message = "사용 가능한 아이디입니다.";
            return ResponseEntity.ok(message);
        }
    }
}
