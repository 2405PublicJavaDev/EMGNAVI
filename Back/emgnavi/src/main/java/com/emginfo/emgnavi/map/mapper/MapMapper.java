package com.emginfo.emgnavi.map.mapper;

import com.emginfo.emgnavi.aed.vo.Aed;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MapMapper {

    List<Hospital> getAroundEmgRoomList(double maxLat, double maxLon, double minLat, double minLon);

    List<Hospital> getAroundHospitalList(double maxLat, double maxLon, double minLat, double minLon);

    List<Aed> getAroundAedList(double maxLat, double maxLon, double minLat, double minLon);

    List<Pharmacy> getAroundPharmacyList(double maxLat, double maxLon, double minLat, double minLon);
}
