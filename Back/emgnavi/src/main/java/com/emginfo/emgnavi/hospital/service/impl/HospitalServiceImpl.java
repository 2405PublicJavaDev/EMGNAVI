package com.emginfo.emgnavi.hospital.service.impl;

import com.emginfo.emgnavi.hospital.mapper.HospitalMapper;
import com.emginfo.emgnavi.hospital.service.HospitalService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
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
    public List<Hospital> searchHospital(String dutyName, String dutyAddr, int page, int size) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);

        int offset = page * size;
        RowBounds rowBounds = new RowBounds(offset, size);

        List<Hospital> hospitalList = hospitalMapper.searchHospital(params, rowBounds);
        return hospitalList;
    }

    @Override
    public int getSearchResultCount(String dutyName, String dutyAddr) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);
        return hospitalMapper.getSearchResultCount(params);
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        List<Map<String, Object>> suggestions;
        if (searchType.equals("dutyName")) {
            suggestions = hospitalMapper.searchDutyNames(query);
        } else if (searchType.equals("dutyAddr")) {
            suggestions = hospitalMapper.searchDutyAddr(query);
        } else {
            return new ArrayList<>();
        }
        return suggestions;
    }

    @Override
    public void addFavorite(String userId, String refNo, String dutyName, String dutyAddr, String dutyTel1) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);
        params.put("dutyTel1", dutyTel1);
        hospitalMapper.addFavorite(params);
    }

    @Override
    public void removeFavorite(String userId, String refNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        hospitalMapper.removeFavorite(params);
    }

    @Override
    public List<Map<String, Object>> getFavorites(String userId) {
        return hospitalMapper.getFavorites(userId);
    }

    @Override
    public boolean isFavorite(String userId, String refNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        return hospitalMapper.isFavorite(params) > 0;
    }

}
