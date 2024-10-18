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
    private String writerId;
    private String reviewContent;
    private String reporterId;    // 신고자 ID
    private String content;       // 신고 사유 (욕설, 비방/도배, 스팸/불법, 부적절한 내용/기타)
    private int status;        // 신고 처리 상태
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd") // 날짜 포맷
    private LocalDate reportDate;      // 신고 날짜
    private int refNo;            // 신고된 리뷰의 No (REVIEW_TBL)
    private Date unfreezeDate;    // 정지 해제 날짜 (USER_TBL)

}
