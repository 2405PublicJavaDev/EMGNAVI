package com.emginfo.emgnavi.medicine.mapper;

import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface MedicineMapper {
    int getTotalCount();  // 전체 데이터 개수 반환 메서드

    List<Medicine> selectMedicineList(RowBounds rowBounds);  // 페이징 처리한 의약품 목록 조회

    Medicine selectMedicineDetail(String itemSeq);  // 의약품 상세 조회

    List<Medicine> searchMedicine(Map<String, Object> params, RowBounds rowBounds);  // 의약품 이름 및 업체명으로 검색 (페이징 적용)

    int getSearchResultCount(Map<String, Object> params);  // 검색 결과의 총 개수를 반환하는 메서드
}