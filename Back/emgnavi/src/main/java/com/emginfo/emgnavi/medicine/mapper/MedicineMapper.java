package com.emginfo.emgnavi.medicine.mapper;

import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MedicineMapper {
    List<Medicine> selectMedicineList(); //의약품 목록 조회
    Medicine selectMedicineDetail(String itemSeq); // 의약품 상세 조회
    List<Medicine> searchMedicine(String name); // 의약품 이름으로 검색
}
