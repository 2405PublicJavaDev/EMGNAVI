package com.emginfo.emgnavi.user.controller;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.User;
import com.emginfo.emgnavi.user.service.EmailService;
import com.emginfo.emgnavi.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpSession;
//import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;


@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService uService; // final 키워드로 불변성 보장
    private final JavaMailSender javaMailSender; // JavaMailSender 주입
    private final EmailService emailService;

    // 생성자 주입을 통해 모든 필드 초기화
    @Autowired
    public UserController(UserService userService, JavaMailSender javaMailSender, EmailService emailService) {
        this.uService = userService;
        this.javaMailSender = javaMailSender; // JavaMailSender 주입
        this.emailService = emailService;
    }

//    @PostMapping("/verify/phone")
//    public ResponseEntity<String> verifyPhone(@RequestBody VerifyPhoneRequest request, HttpSession session) {
//        String userPhone = request.getUserPhone();
//        String verificationCode = Integer.toString((int) (Math.random() * (999999 - 100000 + 1)) + 100000);
//
//        SingleMessageSentResponse result = uService.sendVerificationCode(userPhone, verificationCode);
//
//        // 세션에 인증 코드와 전화번호 저장
//        session.setAttribute("verificationCode", verificationCode);
//        session.setAttribute("verificationPhone", userPhone);
//
//        return ResponseEntity.ok("인증 코드가 전송되었습니다");
//    }

//    @PostMapping("/verify/code")
//    public ResponseEntity<String> verifyCode(@RequestBody VerifyCodeRequest request, HttpSession session) {
//        String storedCode = (String) session.getAttribute("verificationCode");
//        String storedPhone = (String) session.getAttribute("verificationPhone");
//
//        // 디버깅용 출력
//        System.out.println("전송된 인증 코드: " + request.getVerifyCode());
//        System.out.println("저장된 인증 코드: " + storedCode);
//        System.out.println("전송된 전화번호: " + request.getUserPhone());
//        System.out.println("저장된 전화번호: " + storedPhone);
//
//        if (storedCode == null || storedPhone == null) {
//            System.out.println("인증 코드가 만료되었거나 전송되지 않았습니다."); // 오류 로그
//            return ResponseEntity.badRequest().body("인증 코드가 만료되었거나 전송되지 않았습니다");
//        }
//
//        if (storedCode.equals(request.getVerifyCode()) && storedPhone.equals(request.getUserPhone())) {
//            // 인증 성공 후 세션에서 코드와 전화번호 제거
//            session.removeAttribute("verificationCode");
//            session.removeAttribute("verificationPhone");
//            System.out.println("인증 성공!"); // 성공 로그
//            return ResponseEntity.ok("인증 성공");
//        } else {
//            System.out.println("잘못된 인증 코드입니다."); // 오류 로그
//            return ResponseEntity.ok("인증 실패");
//        }
//    }


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
        System.out.println(request);
        int result = uService.checkNicknameDuplicate(request);

        if (result > 0) {
            System.out.println("사용중");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 사용중인 닉네임입니다.");
        } else {
            System.out.println("사용가능");
            return ResponseEntity.ok("사용 가능한 닉네임입니다.");
        }
    }

    @PostMapping("/findEmail")
    public ResponseEntity<String> selectIdByPhone(@RequestBody VerifyPhoneRequest request) {
        User user = uService.selectIdByPhone(request);
        if (user != null) {
//            System.out.println(user.getUserId());
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
            session.setAttribute("userNickname", user.getUserNickname());
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return ResponseEntity.ok("로그아웃 성공");
    }

    @PostMapping("/kakao")
    public User kakaoCheck(@RequestBody Map<String, String> requestBody, HttpSession session) {
        System.out.println("인가코드 : " + requestBody.get("code"));
        String accessToken = uService.getAccessToken(requestBody.get("code"));
        System.out.println("토큰 : " + accessToken);
        HashMap<String, Object> kakaoInfo = uService.getUserInfo(accessToken);
        String userId = (String) kakaoInfo.get("email");
        User user = uService.selectUserbyId(userId);
        if(user != null) {
            System.out.println("이미 존재하는 회원");
            session.setAttribute("userId", user.getUserId());
            session.setAttribute("userNickname", user.getUserNickname());
            return user;
        } else {
            System.out.println("회원가입 필요");
            User newUser = new User();
            newUser.setUserId(userId);
            return newUser;
        }
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
        System.out.println(request);
        if (result > 0) {
            System.out.println("수정 성공");
        } else {
            System.out.println("수정 실패");
        }
    }

        @PostMapping("/changePw")
        public ResponseEntity<?> changePw(@RequestBody LoginRequest request) {

            int result = uService.changePw(request);
            if (result > 0) {
                System.out.println("비번 변경 성공");
                return ResponseEntity.ok("성공");
            } else {
                System.out.println("비번 변경 실패");
            }
            return ResponseEntity.badRequest().body("실패");
        }

    @PostMapping("/changePhone")
    public ResponseEntity<?> changePhone(@RequestBody ChangePhoneRequest request) {
        int result = uService.changePhone(request);
        if (result > 0) {
            System.out.println("비번 변경 성공");
            return ResponseEntity.ok("성공");
        } else {
            System.out.println("비번 변경 실패");
        }
        return ResponseEntity.badRequest().body("실패");
    }


    @PostMapping("/send-reset-mail")
    public ResponseEntity<?> sendResetMail(@RequestBody UserIdRequest request) {
        System.out.println("아이디: " + request.getUserId());
        User user = uService.selectUserbyId(request);

        if (user != null) {
            String userId = user.getUserId();
            String tokenId = generateResetToken();
            String resetLink = "https://127.0.0.1:3000/user/findPw/resetPw?token=" + tokenId;

            uService.saveResetToken(userId, tokenId); // ID에 해당하는 토큰 저장
            emailService.sendResetPasswordEmail(userId, resetLink);

            return ResponseEntity.ok("성공: " + user.getUserNickname());
        } else {
            return ResponseEntity.ok("실패");
        }
    }

    private String generateResetToken() {
        return UUID.randomUUID().toString(); // 랜덤 UUID 생성
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        String tokenId = request.getTokenId();
        String userPw = request.getUserPw();

        boolean isSuccess = uService.resetPassword(tokenId, userPw);

        if (isSuccess) {
            return ResponseEntity.ok("성공");
        } else {
            return ResponseEntity.badRequest().body("유효하지 않은 토큰이거나 사용자 정보가 없습니다.");
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestBody UserIdRequest request) {
        try {
            // 사용자 조회
            User user = uService.selectUserbyId(request);
            // 사용자 삭제
            int result = uService.deleteUser(request);

            if (result > 0) {
                return ResponseEntity.ok("성공");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("사용자 삭제 중 오류가 발생했습니다.");
            }
        } catch (Exception e) {
            // 예외 처리
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류: " + e.getMessage());
        }
    }

    @GetMapping("/news")
    public ResponseEntity<String> search() throws Exception {
        String clientId = "HybacJJgFsuLnLngHigE";
        String clientSecret = "JofjIZZUKG";

        // Naver OpenAPI URL 설정
        String apiURL = "https://openapi.naver.com/v1/search/news.json?query="
                + URLEncoder.encode("교통사고 사망 응급실이송", "UTF-8")
                + "&display=4";

        // Http 요청 설정
        HttpURLConnection urlConnection = (HttpURLConnection) new URL(apiURL).openConnection();
        urlConnection.setRequestMethod("GET");
        urlConnection.setRequestProperty("X-Naver-Client-Id", clientId);
        urlConnection.setRequestProperty("X-Naver-Client-Secret", clientSecret);

        BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), StandardCharsets.UTF_8));

        StringBuilder responseText = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            responseText.append(line);
        }

        br.close();
        urlConnection.disconnect();

        // 응답을 JSON 문자열로 반환
        return ResponseEntity.ok(responseText.toString());
    }
    }

