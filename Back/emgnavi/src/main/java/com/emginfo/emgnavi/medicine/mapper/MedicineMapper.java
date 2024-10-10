package com.emginfo.emgnavi.medicine.mapper;

import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

@Mapper
public interface MedicineMapper {
    int getTotalCount();  // 전체 데이터 개수 반환 메서드 추가
    List<Medicine> selectMedicineList(RowBounds rowBounds);  // 페이징 처리한 의약품 목록 조회
    Medicine selectMedicineDetail(String itemSeq);  // 의약품 상세 조회
    List<Medicine> searchMedicine(String name);  // 의약품 이름으로 검색
}
