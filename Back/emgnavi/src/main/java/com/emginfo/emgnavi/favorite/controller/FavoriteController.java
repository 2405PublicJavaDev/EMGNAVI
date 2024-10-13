package com.emginfo.emgnavi.favorite.controller;

import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.favorite.service.FavoriteService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.user.model.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@RestController 를 사용했기 때문에 자동으로 return값(객체)를 JSON 형식으로 변환시켜서 보냄
@RestController
//프로젝트에서 백엔드는 api 서버이기 때문에 URL 제일 앞단에 /api를 붙여준다
@RequestMapping("/api")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // 병원과 약국을 구분하여 처리
    @PostMapping("/favorite/{type}/{refNo}")
    public ResponseEntity<?> addFavorite(@PathVariable String type, @PathVariable String refNo, HttpSession session) {
        // 로그인한 사용자 정보 가져옴
        String userId = (String) session.getAttribute("userId");

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }
        Favorite favorite = favoriteService.addFavorite(type, refNo, userId);
        return ResponseEntity.ok(favorite);
//        오류 발생
//        if (loggedInUser == null) {
//            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);  // 커스텀 예외 발생
//        }
//        return new SuccessResponse(SuccessCode.RESOURCE_ADDED, favorite);
    }
}
