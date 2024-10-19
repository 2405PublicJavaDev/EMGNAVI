package com.emginfo.emgnavi.pharmacy.mapper;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface PharmacyMapper {

    // 기존 메서드들 유지
    List<Pharmacy> selectPharmacyList(RowBounds rowBounds);

    Pharmacy selectPharmacyDetail(String hpid);

    int getTotalCount();

    // 새로 추가된 메서드들
    List<Pharmacy> searchPharmacy(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    List<Map<String, Object>> searchDutyNames(String query);

    List<Map<String, Object>> searchDutyAddrs(String query);
}