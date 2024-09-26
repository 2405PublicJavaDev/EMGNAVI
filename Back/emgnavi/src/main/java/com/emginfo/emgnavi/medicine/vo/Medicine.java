package com.emginfo.emgnavi.medicine.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@Getter
@Service
@ToString
public class Medicine {

  private String itemSeq;
  private String entpName;
  private String itemName;
  private String efcyQesitm;
  private String useMethodQesitm;
  private String atpnWarnQesitm;
  private String atpnQesitm;
  private String intrcQesitm;
  private String seQesitm;
  private String depositMethodQesitm;
}
