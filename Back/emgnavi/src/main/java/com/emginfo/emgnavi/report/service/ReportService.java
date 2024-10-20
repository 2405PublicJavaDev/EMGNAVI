package com.emginfo.emgnavi.report.service;

import com.emginfo.emgnavi.report.model.dto.ReportActionDTO;
import com.emginfo.emgnavi.report.model.dto.ReportPageDTO;
import com.emginfo.emgnavi.report.model.vo.Report;

public interface ReportService {

    Report requestReport(Report reportListDTO);

    ReportPageDTO getReportList(int startRow, int endRow);

    ReportActionDTO processReportAction(int no, ReportActionDTO reportActionDTO);
}
