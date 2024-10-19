package com.emginfo.emgnavi.hospital.controller;

import com.emginfo.emgnavi.hospital.mapper.HospitalMapper;
import com.emginfo.emgnavi.hospital.service.HospitalService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/hospital")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @Autowired
    private HospitalMapper hospitalMapper;

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getHospitalList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            int offset = page * size;
            List<Hospital> hospitals = hospitalService.getHospitalList(offset, size);
            int totalCount = hospitalMapper.getTotalCount();

            Map<String, Object> response = new HashMap<>();
            response.put("medicines", hospitals);
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

    @GetMapping("/detail/{hpid}")
    public ResponseEntity<?> getHospitalDetail(@PathVariable String hpid) {
        try {
            Hospital hospital = hospitalService.getHospitalDetail(hpid);
            if (hospital != null) {
                return ResponseEntity.ok(hospital);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hospital not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching hospital detail");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchHospital(
            @RequestParam(required = false) String dutyName,
            @RequestParam(required = false) String entpName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            List<Hospital> results = hospitalService.searchHospital(dutyName, entpName, page, size);
            int totalCount = hospitalService.getSearchResultCount(dutyName, entpName);

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

            List<Map<String, Object>> suggestions = hospitalService.getAutocompleteSuggestions(query, searchType);

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