package com.emginfo.emgnavi.user.model.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VerifyPhoneRequest {
    private String userPhone;
}
