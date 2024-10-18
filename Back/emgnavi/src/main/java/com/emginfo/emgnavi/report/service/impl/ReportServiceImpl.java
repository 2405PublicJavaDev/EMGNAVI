package com.emginfo.emgnavi.report.service.impl;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.report.model.dto.ReportActionDTO;
import com.emginfo.emgnavi.report.model.dto.ReportListDTO;
import com.emginfo.emgnavi.report.model.mapper.ReportMapper;
import com.emginfo.emgnavi.report.model.vo.Report;
import com.emginfo.emgnavi.report.service.ReportService;
import com.emginfo.emgnavi.review.mapper.ReviewMapper;
import com.emginfo.emgnavi.review.vo.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportMapper reportMapper;
    @Autowired
    private ReviewMapper reviewMapper;

    // 신고 요청
    @Override
    public Report requestReport(ReportListDTO reportListDTO) {
        String reportId = reportListDTO.getReporterId(); // 신고자 아이디
        int refNo = reportListDTO.getRefNo(); // 리뷰 번호
        Reviews reviewInfo = reviewMapper.getReviewOneByNo(String.valueOf(refNo));
        System.out.println("조회된 리뷰 정보: " + reviewInfo);
        if (reviewInfo == null) {
            System.out.println("리뷰 정보를 찾을 수 없습니다. refNo: " + refNo);
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }

        // 신고 데이터 저장
        Report report = new Report();
        report.setWriterId(reviewInfo.getWriterId());  // 리뷰 작성자 ID
        report.setReporterId(reportListDTO.getReporterId()); // 신고자 ID
        report.setRefNo(Integer.parseInt(String.valueOf(refNo))); // 리뷰 번호
        report.setContent(reportListDTO.getContent());       // 신고 내용
        if (report.getReportDate() == null) {
            report.setReportDate(LocalDate.now());  // 기본값 설정
        }
        reportMapper.insertReport(report);
        return report;
    }

    // 회원 신고 리스트 조회
    @Override
    public List<ReportListDTO> getReportList() {
        return reportMapper.reportList();
    }

    // 신고 처리
    @Override
    public void processReportAction(int no, ReportActionDTO reportActionDTO) {
        ReportListDTO reportListDTO = reportMapper.findReportById(no); // 실제로 신고 정보를 조회
        if (reportListDTO == null) {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND); // 신고 정보를 찾을 수 없을 때
        }
        if (reportActionDTO.getTargetId().equals(reportListDTO.getWriterId())) {
            // 작성자 정지 및 리뷰 삭제 처리
            reportMapper.freezeWriterId(reportListDTO.getWriterId(), Date.valueOf(reportActionDTO.getUnfreezeDate()));
            reportMapper.deleteReviewByNo(reportListDTO.getRefNo());
            reportMapper.updateReportStatus(no, 1);
        } else if (reportActionDTO.getTargetId().equals(reportListDTO.getReporterId())) {
            // 신고자 정지 처리
            reportMapper.freezeReporterId(reportListDTO.getReporterId(), Date.valueOf(reportActionDTO.getUnfreezeDate()));
            reportMapper.updateReportStatus(no, 1);
        } else {
            throw new CustomException(ErrorCode.UPDATE_FAILED); // 잘못된 처리
        }
    }
}
