package com.emginfo.emgnavi.support.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Support {

  private String no;
  private String writerId;
  private String title;
  private String content;
  private java.sql.Date createdDate;
  private String status;
}