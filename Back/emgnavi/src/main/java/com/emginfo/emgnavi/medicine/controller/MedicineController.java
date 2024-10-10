package com.emginfo.emgnavi.medicine.controller;


import com.emginfo.emgnavi.medicine.service.MedicineService;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicine")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    // 전체 의약품 목록 가져오기
    @GetMapping("/list")
    public List<Medicine> getMedicineList() {
        return medicineService.getMedicineList();
    }

    // 의약품 상세 정보 가져오기
    @GetMapping("/detail/{itemSeq}")
    public Medicine getMedicineDetail(@PathVariable String itemSeq) {
        return medicineService.getMedicineDetail(itemSeq);
    }

    // 의약품 이름으로 검색
    @GetMapping("/search")
    public List<Medicine> searchMedicine(@RequestParam String itemName) {
        return medicineService.searchMedicineByName(itemName);
    }





}
