package com.emginfo.emgnavi.report.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ReportDTO {
    private String writerId;   // 리뷰 작성자 ID
    private String content;    // 신고 내용
    private String reporterId; // 신고자 ID (로그인한 회원)
    private int refNo;         // 리뷰 번호
    private String status;     // 0 : 신고되지 않은 상태, 1 : 신고된 상태
    private LocalDate refDate; // 신고 날짜
}
