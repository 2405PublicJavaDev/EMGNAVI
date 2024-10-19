package com.emginfo.emgnavi.pharmacy.service;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;

import java.util.List;
import java.util.Map;

public interface PharmacyService {
    List<Pharmacy> getPharmacyList(int offset, int size);

    Pharmacy getPharmacyDetail(String itemSeq);

    List<Pharmacy> searchPharmacy(String itemName, String entpName, int page, int size);

    int getSearchResultCount(String itemName, String entpName);

    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);
}
