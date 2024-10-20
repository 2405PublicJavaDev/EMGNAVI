package com.emginfo.emgnavi.pharmacy.mapper;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface PharmacyMapper {

    // 기존 메서드들 유지
    List<Pharmacy> selectPharmacyList(RowBounds rowBounds);

    Pharmacy selectPharmacyDetail(String hpid);

    int getTotalCount();

    // 검색 관련 메서드들
    List<Pharmacy> searchPharmacy(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    // 자동완성을 위한 메서드 (수정됨)
    List<Map<String, Object>> getAutocompleteSuggestions(@Param("query") String query, @Param("searchType") String searchType);

    // 즐겨찾기 관련 메서드들
    void addFavorite(Map<String, Object> params);

    void removeFavorite(Map<String, Object> params);

    List<Map<String, Object>> getFavorites(String userId);

    int isFavorite(Map<String, Object> params);
}