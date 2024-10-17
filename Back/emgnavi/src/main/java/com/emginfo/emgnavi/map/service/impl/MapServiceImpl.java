package com.emginfo.emgnavi.map.service.impl;

import com.emginfo.emgnavi.aed.vo.Aed;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.map.mapper.MapMapper;
import com.emginfo.emgnavi.map.service.MapService;
import com.emginfo.emgnavi.map.vo.GpsInfo;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MapServiceImpl implements MapService {

    @Autowired
    private MapMapper mapMapper;

    private final double EARTH_RADIUS = 6371.01;


    @Override
    public List<Hospital> getAroundEmgRoomList(GpsInfo gpsInfo) {

        //현재 위도 좌표 (y 좌표)
        double nowLatitude = gpsInfo.getLatitude();
        //현재 경도 좌표 (x 좌표)
        double nowLongitude = gpsInfo.getLongitude();

        //m당 y 좌표 이동 값
        double mForLatitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)))/ 1000;
        //m당 x 좌표 이동 값
        double mForLongitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)* Math.cos(Math.toRadians(nowLatitude))))/ 1000;

        //현재 위치 기준 검색 거리 좌표
        double maxLat = nowLatitude +(gpsInfo.getDistance()* mForLatitude);
        double minLat = nowLatitude -(gpsInfo.getDistance()* mForLatitude);
        double maxLon = nowLongitude +(gpsInfo.getDistance()* mForLongitude);
        double minLon = nowLongitude -(gpsInfo.getDistance()* mForLongitude);

        System.out.println("maxLat="+maxLat+" minLat="+minLat+" maxLon="+maxLon+" minLon="+minLon);

        //해당되는 좌표의 범위 안에 있는 가맹점
        List<Hospital>tempAroundHospitalList = mapMapper.getAroundHospitalList(maxLat, maxLon, minLat, minLon);
        List<Hospital>resultAroundHospitalList = new ArrayList<>();

        System.out.println("listSize: "+tempAroundHospitalList.size());

        //정확한 거리 측정
        for(Hospital aroundHospital : tempAroundHospitalList) {
            double distance = this.getDistance(nowLatitude, nowLongitude, Double.parseDouble(aroundHospital.getWgs84Lat()), Double.parseDouble(aroundHospital.getWgs84Lon()));
            if(distance < gpsInfo.getDistance()) {
                resultAroundHospitalList.add(aroundHospital);
            }
        }
        return resultAroundHospitalList;
    }

    @Override
    public List<Aed> getAroundAedList(GpsInfo gpsInfo) {
        //현재 위도 좌표 (y 좌표)
        double nowLatitude = gpsInfo.getLatitude();
        //현재 경도 좌표 (x 좌표)
        double nowLongitude = gpsInfo.getLongitude();

        //m당 y 좌표 이동 값
        double mForLatitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)))/ 1000;
        //m당 x 좌표 이동 값
        double mForLongitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)* Math.cos(Math.toRadians(nowLatitude))))/ 1000;

        //현재 위치 기준 검색 거리 좌표
        double maxLat = nowLatitude +(gpsInfo.getDistance()* mForLatitude);
        double minLat = nowLatitude -(gpsInfo.getDistance()* mForLatitude);
        double maxLon = nowLongitude +(gpsInfo.getDistance()* mForLongitude);
        double minLon = nowLongitude -(gpsInfo.getDistance()* mForLongitude);

        System.out.println("maxLat="+maxLat+" minLat="+minLat+" maxLon="+maxLon+" minLon="+minLon);

        //해당되는 좌표의 범위 안에 있는 가맹점
        List<Aed>tempAroundAedList = mapMapper.getAroundAedList(maxLat, maxLon, minLat, minLon);
        List<Aed>resultAroundAedList = new ArrayList<>();

        System.out.println("listSize: "+tempAroundAedList.size());

        //정확한 거리 측정
        for(Aed aroundAed : tempAroundAedList) {
            double distance = this.getDistance(nowLatitude, nowLongitude, Double.parseDouble(aroundAed.getWgs84Lat()), Double.parseDouble(aroundAed.getWgs84Lon()));
            if(distance < gpsInfo.getDistance()) {
                resultAroundAedList.add(aroundAed);
            }
        }
        return resultAroundAedList;
    }

    @Override
    public List<Pharmacy> getAroundPharmacyList(GpsInfo gpsInfo) {
        //현재 위도 좌표 (y 좌표)
        double nowLatitude = gpsInfo.getLatitude();
        //현재 경도 좌표 (x 좌표)
        double nowLongitude = gpsInfo.getLongitude();

        //m당 y 좌표 이동 값
        double mForLatitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)))/ 1000;
        //m당 x 좌표 이동 값
        double mForLongitude =(1 /(EARTH_RADIUS* 1 *(Math.PI/ 180)* Math.cos(Math.toRadians(nowLatitude))))/ 1000;

        //현재 위치 기준 검색 거리 좌표
        double maxLat = nowLatitude +(gpsInfo.getDistance()* mForLatitude);
        double minLat = nowLatitude -(gpsInfo.getDistance()* mForLatitude);
        double maxLon = nowLongitude +(gpsInfo.getDistance()* mForLongitude);
        double minLon = nowLongitude -(gpsInfo.getDistance()* mForLongitude);

        System.out.println("maxLat="+maxLat+" minLat="+minLat+" maxLon="+maxLon+" minLon="+minLon);

        //해당되는 좌표의 범위 안에 있는 가맹점
        List<Pharmacy>tempAroundPharmacyList = mapMapper.getAroundPharmacyList(maxLat, maxLon, minLat, minLon);
        List<Pharmacy>resultAroundPharmacyList = new ArrayList<>();

        System.out.println("listSize: "+tempAroundPharmacyList.size());

        //정확한 거리 측정
        for(Pharmacy aroundPharmacy : tempAroundPharmacyList) {
            double distance = this.getDistance(nowLatitude, nowLongitude, Double.parseDouble(aroundPharmacy.getPostCdn2()), Double.parseDouble(aroundPharmacy.getPostCdn1()));
            if(distance < gpsInfo.getDistance()) {
                resultAroundPharmacyList.add(aroundPharmacy);
            }
        }
        return resultAroundPharmacyList;
    }

    private double getDistance(double nowLatitude, double nowLongitude, double locationLat, double locationLon){
        double dLat = Math.toRadians(locationLat - nowLatitude);
        double dLon = Math.toRadians(locationLon - nowLongitude);

        double a = Math.sin(dLat/2)* Math.sin(dLat/2)+ Math.cos(Math.toRadians(nowLatitude))* Math.cos(Math.toRadians(locationLat))* Math.sin(dLon/2)* Math.sin(dLon/2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return EARTH_RADIUS* c * 1000; // Distance in m
    }

}
