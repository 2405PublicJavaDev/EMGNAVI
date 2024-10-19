package com.emginfo.emgnavi.hospital.mapper;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

@Mapper
public interface HospitalMapper {
    int getTotalCount();

    List<Hospital> selectHospitalList(RowBounds rowBounds);

    Hospital selectHospitalDetail(String hpid);
}
