package com.emginfo.emgnavi.user.controller;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.UserService;
import jakarta.servlet.http.HttpSession;
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
    public ResponseEntity<String> verifyPhone(@RequestBody VerifyPhoneRequest request, HttpSession session) {
        String userPhone = request.getUserPhone();
        String verificationCode = Integer.toString((int)(Math.random() * (999999 - 100000 + 1)) + 100000);

        SingleMessageSentResponse result = uService.sendVerificationCode(userPhone, verificationCode);

        // 세션에 인증 코드와 전화번호 저장
        session.setAttribute("verificationCode", verificationCode);
        session.setAttribute("verificationPhone", userPhone);

        return ResponseEntity.ok("인증 코드가 전송되었습니다");
    }

    @PostMapping("/verify/code")
    public ResponseEntity<String> verifyCode(@RequestBody VerifyCodeRequest request, HttpSession session) {
        String storedCode = (String) session.getAttribute("verificationCode");
        String storedPhone = (String) session.getAttribute("verificationPhone");

        // 디버깅용 출력
        System.out.println("전송된 인증 코드: " + request.getVerifyCode());
        System.out.println("저장된 인증 코드: " + storedCode);
        System.out.println("전송된 전화번호: " + request.getUserPhone());
        System.out.println("저장된 전화번호: " + storedPhone);

        if (storedCode == null || storedPhone == null) {
            System.out.println("인증 코드가 만료되었거나 전송되지 않았습니다."); // 오류 로그
            return ResponseEntity.badRequest().body("인증 코드가 만료되었거나 전송되지 않았습니다");
        }

        if (storedCode.equals(request.getVerifyCode()) && storedPhone.equals(request.getUserPhone())) {
            // 인증 성공 후 세션에서 코드와 전화번호 제거
            session.removeAttribute("verificationCode");
            session.removeAttribute("verificationPhone");
            System.out.println("인증 성공!"); // 성공 로그
            return ResponseEntity.ok("인증 성공");
        } else {
            System.out.println("잘못된 인증 코드입니다."); // 오류 로그
            return ResponseEntity.badRequest().body("잘못된 인증 코드입니다");
        }
    }


    @PostMapping("/user")
    public void insertUser(@RequestBody UserInfoRequest request) {
        int result = uService.insertUser(request);
//        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
    }

    @PostMapping("/id/duplicate")
    public ResponseEntity<String> checkIdDuplicate(@RequestBody UserIdRequest request) {
        int result = uService.checkIdDuplicate(request);

        if (result > 0) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 사용중인 아이디입니다.");
        } else {
            return ResponseEntity.ok("사용 가능한 아이디입니다.");
        }
    }

    @PostMapping("/nickname/duplicate")
    public ResponseEntity<String> checkNicknameDuplicate(@RequestBody UserNicknameRequest request) {
//        System.out.println(request);
        int result = uService.checkNicknameDuplicate(request);

        if (result > 0) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 사용중인 닉네임입니다.");
        } else {
            return ResponseEntity.ok("사용 가능한 닉네임입니다.");
        }
    }

    @PostMapping("/findEmail")
    public ResponseEntity<String> selectIdByPhone(@RequestBody VerifyPhoneRequest request) {
        User user = uService.selectIdByPhone(request);
        if (user != null) {
            System.out.println(user.getUserId());
            return ResponseEntity.ok(user.getUserId());  // 조회된 유저의 아이디 반환
        } else {
            System.out.println("오류발생");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 휴대폰 번호로 등록된 아이디가 없습니다.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> checkLogin(@RequestBody LoginRequest request, HttpSession session) {
        if (request.getUserId() == null || request.getUserPw() == null) {
            return ResponseEntity.badRequest().body("아이디와 비밀번호는 필수입니다.");
        }

//        System.out.println("controll 로그인 요청: " + request.getUserId() + ", 비밀번호: " + request.getUserPw());
        User user = uService.checkLogin(request);

        if (user != null) {
            // 세션에 사용자 아이디 저장
            session.setAttribute("userId", user.getUserId());
            System.out.println(session.getAttribute("userId"));
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    }
}
