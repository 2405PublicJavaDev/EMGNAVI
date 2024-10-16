package com.emginfo.emgnavi.favorite.model.mapper;

import com.emginfo.emgnavi.favorite.model.dto.FavoriteDTO;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface FavoriteMapper {

    // 병원, 약국 정보 조회
    Hospital findHospitalById(String hpid);
    Pharmacy findPharmacyById(String hpid);

    // 즐겨찾기에 있는지 확인
    Favorite findFavoriteByIdAndRefNo(FavoriteDTO favoriteDTO);

    // 병원, 약국 즐겨찾기 추가
    void addFavHospital(Favorite favorite);
    void addFavPharmacy(Favorite favorite);

    // 병원, 약국 즐겨찾기 조회
    List<Favorite> getHospitalFavoriteListByUserId(String userId);
    List<Favorite> getPharmacyFavoriteListByUserId(String userId);

    // 즐겨찾기 삭제 - 단일
    int deleteFavorite(Favorite favorite);

}
