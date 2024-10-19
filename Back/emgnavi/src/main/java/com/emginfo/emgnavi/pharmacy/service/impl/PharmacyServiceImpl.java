package com.emginfo.emgnavi.pharmacy.service.impl;

import com.emginfo.emgnavi.pharmacy.mapper.PharmacyMapper;
import com.emginfo.emgnavi.pharmacy.service.PharmacyService;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<Pharmacy> searchPharmacy(String itemName, String entpName, int page, int size) {
        return List.of();
    }

    @Override
    public int getSearchResultCount(String itemName, String entpName) {
        return 0;
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        return List.of();
    }
}
