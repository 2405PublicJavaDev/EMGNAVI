package com.emginfo.emgnavi.hospital.service;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;

import java.util.List;
import java.util.Map;

public interface HospitalService {
    List<Hospital> getHospitalList(int offset, int size);

    Hospital getHospitalDetail(String hpid);

    List<Hospital> searchHospital(String dutyName, String entpName, int page, int size);

    int getSearchResultCount(String dutyName, String entpName);

    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);
}
