package com.emginfo.emgnavi.favorite.service.Impl;

import com.emginfo.emgnavi.favorite.model.mapper.FavoriteMapper;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.favorite.service.FavoriteService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    private static final Logger logger = LoggerFactory.getLogger(FavoriteServiceImpl.class);

    @Autowired
    private FavoriteMapper favoriteMapper;

    @Override
    @Transactional
    public Favorite addFavorite(String type, String refNo, String userId) {
        Favorite favorite = new Favorite();
        favorite.setUserId(userId);
        favorite.setRefNo(refNo);

        try {
            if (type.equalsIgnoreCase("pharmacy")) {
                Pharmacy pharmacy = favoriteMapper.findPharmacyById(refNo);
                if (pharmacy == null) {
                    throw new IllegalArgumentException("Pharmacy not found with id: " + refNo);
                }
                favorite.setDutyName(pharmacy.getDutyName());
                favorite.setDutyAddr(pharmacy.getDutyAddr());
                favorite.setDutyTel1(pharmacy.getDutyTel1());
            } else if (type.equalsIgnoreCase("hospital")) {
                Hospital hospital = favoriteMapper.findHospitalById(refNo);
                if (hospital == null) {
                    throw new IllegalArgumentException("Hospital not found with id: " + refNo);
                }
                favorite.setDutyName(hospital.getDutyName());
                favorite.setDutyAddr(hospital.getDutyAddr());
                favorite.setDutyTel1(hospital.getDutyTel1());
            } else {
                throw new IllegalArgumentException("Invalid type: " + type);
            }

            logger.info("Successfully added/updated favorite for user: {}, refNo: {}", userId, refNo);
            return favorite;
        } catch (Exception e) {
            logger.error("Error occurred while adding favorite", e);
            throw new RuntimeException("즐겨찾기 추가 중 오류가 발생했습니다.", e);
        }
    }
}