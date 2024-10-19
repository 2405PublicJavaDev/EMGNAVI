package com.emginfo.emgnavi.pharmacy.mapper;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

@Mapper
public interface PharmacyMapper {

    List<Pharmacy> selectPharmacyList(RowBounds rowBounds);

    Pharmacy selectPharmacyDetail(String hpid);

    int getTotalCount();
}
