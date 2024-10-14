package com.emginfo.emgnavi.review.mapper;

import com.emginfo.emgnavi.review.vo.Reviews;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

    int postReview(Reviews review);
}