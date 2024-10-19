package com.emginfo.emgnavi.hospital.mapper;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface HospitalMapper {
    int getTotalCount();

    List<Hospital> selectHospitalList(RowBounds rowBounds);

    Hospital selectHospitalDetail(String hpid);

    List<Hospital> searchHospital(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    List<Map<String, Object>> searchDutyNames(String query);

    List<Map<String, Object>> searchDutyAddr(String query);
}
