package com.emginfo.emgnavi.pharmacy.mapper;

import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface PharmacyMapper {

    List<Pharmacy> selectPharmacyList(RowBounds rowBounds);

    Pharmacy selectPharmacyDetail(String hpid);

    int getTotalCount();

    List<Pharmacy> searchPharmacy(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    List<Map<String, Object>> getAutocompleteSuggestions(@Param("query") String query, @Param("searchType") String searchType);

    void addFavorite(Map<String, Object> params);

    void removeFavorite(Map<String, Object> params);

    List<Map<String, Object>> getFavorites(String userId);

    int isFavorite(Map<String, Object> params);
}
