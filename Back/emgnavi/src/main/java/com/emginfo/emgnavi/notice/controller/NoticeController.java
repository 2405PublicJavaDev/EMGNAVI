package com.emginfo.emgnavi.notice.controller;

import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.notice.service.NoticeService;
import com.emginfo.emgnavi.notice.vo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "https://127.0.0.1:3000")
@RequestMapping("/api/notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @PostMapping("/post")
    public String postNotice(@RequestBody Notice notice) {
        System.out.println(notice);
        int result = noticeService.postNotice(notice);
        return String.valueOf(result);
    }

    @PostMapping("/put")
    public String putNotice(@RequestBody Notice notice) {
        System.out.println(notice);
        int result = noticeService.putNotice(notice);
        return String.valueOf(result);
    }

    @GetMapping("/delete")
    public String deleteNotice(int noticeId) {
        System.out.println(noticeId);
        int result = noticeService.deleteNotice(noticeId);
        return String.valueOf(result);
    }

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getNoticeList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        try{
            int offset = page * size;
            List<Notice> notices = noticeService.getNoticeList(offset, size);

            System.out.println("notices 크기 : "+notices.size());

            int totalCount = noticeService.getListTotalCount();  // 총 데이터 개수 가져오기
            System.out.println("전체 notice 갯수"+totalCount);

            Map<String, Object> response = new HashMap<>();
            response.put("notices", notices);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            System.out.println("totalCount"+totalCount);
            System.out.println("totalPages:"+response.get("totalPages"));
            System.out.println("currentPage:"+response.get("currentPage"));

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to fetch notice list");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/detail")
    public SuccessResponse getNoticeDetail(
            @RequestParam int noticeId
    ){
        System.out.println("ck01");
        Notice notice = noticeService.getNoticeDetail(noticeId);
        System.out.println("notice객체:"+notice.toString());
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, notice);
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchNotice(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String writer,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            System.out.println("ck01 dName:"+ title);
            List<Notice> results = noticeService.searchNotice(title, writer, page, size);
            System.out.println("ck02 listSize:"+results.size());
            int totalCount = noticeService.getSearchResultCount(title, writer);
            System.out.println("ck05");

            Map<String, Object> response = new HashMap<>();
            response.put("notices", results);
            response.put("totalPages", (int) Math.ceil((double) totalCount / size));
            response.put("currentPage", page);
            response.put("totalItems", totalCount);

            System.out.println("totalCount"+totalCount);
            System.out.println("totalPages:"+response.get("totalPages"));
            System.out.println("currentPage:"+response.get("currentPage"));

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to search hospitals");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/getBetweenId")
    public ResponseEntity<Map<String, Object>> getBetweenNotice(int noticeId) {
        try {
            Map<String, Object> response = noticeService.getBetweenNotice(noticeId);
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
            System.out.println("query : "+query);
            System.out.println("searchType : "+searchType);
            if (query.length() < 2) {
                return ResponseEntity.ok(List.of());
            }

            List<Map<String, Object>> suggestions = noticeService.getAutocompleteSuggestions(query, searchType);

            for (Map<String, Object> suggestion : suggestions) {
                System.out.println("suggestion : "+suggestion.entrySet());
//                suggestion.remove("NOTICE_DATE");
            }

            if (suggestions.isEmpty()) {
                Map<String, Object> noResult = new HashMap<>();
                noResult.put("noticeId", "no-result");
                noResult.put("title", "검색 결과가 없습니다");
                noResult.put("writer", "");
                return ResponseEntity.ok(List.of(noResult));
            }

            return ResponseEntity.ok(suggestions);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching autocomplete suggestions");
        }
    }

}
