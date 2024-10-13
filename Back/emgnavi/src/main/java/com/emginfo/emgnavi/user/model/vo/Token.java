package com.emginfo.emgnavi.user.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Token {
    private String tokenId; // TOKEN_ID
    private String userId;  // USER_ID
    private Timestamp createDate; // CREATE_DATE
}
