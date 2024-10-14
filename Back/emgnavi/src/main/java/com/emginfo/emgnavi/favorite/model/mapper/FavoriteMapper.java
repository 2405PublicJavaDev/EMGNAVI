package com.emginfo.emgnavi.favorite.model.mapper;

import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface FavoriteMapper {

    // SELECT HPID AS REF_NO, DUTY_NAME, DUTY_ADDR, DUTY_TEL1 FROM HOSPITAL_TBL WHERE HPID = #{hpid}
    Hospital findHospitalById(String hpid);

    // SELECT HPID AS REF_NO, DUTY_NAME, DUTY_ADDR, DUTY_TEL1 FROM PHARMACY_TBL WHERE hpid = #{hpid}
    Pharmacy findPharmacyById(String hpid);

    int addFavorite(Favorite favorite);

    Favorite findFavoriteByIdAndRefNo(@Param("userId") String userId, @Param("refNo") String refNo);

}
