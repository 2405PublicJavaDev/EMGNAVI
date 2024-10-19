package com.emginfo.emgnavi.hospital.service.impl;

import com.emginfo.emgnavi.hospital.mapper.HospitalMapper;
import com.emginfo.emgnavi.hospital.service.HospitalService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalMapper hospitalMapper;

    @Override
    public List<Hospital> getHospitalList(int offset, int limit) {
        RowBounds rowBounds = new RowBounds(offset, limit);
        return hospitalMapper.selectHospitalList(rowBounds);
    }

    @Override
    public Hospital getHospitalDetail(String hpid) {
        return hospitalMapper.selectHospitalDetail(hpid);
    }

    @Override
    public List<Hospital> searchHospital(String dutyName, String entpName, int page, int size) {
        return List.of();
    }

    @Override
    public int getSearchResultCount(String dutyName, String entpName) {
        return 0;
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        return List.of();
    }
}
