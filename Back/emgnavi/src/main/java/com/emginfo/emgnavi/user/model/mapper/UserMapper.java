package com.emginfo.emgnavi.user.model.mapper;

import com.emginfo.emgnavi.user.model.dto.UserIdRequest;
import com.emginfo.emgnavi.user.model.dto.UserInfoRequest;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int insertUser(UserInfoRequest user);

    int checkIdDuplicate(UserIdRequest request);
}
