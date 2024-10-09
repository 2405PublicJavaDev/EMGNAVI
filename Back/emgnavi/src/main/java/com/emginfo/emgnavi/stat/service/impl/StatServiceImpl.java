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
    public List<Stat> getStatInfo(String statType) {
        //switch(statType)... statType값으로 적절히 Mapper메서드를 매칭시켜줄 예정
        return List.of();
    }
}
