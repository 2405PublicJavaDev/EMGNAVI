package com.emginfo.emgnavi.user.controller;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.KakaoApi;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.UserService;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpSession;
import lombok.Getter;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.sound.midi.Soundbank;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class UserController {

    public UserService uService;
    public KakaoApi kakaoApi;

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
            return ResponseEntity.ok("인증 실패");
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
            System.out.println("정보 없음");
            return ResponseEntity.ok("해당 휴대폰 번호로 등록된 아이디가 없습니다."); // 200 OK와 함께 메시지 반환
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> checkLogin(@RequestBody LoginRequest request, HttpSession session) {
        if (request.getUserId() == null || request.getUserPw() == null) {
            return ResponseEntity.badRequest().body("아이디와 비밀번호는 필수입니다.");
        }
        User user = uService.checkLogin(request);
        if (user != null) {
            // 세션에 사용자 아이디 저장
            session.setAttribute("userId", user.getUserId());
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    }

    @GetMapping("/check-session")
    public ResponseEntity<?> checkSession(HttpSession session) {
        String userId = (String) session.getAttribute("userId");
        if (userId != null) {
            System.out.println(userId);
            return ResponseEntity.ok(userId); // 세션에 저장된 userId 반환
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("세션이 만료되었습니다.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return ResponseEntity.ok("로그아웃 성공");
    }

    @GetMapping("/kakao/login")
    public String loginForm(Model model){
        model.addAttribute("kakaoApiKey", kakaoApi.getKakaoApiKey());
        model.addAttribute("redirectUri", kakaoApi.getKakaoRedirectUri());
        return "login";
    }

//    @GetMapping("/kakao/callback")
//    public void kakaoLogin(@RequestParam String code) {
//        // 1. 인가 코드 받기 (@RequestParam String code)
//
//        // 2. 토큰 받기
//        String accessToken = kakaoApi.getAccessToken(code);
//
//        // 3. 사용자 정보 받기
//        Map<String, Object> userInfo = kakaoApi.getUserInfo(accessToken);
//
//        String email = (String) userInfo.get("email");
//        String nickname = (String) userInfo.get("nickname");
//
//        System.out.println("email = " + email);
//        System.out.println("nickname = " + nickname);
//        System.out.println("accessToken = " + accessToken);
//    }



    @GetMapping("/kakao/callback")
    public ResponseEntity<String> kakaoLogin(@RequestParam ("code") String code) {
        System.out.println("코드: " + code);
        if (code == null || code.isEmpty()) {
            return ResponseEntity.badRequest().body("오류");
        }
        return ResponseEntity.ok("코드: " + code);
    }

    @PostMapping("/getInf")
    public ResponseEntity<UserInfoRequest> getUserInf(@RequestBody UserInfoRequest request) {
        User user = uService.selectUserbyId(request);
        if (user != null) {
            UserInfoRequest response = new UserInfoRequest(
                    user.getUserId(),
                    user.getUserPw(),
                    user.getUserNickname(),
                    user.getUserPhone(),
                    user.getUserName(),
                    user.getUserGender(),
                    user.getUserAddress(),
                    user.getMarketingAgree()
            );
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.badRequest().body(null); // 실패 시 null 반환
    }

    @PostMapping("/modify")
    public void modifyUser(@RequestBody UserInfoRequest request) {
        int result = uService.modifyUser(request);
        if(result > 0) {
            System.out.println("수정 성공");
        } else {
            System.out.println("수정 실패");
        }
    }

}
