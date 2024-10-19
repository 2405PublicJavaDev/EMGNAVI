package com.emginfo.emgnavi.pharmacy.service;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;

import java.util.List;
import java.util.Map;

public interface PharmacyService {
    List<Pharmacy> getPharmacyList(int offset, int size);

    Pharmacy getPharmacyDetail(String hpid);

    List<Pharmacy> searchPharmacy(String dutyName, String dutyAddr, int page, int size);

    int getSearchResultCount(String dutyName, String dutyAddr);

    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);

    int getTotalCount();
}