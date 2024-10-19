package com.emginfo.emgnavi.report.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDate;

@Getter
@Setter
public class ReportListDTO {
    private int no;              // 신고 번호
    private String writerId; // 작성자 ID
    private String reviewContent; // 리뷰 내용
    private String reporterId;    // 신고자 ID
    private String content;       // 신고 사유
    private int status;        // 신고 처리 상태
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd") // 날짜 포맷
    private LocalDate reportDate;      // 신고 날짜
    private int refNo;            // 신고된 리뷰의 No (REVIEW_TBL)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate unfreezeDate; // 정지 해제 날짜
    private String targetId;
}
