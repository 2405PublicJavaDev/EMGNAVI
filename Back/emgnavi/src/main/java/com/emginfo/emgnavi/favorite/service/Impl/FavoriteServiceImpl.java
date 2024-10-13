package com.emginfo.emgnavi.favorite.service.Impl;

import com.emginfo.emgnavi.favorite.model.mapper.FavoriteMapper;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.favorite.service.FavoriteService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteMapper favoriteMapper;

//    @Autowired
//    private HospitalMapper hospitalMapper;

//    @Autowired
//    private PharmacyMapper pharmacyMapper;

    @Override
    public Favorite addFavorite(String type, String refNo, String userId) {
        Favorite favorite = new Favorite();
        favorite.setId(userId);
        favorite.setRefNo(refNo);

        if (type.equalsIgnoreCase("hospital")){
//            Hospital hospital = hospitalMapper.findHospitalById(refNo);
            Hospital hospital = favoriteMapper.findHospitalById(refNo);
            favorite.setDutyName(hospital.getDutyName());
            favorite.setDutyAddr(hospital.getDutyAddr());
            favorite.setDutyTel1(hospital.getDutyTel1());
        } else if (type.equalsIgnoreCase("pharmacy")){
//            Pharmacy pharmacy = pharmacyMapper.findPharmacyById(refNo);
            Pharmacy pharmacy = favoriteMapper.findPharmacyById(refNo);
            favorite.setDutyName(pharmacy.getDutyName());
            favorite.setDutyAddr(pharmacy.getDutyAddr());
            favorite.setDutyTel1(pharmacy.getDutyTel1());
        }

        favoriteMapper.addFavorite(favorite);
        return favorite;
    }
}
