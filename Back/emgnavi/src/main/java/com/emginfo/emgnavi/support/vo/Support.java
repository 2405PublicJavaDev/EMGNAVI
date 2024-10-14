package com.emginfo.emgnavi.support.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Support {

  private String no;
  private String writerId;
  private String title;
  private String content;
  private Date createdDate;
  private String status;
}