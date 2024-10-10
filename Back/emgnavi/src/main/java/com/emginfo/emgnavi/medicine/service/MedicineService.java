package com.emginfo.emgnavi.medicine.service;

import com.emginfo.emgnavi.medicine.mapper.MedicineMapper;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineService {

    @Autowired
    private MedicineMapper medicineMapper;

    // 전체 의약품 목록 가져오기 (페이징 적용)
    public List<Medicine> getMedicineList(int offset, int limit) {
        RowBounds rowBounds = new RowBounds(offset, limit);
        return medicineMapper.selectMedicineList(rowBounds);
    }

    // 의약품 상세 정보 가져오기
    public Medicine getMedicineDetail(String itemSeq) {
        return medicineMapper.selectMedicineDetail(itemSeq);
    }

    // 의약품 이름으로 검색
    public List<Medicine> searchMedicineByName(String itemName) {
        return medicineMapper.searchMedicine(itemName);
    }
}
