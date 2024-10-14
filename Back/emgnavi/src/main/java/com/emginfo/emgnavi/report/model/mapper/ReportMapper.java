package com.emginfo.emgnavi.report.model.mapper;

import com.emginfo.emgnavi.report.model.dto.ReportDTO;
import com.emginfo.emgnavi.report.model.vo.Report;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReportMapper {

//    void insertReport(ReportDTO reportDTO);
    void insertReport(Report report);
}
