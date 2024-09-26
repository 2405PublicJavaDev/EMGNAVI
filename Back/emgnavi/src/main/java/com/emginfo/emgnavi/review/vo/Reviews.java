package com.emginfo.emgnavi.review.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Reviews {

  private String no;
  private String writerId;
  private String refNo;
  private String content;
  private java.sql.Date createdDate;
}
