import { useState, EventHandler, ReactNode } from 'react'

const MedicineDetail = () => {
    return (
        <>
            <div className="relative w-[100%] h-[3570px] bg-[#fff] overflow-hidden mt-[161px]">
                {/* <img className="absolute left-0 top-[892px]" width="1920" height="428" src="image 440_435.png" alt="Background"></img> */}
                <div className="absolute left-[122px] top-[224px] w-[1728px] h-[1799px] overflow-hidden">
                    <div className="absolute left-0 top-[76px] w-[1728px] h-[1646px] bg-[#fff] overflow-hidden">
                        <div className="absolute left-[303px] top-[181px] w-[1121px] h-[590px]"></div>
                        <div className="absolute left-[-16px] top-[-96px] w-[1728px] h-[1646px] overflow-hidden">
                            <div className="absolute left-[65px] top-[638px] w-[925px] h-[571px]"></div>
                            <div className="absolute left-[535px] top-[69px] w-[913px] h-[447px]">
                                <div className="absolute left-0 top-0 w-[913px] h-[116px] text-[36px] leading-[18px] font-['Roboto'] font-bold text-[#000] flex flex-col justify-center">제품 상세 정보</div>
                                <div className="absolute left-0 top-[147px] w-[1175px] h-[500px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[5px]">
                                    <div className="absolute left-0 top-[-30px] w-[471px] h-[368px] flex">
                                        <div className="absolute left-[1px] top-[151px] w-[470px] h-[22px]"></div>
                                        <div className="absolute left-0 top-0 w-[470px] h-[368px]">
                                            <div className="absolute left-0 top-0 w-[459px] h-[435px]">
                                                <div className="absolute left-[10px] top-[50px] w-[1144px] h-[360px] text-[18px] leading-[18px] font-['Roboto'] font-bold text-[#000]">효능 (efcyQesitm): 이 약은 식욕감퇴(식욕부진), 위부팽만감, 소화불량, 과식, 체함, 구역, 구토에 사용합니다.<br />사용법 (useMethodQesitm):<br />만 15세 이상 및 성인: 1회 1병(75 mL)<br />만 11세 이상~만 15세 미만: 1회 2/3병(50 mL)<br />만 8세 이상~만 11세 미만: 1회 1/2병(37.5 mL)<br />만 5세 이상~만 8세 미만: 1회 1/3병(25 mL)<br />만 3세 이상~만 5세 미만: 1회 1/4병(18.75 mL)<br />만 1세 이상~만 3세 미만: 1회 1/5병(15 mL) 1일 3회 식후에 복용합니다. 복용간격은 4시간 이상으로 합니다.<br />주의사항 경고 (atpnWarnQesitm): (내용 없음)<br />주의사항 (atpnQesitm):<br />만 3개월 미만의 젖먹이는 이 약을 복용하지 마십시오.<br />복용 전 상의가 필요한 경우: 만 1세 미만의 젖먹이, 임부 또는 임신 가능성이 있는 여성, 카라멜에 과민증 환자 또는 경험자, 나트륨 제한 식이를 하는 사람<br />정해진 용법과 용량을 잘 지키십시오.<br />어린이에게 투여할 경우 보호자의 지도 감독하에 투여하십시오.<br />1개월 정도 복용해도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.<br />상호작용 (intrcQesitm): (내용 없음)<br />부작용 (seQesitm): (내용 없음)<br />보관법 (depositMethodQesitm):<br />습기와 빛을 피해 실온에서 보관하십시오.<br />어린이의 손이 닿지 않는 곳에 보관하십시오.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-[22px] top-[-70px] w-[907px] h-[81px] leading-[18px] font-['Roboto'] font-bold flex flex-col justify-center"><span className="text-[18px] text-[#000]">업체명/제품명/<br /></span><span className="text-[14px] text-[#00000078]">품목기준코드 | 2024.08.15(수정일자)</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-[-9px] top-[35px] w-[528px] h-[594px] overflow-hidden">
                        <div className="absolute left-0 right-0 bottom-0 h-0 border-[1px] border-solid border-[#00000000]"></div>
                    </div>
                    <div className="absolute left-[-157px] top-[803px] w-[1869px] h-[637px] overflow-hidden">
                        <div className="absolute left-[673px] top-[74px] w-[468px] h-[443px]">
                            <div className="absolute left-[-444px] top-[-22px] w-[1355px] flex flex-col items-start justify-start gap-[22px]">
                                <div className="self-stretch text-[58px] leading-[43px] font-['Roboto'] font-bold text-[#000]">리뷰 작성</div>
                                <div className="self-stretch text-[22px] leading-[22px] font-['Roboto'] text-[#000]">의견을 자유롭게 작성해 주세요.</div>
                            </div>
                            <div className="absolute left-[-444px] top-[198px] w-[1356px] h-[281px]">
                                <div className="absolute left-0 top-[-47px] w-[468px] h-[281px]">
                                    <div className="absolute left-0 top-0 w-[977px] h-[329px] border-[1px] border-solid border-[#000] overflow-hidden">
                                        <div className="absolute left-0 top-[0px] w-[977px] h-[328px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[5px]">
                                            <div className="absolute left-[11px] top-[53px] w-[956px] h-[18px] text-[13px] leading-[18px] font-['Roboto'] text-[#00000080] line-clamp-1">내용을 입력 해 주세요</div>
                                            <div className="absolute left-[0px] right-[0px] bottom-[286px] h-0 border-[1px] border-solid border-[#000]"></div>
                                            <div className="absolute left-[771px] top-[12px] text-[14px] leading-[18px] font-['Roboto'] font-bold text-[#000] whitespace-nowrap">평점</div>
                                            <img className="absolute left-[807px] top-[10px]" width="160" height="22" src="/img/medicine/greystarfifth.png" alt="Rating"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-[234px] top-[180px] w-[216px] h-[43px]"></div>
                                <div className="absolute left-0 top-[180px] w-[216px] h-[43px]"></div>
                                <img className="absolute left-[1033px] top-[-184px]" width="544" height="554" src="/img/medicine/review.png" alt="Decoration"></img>
                            </div>
                        </div>
                        <div className="absolute left-[991px] top-[574px] w-[216px] flex flex-col items-center justify-center p-[11px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[7px]">
                            <div className="text-[14px] leading-[22px] font-['Roboto'] font-medium text-[#fff] whitespace-nowrap">작성 완료</div>
                        </div>
                    </div>
                    <img className="absolute left-[-10px] top-[241px]" width="495" height="270" src="/img/medicine/AlYak.png" alt="Product"></img>
                </div>
                <div className="absolute left-[-370px] top-[1752px] w-[2472px] h-[2132px] bg-[#fff] overflow-hidden">
                    <div className="absolute left-[434px] top-[259px] w-[1604px] h-[843px]"></div>
                    <div className="absolute left-[-371px] top-[-10px] w-[3213px] h-[1774px] border-[1px] border-solid border-[#000]">
                        <div className="absolute left-0 top-[0px] w-[3213px] h-[1774px] flex">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[3213px] h-[1774px] overflow-hidden">
                                <div className="absolute left-[417px] top-[128px] w-[2380px] h-[380px]">
                                    <div className="absolute left-0 top-0 w-[2380px] h-[380px]">
                                        <div className="absolute left-0 top-0 w-[2380px] h-[271px]">
                                            <div className="absolute left-[723px] top-[27px] w-[1105px] text-[59px] leading-[54px] font-['NotoSerifTamilSlanted'] font-bold text-[#000] text-center">리뷰 목록</div>
                                            <div className="absolute left-[1009px] top-[380px]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -translate-y-1/2 right-[902px] top-[calc(50%+-51px)] w-[1239px] h-[859px] flex flex-col items-center justify-start border-[1.8px] border-solid border-[#0000001a] rounded-[4px] overflow-hidden">
                                    <div className="relative self-stretch h-[90px] shrink-0 bg-[#cccccc1a] border-[1px] border-solid border-[#000]">
                                        <div className="absolute left-[23px] top-[27px] w-[34px] h-[23px]"></div>
                                        <div className="absolute left-[479px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">리뷰</div>
                                        <div className="absolute left-[699px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">작성일자</div>
                                        <div className="absolute left-[864px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">작성자</div>
                                        <div className="absolute left-[186px] top-[36px] w-[113px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">평점</div>
                                        <div className="absolute left-[870px] top-[35px] w-[508px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">상세정보</div>
                                        <div className="absolute left-[33px] top-[35px] text-[21px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">번호</div>
                                    </div>
                                    {/* 리뷰 목록 아이템들 */}
                                    {/* 리뷰 아이템 1 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[32px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">1</div>
                                        <div className="absolute left-[428px] top-[30px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">의사 선생님 처방으로 먹기...</div>
                                        <div className="absolute left-[681px] top-[32px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1010px] top-[23px] w-[169px] flex flex-col items-start justify-start pt-0 pr-0 pb-0 pl-[56px]">
                                            <div className="self-stretch h-[41px] shrink-0 flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                                <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                            </div>
                                        </div>
                                        <img className="absolute left-[155px] top-[20px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <div className="absolute left-[881px] top-[17px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">CUS4829</div>
                                    </div>

                                    {/* 리뷰 아이템 2 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[38px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2</div>
                                        <div className="absolute left-[428px] top-[38px] w-[218px] h-[23px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center flex flex-col justify-center">2주째 복용 중인데 효과가...</div>
                                        <div className="absolute left-[681px] top-[37px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1011px] top-[30px] w-[169px] h-[41px]">
                                            <div className="absolute left-[56px] top-0 w-[113px] h-[41px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                                <div className="absolute left-[25px] top-[6px] text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                            </div>
                                        </div>
                                        <img className="absolute left-[155px] top-[25px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[296px] top-[34px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[890px] top-[22px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">ID7391</div>
                                    </div>
                                    {/* 리뷰 아이템 3 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[36px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">3</div>
                                        <div className="absolute left-[428px] top-[38px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">부모님께 추천드렸더니...</div>
                                        <div className="absolute left-[681px] top-[37px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1010px] top-[18px] w-[169px] h-[41px]">
                                            <div className="absolute left-[59px] top-[11px] w-[113px] h-[41px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                                <div className="absolute left-[25px] top-[7px] text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                            </div>
                                        </div>
                                        <img className="absolute left-[155px] top-[27px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <div className="absolute left-[876px] top-[21px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">USER5602</div>
                                    </div>
                                    {/* 리뷰 아이템 4 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">4</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">효과는 있지만 가끔 속이...</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1069px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[262px] top-[22px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[296px] top-[22px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[887px] top-[16px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">C9384K</div>
                                    </div>
                                    {/* 리뷰 아이템 5 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">5</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">복용법이 간단해서 좋아요...</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1069px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[296px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[885px] top-[11px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">A7281M</div>
                                    </div>
                                    {/* 리뷰 아이템 6 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">6</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">처음엔 괜찮았는데...</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1069px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[296px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[262px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[228px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[888px] top-[10px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">U6392L</div>
                                    </div>
                                    {/* 리뷰 아이템 7 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">7</div>
                                        <div className="absolute left-[428px] top-[16px] w-[223px] h-[45px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center flex flex-col justify-center">저에게 너무 잘맞는 약인것...</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1067px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <div className="absolute left-[886px] top-[9px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">B8201N</div>
                                    </div>
                                    {/* 리뷰 아이템 8 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">8</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">가격도 비싸지 않고 좋은...</div>
                                        <div className="absolute left-[663px] top-[18px] w-[169px] h-[41px]">
                                            <div className="absolute left-[18px] top-[9px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        </div>
                                        <div className="absolute left-[1067px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <div className="absolute left-[888px] top-[11px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">E5729P</div>
                                    </div>
                                    {/* 리뷰 아이템 9 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">9</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">최악이에요 정말</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1067px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[194px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[228px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[262px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <img className="absolute left-[296px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[887px] top-[11px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">G3017R</div>
                                    </div>
                                    {/* 리뷰 아이템 10 */}
                                    <div className="relative self-stretch h-[77px] shrink-0">
                                        <div className="absolute left-[34px] top-[27px] w-[34px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">10</div>
                                        <div className="absolute left-[428px] top-[27px] w-[223px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">하나 아쉬운게 있다면...</div>
                                        <div className="absolute left-[681px] top-[27px] w-[147px] text-[18px] leading-[23px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                                        <div className="absolute left-[1051px] top-[18px] w-[169px]"></div>
                                        <div className="absolute left-[1067px] top-[18px] w-[113px] h-[41px] flex flex-col items-center justify-center p-[14px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[9px]">
                                            <div className="text-[16px] leading-[27px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                                        </div>
                                        <img className="absolute left-[155px] top-[15px]" width="186" height="46" src="/img/medicine/goldstarfifth.png" alt="Rating"></img>
                                        <img className="absolute left-[296px] top-[23px]" width="37" height="30" src="/img/medicine/greyonestar.png" alt="Gray Star"></img>
                                        <div className="absolute left-[887px] top-[11px] text-[18px] leading-[54px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">T9405S</div>
                                    </div>
                                </div>

                                <div className="absolute left-[1558px] top-[1301px] w-[286px] h-[83px] bg-[#fff] overflow-hidden">
                                    <div className="absolute left-[15px] top-[15px] w-[53px] h-[53px] flex">
                                        <img className="absolute left-0 top-0" width="52" height="52" src="/img/medicine/bluebox.png"></img>
                                        <div className="absolute left-0 top-0 w-[53px] h-[53px] text-[26px] leading-[36px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">1</div>
                                    </div>
                                    <div className="absolute left-[83px] top-[15px] w-[53px] h-[53px] flex">
                                        <img className="absolute left-0 top-0" width="52" height="52" src="/img/medicine/bluebox.png"></img>
                                        <div className="absolute left-0 top-0 w-[53px] h-[53px] text-[26px] leading-[36px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">2</div>
                                    </div>
                                    <div className="absolute left-[151px] top-[15px] w-[53px] h-[53px] flex">
                                        <img className="absolute left-0 top-0" width="52" height="52" src="/img/medicine/bluebox.png"></img>
                                        <div className="absolute left-0 top-0 w-[53px] h-[53px] text-[26px] leading-[36px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">3</div>
                                    </div>
                                    <div className="absolute left-[218px] top-[15px] w-[53px] h-[53px] flex">
                                        <img className="absolute left-0 top-0" width="52" height="52" src="/img/medicine/bluebox.png"></img>
                                        <div className="absolute left-0 top-0 w-[53px] h-[53px] text-[26px] leading-[36px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-[741px] top-[1596px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
                            <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                                <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                                <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png"></img>
                            </div>
                            <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                                <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                                    <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                                    <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/.png"></img>
                                </div>
                                <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                            </div>
                            <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png"></img>
                        </div>
                    </div>
                    <div className="absolute left-[668px] right-[668px] bottom-[42px] h-0 border-[1px] border-solid border-[#0000001a]"></div>
                </div>
                <div className="absolute left-0 top-[-101px] w-[100%] h-[232px]">
                    <div className="absolute left-0 top-0 w-[100%] h-[232px] flex">
                        <div className="absolute left-0 top-0 w-[100%] h-[232px] overflow-hidden">
                            <div className="absolute left-0 top-[131px] w-[100%] h-[93px] flex">
                                <div className="absolute left-0 top-0 w-[100%] h-[93px] bg-[#fff]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedicineDetail