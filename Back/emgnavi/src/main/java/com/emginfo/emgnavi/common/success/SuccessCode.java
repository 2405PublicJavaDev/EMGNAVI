package com.emginfo.emgnavi.common.success;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public enum SuccessCode {

    REGISTER_SUCCESS(HttpStatus.CREATED, "등록이 완료되었습니다."),

    DELETE_SUCCESS(HttpStatus.OK, "삭제가 완료되었습니다."),

    RESOURCE_FOUND(HttpStatus.OK, "정보를 성공적으로 조회했습니다.");

    private final HttpStatus status;
    private final String message;
}
