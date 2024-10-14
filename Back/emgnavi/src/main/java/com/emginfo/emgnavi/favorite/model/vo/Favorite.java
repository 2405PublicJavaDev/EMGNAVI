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

  // 병원인지 확인하는 메서드
  public boolean isHospital() {
    return refNo != null && refNo.startsWith("A");
  }

  // 약국인지 확인하는 메서드
  public boolean isPharmacy() {
    return refNo != null && refNo.startsWith("C");
  }
}
