package com.emginfo.emgnavi.test.vo;


public class Review {

  private String no;
  private String writerId;
  private String refNo;
  private String content;
  private java.sql.Date createdDate;


  public String getNo() {
    return no;
  }

  public void setNo(String no) {
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


  public java.sql.Date getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(java.sql.Date createdDate) {
    this.createdDate = createdDate;
  }

}
