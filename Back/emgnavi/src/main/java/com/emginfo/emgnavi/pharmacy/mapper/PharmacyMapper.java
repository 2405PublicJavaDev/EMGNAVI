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
    // 약국 리스트 조회
    List<Pharmacy> selectPharmacyList(RowBounds rowBounds);

    // 약국 상세 조회
    Pharmacy selectPharmacyDetail(String hpid);

    // 약국 전체 개수 조회
    int getTotalCount();

    // 검색 관련 메서드들
    // 검색 결과를 반환하는 메서드
    List<Pharmacy> searchPharmacy(Map<String, Object> params, RowBounds rowBounds);

    // 검색 결과 개수 조회
    int getSearchResultCount(Map<String, Object> params);

    // 자동 완성을 위한 메서드
    // 입력된 쿼리와 검색 타입에 따라 자동 완성 결과를 반환
    List<Map<String, Object>> getAutocompleteSuggestions(@Param("query") String query, @Param("searchType") String searchType);

    // 즐겨찾기 관련 메서드들
    // 즐겨찾기 추가
    void addFavorite(Map<String, Object> params);

    // 즐겨찾기 삭제
    void removeFavorite(Map<String, Object> params);

    // 특정 사용자의 즐겨찾기 목록 조회
    List<Map<String, Object>> getFavorites(String userId);

    // 특정 약국이 즐겨찾기에 있는지 여부 확인
    int isFavorite(Map<String, Object> params);
}
