package com.emginfo.emgnavi.stat.service.impl;

import com.emginfo.emgnavi.stat.mapper.StatMapper;
import com.emginfo.emgnavi.stat.service.StatService;
import com.emginfo.emgnavi.stat.vo.Stat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatServiceImpl implements StatService {

    @Autowired
    private StatMapper statMapper;

    @Override
    public List<Stat> getStatInfo(String searchType, String statType, String keyword) {
        return statMapper.getStatInfo(searchType, statType, keyword);
    }

//    @Override
//    public List<Stat> getHODStatInfo(String searchType, String keyword) {
//        return statMapper.getHODStatInfo(searchType, keyword);
//    }
//
//    @Override
//    public List<Stat> getAPDWStatInfo(String searchType, String keyword) {
//        return statMapper.getAPDWStatInfo(searchType, keyword);
//    }
}
