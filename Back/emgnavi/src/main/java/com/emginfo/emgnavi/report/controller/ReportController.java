package com.emginfo.emgnavi.report.controller;

import com.emginfo.emgnavi.report.model.dto.ReportDTO;
import com.emginfo.emgnavi.report.service.ReportService;
import com.emginfo.emgnavi.user.model.vo.User;
import jakarta.servlet.http.HttpSession;
import jdk.javadoc.doclet.Reporter;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    // 회원 신고
    @PostMapping("/report")
    public ResponseEntity<String> reportUser(
            @RequestBody ReportDTO reportDTO,
            HttpSession session) {

        String reporterId = (String) session.getAttribute("userId");
        if(reporterId == null) {
            return ResponseEntity.status(401).body("로그인이 필요합니다.");
        }
        // 신고한 ID = 로그인한 ID
        // 신고 날짜
        reportDTO.setRefDate(reportDTO.getRefDate());
        reportService.saveReport(reportDTO);
        return ResponseEntity.ok("Report saved successfully");
    }

    // 회원 신고 리스트 조회
    @GetMapping("admin/reportList")
    public void listReport(Model model, Reporter reporter) {

    }

    // 회원 신고 조치
    @PostMapping("")
    public void reportAction() {

    }
}
