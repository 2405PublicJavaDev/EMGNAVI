package com.emginfo.emgnavi.report.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.report.model.dto.ReportActionDTO;
import com.emginfo.emgnavi.report.model.dto.ReportPageDTO;
import com.emginfo.emgnavi.report.model.vo.Report;
import com.emginfo.emgnavi.report.service.ReportService;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    // 회원 신고 하기
    @PostMapping("/report/{refNo}")
    public SuccessResponse reportUser(@PathVariable String refNo, @RequestBody Report report, HttpSession session) {
        String reporterId = (String) session.getAttribute("userId");
        if (reporterId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        report.setReporterId(reporterId);
        report.setRefNo(Integer.parseInt(refNo));

        if (report.getReporterId() == null || report.getRefNo() <= 0) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        Report savedReport = reportService.requestReport(report);
        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS, savedReport);
    }


    // 회원 신고 리스트 조회
    @GetMapping("admin/reportList")
    public SuccessResponse listReport(
            @RequestParam(value = "page", defaultValue = "1") int prsnPageNo,
            @RequestParam(value = "size", defaultValue = "6") int cntntPerPage,
            HttpSession session) {
        ReportPageDTO reportPageDTO = reportService.getReportList(prsnPageNo, cntntPerPage);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, reportPageDTO);
    }

    // 회원 신고 조치
    @PostMapping("/reports/{no}")
    public SuccessResponse reportAction(@PathVariable int no, @RequestBody ReportActionDTO reportActionDTO) {
        reportService.processReportAction(no, reportActionDTO);
        return new SuccessResponse(SuccessCode.UPDATE_SUCCESS);
    }
}
