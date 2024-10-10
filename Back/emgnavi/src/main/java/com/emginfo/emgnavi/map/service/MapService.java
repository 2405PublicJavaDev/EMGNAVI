package com.emginfo.emgnavi.map.service;

import com.emginfo.emgnavi.aed.vo.Aed;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.map.vo.GpsInfo;

import java.util.List;

public interface MapService {

    /**
     * GPS 정보 및 검색 반경값을 gpsInfo 객체로 받아서 조건에 맞는 Hospital의 List를 받아오는 Service
     * @param gpsInfo
     * @return List<Hospital>
     */
    public List<Hospital> getAroundEmgRoomList(GpsInfo gpsInfo);

    /**
     *
     * @param gpsInfo
     * @return List<AED>
     */
    List<Aed> getAroundAedList(GpsInfo gpsInfo);
}
