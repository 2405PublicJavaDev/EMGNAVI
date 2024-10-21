package com.emginfo.emgnavi.favorite.service.Impl;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.pagenation.Criteria;
import com.emginfo.emgnavi.common.pagenation.PaginationInfo;
import com.emginfo.emgnavi.favorite.model.dto.FavoriteDTO;
import com.emginfo.emgnavi.favorite.model.dto.FavoritePageDTO;
import com.emginfo.emgnavi.favorite.model.mapper.FavoriteMapper;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.favorite.service.FavoriteService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteMapper favoriteMapper;

    // 병원 즐겨찾기 추가
    @Override
    @Transactional
    public Favorite addFavHospital(FavoriteDTO favoriteDTO) {
        String userId = favoriteDTO.getUserId();
        String refNo = favoriteDTO.getRefNo();

        // 즐겨찾기에 있는지 확인
        Favorite existFavorite = favoriteMapper.findFavoriteByIdAndRefNo(favoriteDTO);
        if (existFavorite != null) {
            // 이미 존재할 경우 중복 에러
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND); // 중복 에러 코드로 변경해야함
        }

        // 병원 정보 가져오기
        Hospital hospital = favoriteMapper.findHospitalById(refNo);
        if (hospital == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        // Favorite 객체 생성 후 병원 정보 저장
        Favorite favorite = new Favorite();
        favorite.setUserId(userId);
        favorite.setRefNo(refNo);
        favorite.setDutyName(hospital.getDutyName());
        favorite.setDutyAddr(hospital.getDutyAddr());
        favorite.setDutyTel1(hospital.getDutyTel1());

        // 즐겨찾기 추가
        favoriteMapper.addFavHospital(favorite);

        return favorite;
    }

    // 약국 즐겨찾기 추가
    @Override
    @Transactional
    public Favorite addFavPharmacy(FavoriteDTO favoriteDTO) {
        String userId = favoriteDTO.getUserId();
        String refNo = favoriteDTO.getRefNo();

        // 즐겨찾기에 있는지 확인
        Favorite existFavorite = favoriteMapper.findFavoriteByIdAndRefNo(favoriteDTO);
        if (existFavorite != null) {
            // 이미 존재할 경우 중복 에러
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND); // 중복 에러 코드로 변경해야함
        }

        // 약국 정보 가져오기
        Pharmacy pharmacy = favoriteMapper.findPharmacyById(refNo);
        if (pharmacy == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        // Favorite 객체 생성 후 병원 정보 저장
        Favorite favorite = new Favorite();
        favorite.setUserId(userId);
        favorite.setRefNo(refNo);
        favorite.setDutyName(pharmacy.getDutyName());
        favorite.setDutyAddr(pharmacy.getDutyAddr());
        favorite.setDutyTel1(pharmacy.getDutyTel1());

        // 즐겨찾기 추가
        favoriteMapper.addFavPharmacy(favorite);

        return favorite;
    }

    // 병원 즐겨찾기 조회
    @Override
    public FavoritePageDTO selectHospitalByUserId(String userId, int prsnPageNo, int cntntPerPage) {
        Criteria criteria = new Criteria();
        criteria.setPrsnPageNo(prsnPageNo);
        criteria.setCntntPerPage(cntntPerPage);
        int totCnt = favoriteMapper.getHospitalAllCount(userId);

        PaginationInfo paginationInfo = new PaginationInfo(criteria);
        paginationInfo.setTotCnt(totCnt);

        int startRow = (prsnPageNo - 1) * cntntPerPage;
        int endRow = startRow + cntntPerPage;

        List<Favorite> favorites = favoriteMapper.getHospitalFavoriteListByUserId(userId, startRow, endRow);
//        return favorites != null ? favorites : Collections.emptyList();
        return new FavoritePageDTO(favorites, paginationInfo);
    }

    // 약국 즐겨찾기 조회
    @Override
    public FavoritePageDTO selectPharmacyByUserId(String userId, int prsnPageNo, int cntntPerPage) {
        Criteria criteria = new Criteria();
        criteria.setPrsnPageNo(prsnPageNo);
        criteria.setCntntPerPage(cntntPerPage);
        int totCnt = favoriteMapper.getPharmacyAllCount(userId);

        PaginationInfo paginationInfo = new PaginationInfo(criteria);
        paginationInfo.setTotCnt(totCnt);

        int startRow = (prsnPageNo - 1) * cntntPerPage;
        int endRow = startRow + cntntPerPage;

        List<Favorite> favorites = favoriteMapper.getPharmacyFavoriteListByUserId(userId, startRow, endRow);
//        return favorites != null ? favorites : Collections.emptyList();
        return new FavoritePageDTO(favorites, paginationInfo);
    }

    // 즐겨찾기 단일 삭제
    @Override
    public int deleteFavorite(String refNo, String userId) {
        Favorite favorite = new Favorite();
        favorite.setRefNo(refNo);
        favorite.setUserId(userId);
        return favoriteMapper.deleteFavorite(favorite);
    }
    // 즐겨찾기 다중 삭제
    @Override
    @Transactional
    public void deleteFavorites(List<String> refNos, String userId) {
        for(String refNo : refNos) {
            Favorite favorite = new Favorite();
            favorite.setRefNo(refNo);
            favorite.setUserId(userId);
            int result = favoriteMapper.deleteFavorite(favorite);
            if (result <= 0) {
                throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
            }
        }
    }
}