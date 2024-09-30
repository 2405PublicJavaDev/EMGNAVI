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

  private String rnum;
  private String wgs84Lon;
  private String wgs84Lat;
  private String org;
  private String buildPlace;
  private String clerkTel;
  private String buildAddress;
  private String manager;
  private String managerTel;
}
