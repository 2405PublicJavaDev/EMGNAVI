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
    public List<Stat> getDOWStatInfo(String hpid) {
        System.out.println(hpid);
        return statMapper.getDOWStatInfo(hpid);
    }

    @Override
    public List<Stat> getHODStatInfo(String hpid) {
        return statMapper.getHODStatInfo(hpid);
    }

    @Override
    public List<Stat> getAPDWStatInfo(String hpid) {
        return statMapper.getAPDWStatInfo(hpid);
    }
}
