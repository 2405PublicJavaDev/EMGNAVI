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

    // 새로 추가된 즐겨찾기 관련 메서드
    void addFavorite(String userId, String refNo, String dutyName, String dutyAddr, String dutyTel1);

    void removeFavorite(String userId, String refNo);

    List<Map<String, Object>> getFavorites(String userId);

    boolean isFavorite(String userId, String refNo);
}