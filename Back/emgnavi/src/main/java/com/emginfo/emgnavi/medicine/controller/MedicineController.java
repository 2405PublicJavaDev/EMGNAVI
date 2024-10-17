package com.emginfo.emgnavi.medicine.controller;

import com.emginfo.emgnavi.medicine.mapper.MedicineMapper;
import com.emginfo.emgnavi.medicine.service.MedicineService;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/medicine")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @Autowired
    private MedicineMapper medicineMapper;  // Mapper 추가

    // 전체 의약품 목록 가져오기 (페이징 처리 추가)
    @GetMapping("/list")
    public Map<String, Object> getMedicineList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        int offset = page * size;
        List<Medicine> medicines = medicineService.getMedicineList(offset, size);

        int totalCount = medicineMapper.getTotalCount();  // 총 데이터 개수 가져오기

        Map<String, Object> response = new HashMap<>();
        response.put("medicines", medicines);
        response.put("totalPages", (int) Math.ceil((double) totalCount / size));

        return response;
    }

    // 의약품 상세 정보 가져오기
    @GetMapping("/detail/{itemSeq}")
    public Medicine getMedicineDetail(@PathVariable String itemSeq) {
        return medicineService.getMedicineDetail(itemSeq);
    }

    // 의약품 이름 또는 업체명으로 검색
    @GetMapping("/search")
    public Map<String, Object> searchMedicine(
            @RequestParam(required = false) String itemName,
            @RequestParam(required = false) String entpName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        List<Medicine> results = medicineService.searchMedicine(itemName, entpName, page, size);
        int totalCount = medicineService.getSearchResultCount(itemName, entpName);

        Map<String, Object> response = new HashMap<>();
        response.put("medicines", results);
        response.put("totalPages", (int) Math.ceil((double) totalCount / size));
        response.put("currentPage", page);
        response.put("totalItems", totalCount);

        return response;
    }
}