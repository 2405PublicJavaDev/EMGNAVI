package com.emginfo.emgnavi.notice.controller;

import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import com.emginfo.emgnavi.notice.service.NoticeService;
import com.emginfo.emgnavi.notice.vo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://127.0.0.1:3000")
@RequestMapping("/api/notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @PostMapping("/post")
    public String postNotice(@RequestBody Notice notice) {
        System.out.println(notice);
        int result = noticeService.postNotice(notice);
        return String.valueOf(result);
    }

    @GetMapping("/list")
    public SuccessResponse getNoticeList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        int offset = page * size;
        List<Notice> notices = noticeService.getNoticeList(offset, size);

        System.out.println("notices 크기 : "+notices.size());

        int totalCount = noticeService.getListTotalCount();  // 총 데이터 개수 가져오기
        System.out.println("전체 notice 갯수"+totalCount);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, notices);
    }

}
