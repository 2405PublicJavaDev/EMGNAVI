package com.emginfo.emgnavi.favorite.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class Favorite {

  private String userId;        // 회원 아이디
  private String refNo;     // 기능 번호(병원, 약국)
  private String dutyName;  // 기관명
  private String dutyAddr;  // 주소
  private String dutyTel1;  // 대표전화

}
