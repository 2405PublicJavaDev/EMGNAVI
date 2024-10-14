package com.emginfo.emgnavi.medicine.mapper;

import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface MedicineMapper {
    int getTotalCount();  // 전체 데이터 개수 반환 메서드 추가
    List<Medicine> selectMedicineList(RowBounds rowBounds);  // 페이징 처리한 의약품 목록 조회
    Medicine selectMedicineDetail(String itemSeq);  // 의약품 상세 조회
    List<Medicine> searchMedicine(Map<String, String> params);  // 의약품 이름 및 업체명으로 검색
}