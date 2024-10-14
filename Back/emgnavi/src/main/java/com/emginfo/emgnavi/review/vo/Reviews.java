package com.emginfo.emgnavi.review.vo;

import java.util.Date;

public class Reviews {
  private int no;
  private String writerId;
  private String refNo;
  private String content;
  private Date createdDate;
  private String createdDateShort; //리뷰 날짜 일까지만 표시용
  private String createdDateLong; // 리뷰 자세히 보기에서 시간까지 표시용
  private int rating;

  // Getters and Setters
  public int getNo() {
    return no;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public String getWriterId() {
    return writerId;
  }

  public void setWriterId(String writerId) {
    this.writerId = writerId;
  }

  public String getRefNo() {
    return refNo;
  }

  public void setRefNo(String refNo) {
    this.refNo = refNo;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Date getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }

  public String getCreatedDateShort() {
    return createdDateShort;
  }

  public void setCreatedDateShort(String createdDateShort) {
    this.createdDateShort = createdDateShort;
  }

  public String getCreatedDateLong() {
    return createdDateLong;
  }

  public void setCreatedDateLong(String createdDateLong) {
    this.createdDateLong = createdDateLong;
  }

  public int getRating() {
    return rating;
  }

  public void setRating(int rating) {
    this.rating = rating;
  }
}