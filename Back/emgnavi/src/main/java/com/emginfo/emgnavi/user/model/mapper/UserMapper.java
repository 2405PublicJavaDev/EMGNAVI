package com.emginfo.emgnavi.user.model.mapper;

import com.emginfo.emgnavi.user.model.dto.*;
import com.emginfo.emgnavi.user.model.vo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int insertUser(UserInfoRequest user);

    int checkIdDuplicate(UserIdRequest request);

    int checkNicknameDuplicate(UserNicknameRequest request);

    User selectIdByPhone(VerifyPhoneRequest request);

    User checkLogin(LoginRequest request);

    User selectUserById(UserInfoRequest request);

    int modifyUser(UserInfoRequest request);
}
