package com.emginfo.emgnavi.user.controller;

import com.emginfo.emgnavi.user.model.dto.UserIdRequest;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import com.emginfo.emgnavi.user.model.dto.VerifyPhoneRequest;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.UserService;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class UserController {

    public UserService uService;

    public UserController() {
    }

    @Autowired
    public UserController(UserService userService) {
        this.uService = userService;
    }

    @PostMapping("/verify/phone")
    public void verifyPhone(@RequestBody VerifyPhoneRequest request) {
//        System.out.println(request);
        String userPhone = request.getUserPhone();
        SingleMessageSentResponse result = uService.sendVerificationCode(userPhone);
    }

    @PostMapping("/user")
    public void insertUser(@RequestBody UserInfoRequest request) {
        int result = uService.insertUser(request);
        if (result > 0) {
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
            System.out.println("사용중");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        } else {
            message = "사용 가능한 아이디입니다.";
            System.out.println("사용가능");
            return ResponseEntity.ok(message);
        }
    }

    @PostMapping("/findEmail")
    public ResponseEntity<String> selectIdByPhone(@RequestBody VerifyPhoneRequest request) {
        User user = uService.selectIdByPhone(request);
        if (user != null) {
            System.out.println(user.getUserId());
            return ResponseEntity.ok(user.getUserId());  // 조회된 유저의 아이디 반환
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 휴대폰 번호로 등록된 아이디가 없습니다.");
        }
    }
}
