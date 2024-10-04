package com.emginfo.emgnavi.user.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {

  private String userId;
  private String userNickname;
  private String userPw;
  private String userPhone;
  private String userName;
  private String userGender;
  private String userAddress;
  private Date unfreezeDate;
  private String marketingAgree;
}
