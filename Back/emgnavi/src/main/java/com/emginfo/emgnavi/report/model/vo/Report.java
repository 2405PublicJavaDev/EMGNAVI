package com.emginfo.emgnavi.report.model.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Report {

  private int no;               // 신고 번호
  private String writerId;      // 작성자 아이디
  private String reporterId;    // 신고자 아이디
  private int refNo;            // 리뷰 번호
  private String content;       // 내용
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  private LocalDate reportDate;     // 신고일
  private int status;        // 상태
  private String targetId; // 정지 처리 아이디
}
