package com.emginfo.emgnavi.user.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {

  private String userId;
  private String userNickname;
  private String userPw;
  private String userPhone;
  private String isAdmin;
  private String loginType;
  private String userName;
  private String userGender;
  private String userAddress;
  private java.sql.Date unfreezeDate;
}
