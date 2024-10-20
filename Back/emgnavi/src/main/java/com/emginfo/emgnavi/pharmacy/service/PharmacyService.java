package com.emginfo.emgnavi.pharmacy.service;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;

import java.util.List;
import java.util.Map;

public interface PharmacyService {

    // 약국 리스트 가져오기
    List<Pharmacy> getPharmacyList(int offset, int size);

    // 특정 약국 상세 정보 가져오기
    Pharmacy getPharmacyDetail(String hpid);

    // 약국 검색하기
    List<Pharmacy> searchPharmacy(String dutyName, String dutyAddr, int page, int size);

    // 검색된 약국의 총 개수 가져오기
    int getSearchResultCount(String dutyName, String dutyAddr);

    // 자동 완성 제안 목록 가져오기
    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);

    // 전체 약국 수 가져오기
    int getTotalCount();

    // 즐겨찾기 추가하기
    void addFavorite(String userId, String refNo, String dutyName, String dutyAddr, String dutyTel1);

    // 즐겨찾기 제거하기
    void removeFavorite(String userId, String refNo);

    // 사용자의 즐겨찾기 목록 가져오기
    List<Map<String, Object>> getFavorites(String userId);

    // 특정 약국이 즐겨찾기인지 여부 확인
    boolean isFavorite(String userId, String refNo);
}
