package com.emginfo.emgnavi.report.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
  private Date createdDate;     // 작성일
  private String status;        // 상태
}
