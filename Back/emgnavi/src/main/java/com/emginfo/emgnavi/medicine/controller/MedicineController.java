package com.emginfo.emgnavi.medicine.controller;

import com.emginfo.emgnavi.medicine.mapper.MedicineMapper;
import com.emginfo.emgnavi.medicine.service.MedicineService;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private MedicineMapper medicineMapper;

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getMedicineList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            int offset = page * size;
            List<Medicine> medicines = medicineService.getMedicineList(offset, size);
            int totalCount = medicineMapper.getTotalCount();

            Map<String, Object> response = new HashMap<>();
            response.put("medicines", medicines);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to fetch medicine list");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/detail/{itemSeq}")
    public ResponseEntity<?> getMedicineDetail(@PathVariable String itemSeq) {
        try {
            Medicine medicine = medicineService.getMedicineDetail(itemSeq);
            if (medicine != null) {
                return ResponseEntity.ok(medicine);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medicine not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching medicine detail");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchMedicine(
            @RequestParam(required = false) String itemName,
            @RequestParam(required = false) String entpName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            List<Medicine> results = medicineService.searchMedicine(itemName, entpName, page, size);
            int totalCount = medicineService.getSearchResultCount(itemName, entpName);

            Map<String, Object> response = new HashMap<>();
            response.put("medicines", results);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to search medicines");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/autocomplete")
    public ResponseEntity<?> autocomplete(
            @RequestParam String query,
            @RequestParam String searchType
    ) {
        try {
            if (query.length() < 2) {
                return ResponseEntity.ok(List.of());
            }

            List<Map<String, Object>> suggestions = medicineService.getAutocompleteSuggestions(query, searchType);

            if (suggestions.isEmpty()) {
                Map<String, Object> noResult = new HashMap<>();
                noResult.put("itemSeq", "no-result");
                noResult.put("itemName", "검색 결과가 없습니다");
                noResult.put("entpName", "");
                return ResponseEntity.ok(List.of(noResult));
            }

            return ResponseEntity.ok(suggestions);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching autocomplete suggestions");
        }
    }
}