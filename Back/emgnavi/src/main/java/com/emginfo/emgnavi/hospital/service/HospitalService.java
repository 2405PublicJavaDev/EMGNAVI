package com.emginfo.emgnavi.hospital.service;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;

import java.util.List;
import java.util.Map;

public interface HospitalService {
    List<Hospital> getHospitalList(int offset, int size);

    Hospital getHospitalDetail(String hpid);

    List<Hospital> searchHospital(String dutyName, String dutyAddr, int page, int size);

    int getSearchResultCount(String dutyName, String dutyAddr);

    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);

    void removeFavorite(String userId, String refNo);

    List<Map<String, Object>> getFavorites(String userId);

    boolean isFavorite(String userId, String refNo);

    void addFavorite(String userId, String refNo, String dutyName, String dutyAddr, String dutyTel1);
}
