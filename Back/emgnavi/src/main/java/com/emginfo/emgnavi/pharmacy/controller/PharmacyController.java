package com.emginfo.emgnavi.pharmacy.controller;

import com.emginfo.emgnavi.pharmacy.service.PharmacyService;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/pharmacy")
public class PharmacyController {

    @Autowired
    private PharmacyService pharmacyService;

    // 약국 리스트 조회 (로그인 여부에 따라 즐겨찾기 반영, HPID가 'C'로 시작하는 항목만 조회)
    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getPharmacyList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String userId
    ) {
        try {
            int offset = page * size;

            // HPID가 'C'로 시작하는 약국만 필터링
            List<Pharmacy> pharmacies = pharmacyService.getPharmacyList(offset, size)
                    .stream()
                    .filter(pharmacy -> pharmacy.getHpid().startsWith("C"))
                    .collect(Collectors.toList());

            // 로그인된 경우 사용자의 즐겨찾기 상태 반영
            if (userId != null && !userId.isEmpty()) {
                List<Map<String, Object>> favorites = pharmacyService.getFavorites(userId);
                Map<String, Boolean> favoriteMap = new HashMap<>();

                for (Map<String, Object> favorite : favorites) {
                    String refNo = (String) favorite.get("refNo");
                    favoriteMap.put(refNo, true);
                }

                // 각 약국에 즐겨찾기 여부 추가
                for (Pharmacy pharmacy : pharmacies) {
                    pharmacy.setFavorite(favoriteMap.getOrDefault(pharmacy.getHpid(), false));
                }
            }

            int totalCount = pharmacyService.getTotalCount();

            Map<String, Object> response = new HashMap<>();
            response.put("pharmacies", pharmacies);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to fetch pharmacy list");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    // 약국 상세 조회
    @GetMapping("/detail/{hpid}")
    public ResponseEntity<?> getPharmacyDetail(@PathVariable String hpid) {
        try {
            Pharmacy pharmacy = pharmacyService.getPharmacyDetail(hpid);
            if (pharmacy != null) {
                return ResponseEntity.ok(pharmacy);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pharmacy not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching pharmacy detail");
        }
    }

    // 약국 검색 (즐겨찾기 반영)
    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchPharmacy(
            @RequestParam(required = false) String dutyName,
            @RequestParam(required = false) String dutyAddr,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String userId
    ) {
        try {
            List<Pharmacy> results = pharmacyService.searchPharmacy(dutyName, dutyAddr, page, size)
                    .stream()
                    .filter(pharmacy -> pharmacy.getHpid().startsWith("C"))
                    .collect(Collectors.toList());

            // 로그인된 경우 즐겨찾기 상태 반영
            if (userId != null && !userId.isEmpty()) {
                List<Map<String, Object>> favorites = pharmacyService.getFavorites(userId);
                Map<String, Boolean> favoriteMap = new HashMap<>();
                for (Map<String, Object> favorite : favorites) {
                    String refNo = (String) favorite.get("refNo");
                    favoriteMap.put(refNo, true);
                }

                for (Pharmacy pharmacy : results) {
                    pharmacy.setFavorite(favoriteMap.getOrDefault(pharmacy.getHpid(), false));
                }
            }

            int totalCount = pharmacyService.getSearchResultCount(dutyName, dutyAddr);

            Map<String, Object> response = new HashMap<>();
            response.put("pharmacies", results);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to search pharmacies");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    // 자동 완성 (기존과 동일)
    @GetMapping("/autocomplete")
    public ResponseEntity<?> autocomplete(
            @RequestParam String query,
            @RequestParam String searchType
    ) {
        try {
            if (query.length() < 2) {
                return ResponseEntity.ok(List.of());
            }

            List<Map<String, Object>> suggestions = pharmacyService.getAutocompleteSuggestions(query, searchType);

            if (suggestions.isEmpty()) {
                Map<String, Object> noResult = new HashMap<>();
                noResult.put("value", "no-result");
                noResult.put("label", "검색 결과가 없습니다");
                return ResponseEntity.ok(List.of(noResult));
            }

            return ResponseEntity.ok(suggestions);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching autocomplete suggestions");
        }
    }

    // 즐겨찾기 추가
    @PostMapping("/favorite")
    public ResponseEntity<?> addFavorite(
            @RequestParam String userId,
            @RequestParam String refNo,
            @RequestParam String dutyName,
            @RequestParam String dutyAddr,
            @RequestParam String dutyTel1
    ) {
        try {
            pharmacyService.addFavorite(userId, refNo, dutyName, dutyAddr, dutyTel1);
            return ResponseEntity.ok("Favorite added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding favorite");
        }
    }

    // 즐겨찾기 삭제
    @DeleteMapping("/favorite")
    public ResponseEntity<?> removeFavorite(
            @RequestParam String userId,
            @RequestParam String refNo
    ) {
        try {
            pharmacyService.removeFavorite(userId, refNo);
            return ResponseEntity.ok("Favorite removed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing favorite");
        }
    }

    // 사용자의 즐겨찾기 목록 조회
    @GetMapping("/favorites")
    public ResponseEntity<?> getFavorites(@RequestParam String userId) {
        try {
            List<Map<String, Object>> favorites = pharmacyService.getFavorites(userId);
            return ResponseEntity.ok(favorites);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching favorites");
        }
    }

    // 특정 약국이 즐겨찾기에 있는지 확인
    @GetMapping("/is-favorite")
    public ResponseEntity<?> isFavorite(
            @RequestParam String userId,
            @RequestParam String refNo
    ) {
        try {
            boolean isFavorite = pharmacyService.isFavorite(userId, refNo);
            Map<String, Object> response = new HashMap<>();
            response.put("isFavorite", isFavorite);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error checking favorite status");
        }
    }
}
