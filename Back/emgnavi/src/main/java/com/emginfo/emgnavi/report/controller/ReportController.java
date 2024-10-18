package com.emginfo.emgnavi.report.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.report.model.dto.ReportActionDTO;
import com.emginfo.emgnavi.report.model.dto.ReportListDTO;
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
    public SuccessResponse reportUser(@PathVariable String refNo, @RequestBody ReportListDTO reportListDTO, HttpSession session) {
        // 신고한 ID = 로그인한 ID
        String reporterId = (String) session.getAttribute("userId");
        if(reporterId == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        reportListDTO.setReporterId(reporterId);
        reportListDTO.setRefNo(Integer.parseInt(refNo));

        if(reportListDTO.getReporterId() == null || reportListDTO.getRefNo() <= 0) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        Report report = reportService.requestReport(reportListDTO);
        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS, report);
    }

    // 회원 신고 리스트 조회
    @GetMapping("admin/reportList")
    public SuccessResponse listReport(HttpSession session) {
        List<ReportListDTO> reportListDTO = reportService.getReportList();
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, reportListDTO);
    }

    // 회원 신고 조치
    @PostMapping("/reports/{no}")
    public SuccessResponse reportAction(@PathVariable int no, @RequestBody ReportActionDTO reportActionDTO) {
        System.out.println("unfreezeDate: " + reportActionDTO.getUnfreezeDate());
        reportService.processReportAction(no, reportActionDTO);
        return new SuccessResponse(SuccessCode.UPDATE_SUCCESS);
    }
}
