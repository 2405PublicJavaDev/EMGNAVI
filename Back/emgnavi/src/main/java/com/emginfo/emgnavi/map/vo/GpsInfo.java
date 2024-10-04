package com.emginfo.emgnavi.map.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class GpsInfo {

    private double latitude;
    private double longitude;
    private double distance;

    public GpsInfo() {
    }

    public GpsInfo(double latitude, double longitude, double distance) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = distance;
    }

}
