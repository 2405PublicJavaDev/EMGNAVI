package com.emginfo.emgnavi.report.model.mapper;

import com.emginfo.emgnavi.report.model.dto.ReportListDTO;
import com.emginfo.emgnavi.report.model.vo.Report;
import jakarta.validation.constraints.NotNull;
import org.apache.ibatis.annotations.Mapper;

import java.sql.Date;
import java.util.List;

@Mapper
public interface ReportMapper {

    // 신고 하기
    void insertReport(Report report);

    // 신고 리스트 조회
    List<ReportListDTO> reportList();

    // 신고 정보 조회
    ReportListDTO findReportById(int no);

    // 작성자 정지 처리
    void freezeWriterId(String writerId, Date unfreezeDate);
    // 리뷰 삭제
    void deleteReviewByNo(int no);

    // 신고자 정지 처리
    void freezeReporterId(String reporterId, Date unfreezeDate);

    // 신고 상태 업데이트
    void updateReportStatus(int no, int status, String targetId);
}
