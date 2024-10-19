package com.emginfo.emgnavi.stat.mapper;

import com.emginfo.emgnavi.stat.vo.Stat;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StatMapper {

    List<Stat> getStatInfo(String searchType, String statType, String keyword);
//    List<Stat> getDOWStatInfo(String searchType, String statType, String keyword);

//    List<Stat> getHODStatInfo(String searchType, String keyword);
//
//    List<Stat> getAPDWStatInfo(String searchType, String keyword);

}
