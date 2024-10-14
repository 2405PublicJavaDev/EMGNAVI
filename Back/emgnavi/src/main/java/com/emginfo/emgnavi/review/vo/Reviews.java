package com.emginfo.emgnavi.review.vo;

import lombok.*;

import java.util.Date;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Reviews {
  private int no;
  private String writerId;
  private String refNo;
  private int rating;
  private String content;
  private Date createdDate;
}