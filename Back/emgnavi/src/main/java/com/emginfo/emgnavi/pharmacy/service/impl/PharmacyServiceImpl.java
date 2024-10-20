package com.emginfo.emgnavi.pharmacy.service.impl;

import com.emginfo.emgnavi.pharmacy.mapper.PharmacyMapper;
import com.emginfo.emgnavi.pharmacy.service.PharmacyService;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PharmacyServiceImpl implements PharmacyService {

    @Autowired
    private PharmacyMapper pharmacyMapper;

    @Override
    public List<Pharmacy> getPharmacyList(int offset, int limit) {
        RowBounds rowBounds = new RowBounds(offset, limit);
        return pharmacyMapper.selectPharmacyList(rowBounds);
    }

    @Override
    public Pharmacy getPharmacyDetail(String hpid) {
        return pharmacyMapper.selectPharmacyDetail(hpid);
    }

    @Override
    public List<Pharmacy> searchPharmacy(String dutyName, String dutyAddr, int page, int size) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);

        int offset = page * size;
        RowBounds rowBounds = new RowBounds(offset, size);

        return pharmacyMapper.searchPharmacy(params, rowBounds);
    }

    @Override
    public int getSearchResultCount(String dutyName, String dutyAddr) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);
        return pharmacyMapper.getSearchResultCount(params);
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        return pharmacyMapper.getAutocompleteSuggestions(query, searchType);
    }

    @Override
    public int getTotalCount() {
        return pharmacyMapper.getTotalCount();
    }

    @Override
    public void addFavorite(String userId, String refNo, String dutyName, String dutyAddr, String dutyTel1) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);
        params.put("dutyTel1", dutyTel1);
        pharmacyMapper.addFavorite(params);
    }

    @Override
    public void removeFavorite(String userId, String refNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        pharmacyMapper.removeFavorite(params);
    }

    @Override
    public List<Map<String, Object>> getFavorites(String userId) {
        return pharmacyMapper.getFavorites(userId);
    }

    @Override
    public boolean isFavorite(String userId, String refNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("refNo", refNo);
        return pharmacyMapper.isFavorite(params) > 0;
    }
}