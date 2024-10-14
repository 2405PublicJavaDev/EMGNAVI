package com.emginfo.emgnavi.stat.mapper;

import com.emginfo.emgnavi.stat.vo.Stat;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StatMapper {

    List<Stat> getDOWStatInfo(String hpid);

    List<Stat> getHODStatInfo(String hpid);

    List<Stat> getAPDWStatInfo(String hpid);

}
