package com.emginfo.emgnavi.user.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Value;

import java.util.HashMap;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class KakaoApi {
    @Value("${kakao.api.key}")
    private String kakaoApiKey;

    @Value("${kakao.redirect.uri}")
    private String kakaoRedirectUri;

    public String getAccessToken(String code) {
        String accessToken = null;
        // Access token을 요청하는 로직 추가 (예: RestTemplate 사용)
        // accessToken = 요청 결과에서 가져온 액세스 토큰

        return accessToken;
    }
}