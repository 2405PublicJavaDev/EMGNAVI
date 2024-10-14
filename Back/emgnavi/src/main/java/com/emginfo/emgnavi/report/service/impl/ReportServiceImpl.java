package com.emginfo.emgnavi.report.service.impl;

import com.emginfo.emgnavi.report.model.dto.ReportDTO;
import com.emginfo.emgnavi.report.model.mapper.ReportMapper;
import com.emginfo.emgnavi.report.model.vo.Report;
import com.emginfo.emgnavi.report.service.ReportService;
import com.emginfo.emgnavi.review.vo.Reviews;
import org.springframework.stereotype.Service;

@Service
public class ReportServiceImpl implements ReportService {

    private ReportMapper reportMapper;
//    private ReviewMapper reviewMapper;

    @Override
    public void saveReport(ReportDTO reportDTO) {
//        // 리뷰 정보 가져오기
//        // SELECT NO, WRITER_ID, CONTENT FROM REVIEW_TBL WHERE NO = #{refNo}
//        Reviews review = reviewMapper.findReviewByNo(reportDTO.getRefNo());
//        // 리뷰 작성자 DTO에 저장
//        reportDTO.setWriterId(review.getWriterId());

        // 신고 데이터 설정
        Report report = new Report();
        report.setWriterId(reportDTO.getWriterId());  // 리뷰 작성자 ID
        report.setReporterId(reportDTO.getReporterId()); // 신고자 ID
        report.setRefNo(reportDTO.getRefNo());        // 리뷰 번호
        report.setContent(reportDTO.getContent());    // 신고 내용
        report.setStatus(reportDTO.getStatus());      // 신고 상태

        reportMapper.insertReport(report);
    }
}
