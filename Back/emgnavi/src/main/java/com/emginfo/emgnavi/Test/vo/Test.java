package com.emginfo.emgnavi.Test.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.ibatis.annotations.Mapper;

@NoArgsConstructor
@Getter
@Mapper
@ToString
public class Test {

    private String data;
}
