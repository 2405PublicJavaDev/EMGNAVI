package com.emginfo.emgnavi.aed.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Aed {

    private String rnum;        // 제조 번호
    private String wgs84Lon;    // 경도
    private String wgs84Lat;    // 위도
    private String org;         // 설치 기관명
    private String buildPlace;  // 설치 위치
    private String clerkTel;    // 설치기관전화번호
    private String buildAddress;// 설치기관주소
    private String manager;     // 관리책임자명
    private String managerTel;  // 관리자 연락처
}
