package com.emginfo.emgnavi.favorite.service;

import com.emginfo.emgnavi.favorite.model.dto.FavoriteDTO;
import com.emginfo.emgnavi.favorite.model.dto.FavoritePageDTO;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;

import java.util.List;

public interface FavoriteService {

    // 즐겨찾기 추가
    Favorite addFavHospital(FavoriteDTO favoriteDTO);
    Favorite addFavPharmacy(FavoriteDTO favoriteDTO);

    // 즐겨찾기 조회
    FavoritePageDTO selectHospitalByUserId(String userId, int prsnPageNo, int cntntPerPage);
    FavoritePageDTO selectPharmacyByUserId(String userId, int prsnPageNo, int cntntPerPage);

    // 단일, 다중 즐겨찾기 삭제
    int deleteFavorite(String refNo, String userId);
    void deleteFavorites(List<String> refNos, String userId);
}
