package com.emginfo.emgnavi.report.model.dto;

import com.emginfo.emgnavi.common.pagenation.PaginationInfo;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ReportPageDTO {
    private List<ReportListDTO> reportList;
    private PaginationInfo paginationInfo;

    public ReportPageDTO(List<ReportListDTO> reportList, PaginationInfo paginationInfo) {
        this.reportList = reportList;
        this.paginationInfo = paginationInfo;
    }
}
