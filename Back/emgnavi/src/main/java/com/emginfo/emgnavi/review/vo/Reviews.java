package com.emginfo.emgnavi.review.vo;

import lombok.Builder;

import java.util.Date;

@Builder
public class Reviews {
  private int no;
  private String writerId;
  private String refNo;
  private int rating;
  private String content;
  private Date createdDate;
}