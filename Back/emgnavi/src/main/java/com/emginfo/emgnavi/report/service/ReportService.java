package com.emginfo.emgnavi.report.service;

import com.emginfo.emgnavi.report.model.dto.ReportActionDTO;
import com.emginfo.emgnavi.report.model.dto.ReportListDTO;
import com.emginfo.emgnavi.report.model.vo.Report;

import java.util.List;

public interface ReportService {

    Report requestReport(Report reportListDTO);

    List<ReportListDTO> getReportList();

    ReportActionDTO processReportAction(int no, ReportActionDTO reportActionDTO);
}
