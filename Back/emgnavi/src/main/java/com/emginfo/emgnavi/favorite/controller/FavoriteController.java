package com.emginfo.emgnavi.favorite.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.favorite.model.dto.FavoriteDTO;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.favorite.service.FavoriteService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

//@RestController 를 사용했기 때문에 자동으로 return값(객체)를 JSON 형식으로 변환시켜서 보냄
@RestController
//프로젝트에서 백엔드는 api 서버이기 때문에 URL 제일 앞단에 /api를 붙여준다
@RequestMapping("/api")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // 병원 즐겨찾기 추가
    @PostMapping("/favorite/hospital")
    public SuccessResponse addFavHospital(@RequestParam String refNo, HttpSession session) {
        // 로그인한 사용자 정보 가져옴
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // 로그인이 필요할 경우 에러 코드
        }
        // FavoriteDTO 생성 및 세션에서 가져온 userId와 파라미터로 받은 refNo 설정
        FavoriteDTO favoriteDTO = new FavoriteDTO();
        favoriteDTO.setUserId(userId);
        favoriteDTO.setRefNo(refNo);
        if (favoriteDTO.getUserId() == null || favoriteDTO.getRefNo() == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // Null 값이 있을 경우 예외 처리
        }
        // 병원 즐겨찾기 추가
        Favorite favorite = favoriteService.addFavHospital(favoriteDTO);
        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS, favorite);
    }

    // 약국 즐겨찾기 추가
    @PostMapping("/favorite/pharmacy")
    public SuccessResponse addFavPharmacy(@RequestParam String refNo, HttpSession session) {
        // 로그인한 사용자 정보 가져옴
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // 로그인이 필요할 경우 적절한 에러 코드
        }
        // FavoriteDTO 생성 및 세션에서 가져온 userId와 파라미터로 받은 refNo 설정
        FavoriteDTO favoriteDTO = new FavoriteDTO();
        favoriteDTO.setUserId(userId);
        favoriteDTO.setRefNo(refNo);
        if (favoriteDTO.getUserId() == null || favoriteDTO.getRefNo() == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // Null 값이 있을 경우 예외 처리
        }

        // 약국 즐겨찾기 추가
        Favorite favorite = favoriteService.addFavPharmacy(favoriteDTO);
        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS, favorite);
    }

    // 병원 즐겨찾기 조회
    @GetMapping("/favorite/hospital/list")
    public SuccessResponse listFavHospital(HttpSession session) {
        // 로그인된 사용자 정보 가져오기
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // 로그인이 필요할 경우
        }
        // 즐겨찾기 목록 조회
        List<Favorite> favorites = favoriteService.selectHospitalByUserId(userId);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, favorites); // list null 일 때 빈리스트 반환
    }

    // 약국 즐겨찾기 조회
    @GetMapping("/favorite/pharmacy/list")
    public SuccessResponse listFavPharmacy(HttpSession session) {
        // 로그인된 사용자 정보 가져오기
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);  // 로그인이 필요할 경우
        }
        // 즐겨찾기 목록 조회
        List<Favorite> favorites = favoriteService.selectPharmacyByUserId(userId);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, favorites); // list null 일 때 빈리스트 반환
    }

    // 즐겨찾기 단일 삭제
    @DeleteMapping("/favorite/single")
    public SuccessResponse deleteFavorite(@RequestParam String refNo, HttpSession session) {
        // 로그인한 사용자 정보 가져옴
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw  new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        // 즐겨찾기 삭제
        int result = favoriteService.deleteFavorite(refNo, userId);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw  new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
    }

    // 즐겨찾기 다중 삭제
    @PostMapping("/favorite/multi")
    public SuccessResponse deleteFavorite(@RequestBody Map<String, List<String>> refNosMap, HttpSession session) {
        List<String> refNos = refNosMap.get("refNos");
        System.out.println(refNos);
        String userId = (String) session.getAttribute("userId");
        if (userId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        if (refNos != null && !refNos.isEmpty()) {
            favoriteService.deleteFavorites(refNos, userId);
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
    }

}
