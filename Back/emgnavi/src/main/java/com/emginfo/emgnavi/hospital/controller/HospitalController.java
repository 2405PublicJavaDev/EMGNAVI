package com.emginfo.emgnavi.hospital.controller;

import com.emginfo.emgnavi.hospital.mapper.HospitalMapper;
import com.emginfo.emgnavi.hospital.service.HospitalService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
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
            response.put("hospitals", hospitals);
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
            @RequestParam(required = false) String dutyAddr,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            System.out.println("ck01 dName:"+dutyName);
            List<Hospital> results = hospitalService.searchHospital(dutyName, dutyAddr, page, size);
            System.out.println("ck02");
            int totalCount = hospitalService.getSearchResultCount(dutyName, dutyAddr);
            System.out.println("ck03");

            Map<String, Object> response = new HashMap<>();
            response.put("hospitals", results);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to search hospitals");
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
                noResult.put("hpid", "no-result");
                noResult.put("dutyName", "검색 결과가 없습니다");
                noResult.put("dutyAddr", "");
                return ResponseEntity.ok(List.of(noResult));
            }

            return ResponseEntity.ok(suggestions);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching autocomplete suggestions");
        }
    }

    @PostMapping("/favorite")
    public ResponseEntity<?> addFavorite(
            @RequestParam String userId,
            @RequestParam String refNo,
            @RequestParam String dutyName,
            @RequestParam String dutyAddr,
            @RequestParam String dutyTel1
    ) {
        try {
            hospitalService.addFavorite(userId, refNo, dutyName, dutyAddr, dutyTel1);
            return ResponseEntity.ok("Favorite added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding favorite");
        }
    }

    @DeleteMapping("/favorite")
    public ResponseEntity<?> removeFavorite(
            @RequestParam String userId,
            @RequestParam String refNo
    ) {
        try {
            hospitalService.removeFavorite(userId, refNo);
            return ResponseEntity.ok("Favorite removed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing favorite");
        }
    }

    @GetMapping("/favorites")
    public ResponseEntity<?> getFavorites(@RequestParam String userId) {
        try {
            List<Map<String, Object>> favorites = hospitalService.getFavorites(userId);
            return ResponseEntity.ok(favorites);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching favorites");
        }
    }

    @GetMapping("/is-favorite")
    public ResponseEntity<?> isFavorite(
            @RequestParam String userId,
            @RequestParam String refNo
    ) {
        try {
            boolean isFavorite = hospitalService.isFavorite(userId, refNo);
            Map<String, Object> response = new HashMap<>();
            response.put("isFavorite", isFavorite);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error checking favorite status");
        }
    }
}