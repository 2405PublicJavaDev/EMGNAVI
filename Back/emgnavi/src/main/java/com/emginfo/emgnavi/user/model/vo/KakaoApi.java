package com.emginfo.emgnavi.user.model.vo;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class KakaoApi {

    private final RestTemplate restTemplate = new RestTemplate();

    private final String kakaoApiKey = "YOUR_REST_API_KEY";
    private final String kakaoRedirectUri = "YOUR_REDIRECT_URI";

    public String getAccessToken(String code) {
        String tokenUrl = "https://kauth.kakao.com/oauth/token";

        // 요청 파라미터 설정
        Map<String, String> params = new HashMap<>();
        params.put("grant_type", "authorization_code");
        params.put("client_id", kakaoApiKey);
        params.put("redirect_uri", kakaoRedirectUri);
        params.put("code", code);

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // 요청 본문과 헤더 설정
        HttpEntity<Map<String, String>> request = new HttpEntity<>(params, headers);

        // POST 요청을 통해 액세스 토큰 요청
        ResponseEntity<String> response = restTemplate.postForEntity(tokenUrl, request, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            // JSON 파싱을 통해 액세스 토큰 추출 (실제로는 JSON 파싱 필요)
            // 간단한 예시에서는 그냥 응답을 바로 반환합니다.
            return response.getBody();
        } else {
            return null;  // 실패 시 null 반환
        }
    }
}
