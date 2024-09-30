import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterAgree = () => {
    const nav = useNavigate();
    const handlerGoVerify = () => {
        nav("/user/register/verify");
    }

    return (
        <>
            <div className="relative w-[1920px] h-[2731px] bg-[#fff] overflow-hidden">
                <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
                <div className="absolute left-[235px] top-[591px] w-[133px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
                <div className="absolute left-[347px] top-[844px] w-[133px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
                <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
                <div className="absolute left-[249px] top-[671px] w-[1421px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
                <div className="absolute left-[235px] top-[664px] w-[14px] h-[14px] bg-[#0b2d85] rounded-full"></div>
                <div className="absolute left-[601px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-[967px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-[1333px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-[235px] top-[544px] text-[20px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 1.</div>
                <div className="absolute left-[601px] top-[591px] w-[133px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">본인인증</div>
                <div className="absolute left-[601px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 2.</div>
                <div className="absolute left-[967px] top-[591px] w-[199px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">회원정보 입력</div>
                <div className="absolute left-[967px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 3.</div>
                <div className="absolute left-[1333px] top-[591px] w-[199px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">회원가입 완료</div>
                <div className="absolute left-[1333px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 4.</div>
                <div className="absolute left-[350px] top-[909px] w-[1220px] h-[519px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[20px]"></div>
                <div className="absolute left-[383px] top-[1040px] w-[1165px] text-[16px] leading-[30px] font-['Inter'] font-medium text-[#7d8597]">제 1장 총직<br />제 1조 (목적)<br />이 약관은 '응급NAVI' (이하 '병원')에서 제공하는 인터넷 관련 서비스를 이용함에 있어 병원과 회원의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.<br />제 2조 (약관의 효력과 변경)<br />(1) 이 약관은 서비스를 통하여 이를 공지함으로써 효력이 발생합니다.<br />(2) 병원은 사정상 중요한 사유가 발생될 경우 이 약관을 변경할 수 있으며, 개정 최소 2일전부터 공지할 것이며 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생됩니다.<br />(3) 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.<br />제3조 (약관 규정 외 사항에 관한 준칙)<br />본 약관에 규정되지 않은 사항에 대해서는 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 등 관계 법령에 규정을 따르게 됩니다.<br />제4조 (용어의 정의)일부터 시행합니다.</div>
                <div className="absolute left-[1320px] top-[2098px] w-[193px] h-[27px] text-[20px] font-['Inter'] font-medium text-[#000]">위 내용에 모두 동의함</div>
                <img className="absolute left-[1276px] top-[2102px]" width="20" height="20" src="/img/user/square 199_14.png"></img>
                <div className="absolute left-0 top-[2505px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
                    <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                        <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                        <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
                    </div>
                    <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                        <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                            <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                            <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright (1) 1145_1156.png"></img>
                        </div>
                        <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                    </div>
                    <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group 17145_1158.png"></img>
                </div>
                <div className="absolute left-0 top-0 w-[1920px] h-[161px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[1920px] h-[155px] flex">
                        <div className="absolute left-0 top-[31px] w-[1920px] h-[93px] flex">
                            <div className="absolute left-0 top-0 w-[1920px] h-[93px] bg-[#fff]"></div>
                        </div>
                        <div className="absolute left-0 top-0 w-[1920px] h-[31px] flex">
                            <div className="absolute left-0 top-0 w-[1920px] h-[31px] flex">
                                <div className="absolute left-0 top-0 w-[1920px] h-[31px] bg-[#0b2d85]"></div>
                                <div className="absolute left-0 top-[4px] w-[1920px] h-[27px] flex">
                                    <div className="absolute left-[1865px] top-0 w-[55px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                    <div className="absolute left-[1778px] top-0 w-[87px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">회원가입</div>
                                    <div className="absolute left-[1773px] top-0 w-[5px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                    <div className="absolute left-[1697px] top-0 w-[76px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">로그인</div>
                                    <div className="absolute left-0 top-0 w-[1697px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-[857px] top-0 w-[207px] h-[155px] flex">
                            <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/user/bg279_102.png"></img>
                            <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/user/line279_103.png"></img>
                            <div className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                                <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                                <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/user/file 1279_106.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-[264px] top-[60px] w-[1393px] h-[23px] flex">
                        <div className="absolute left-[401px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap">주변약국</div>
                        <div className="absolute left-[208px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap">주변병원</div>
                        <div className="absolute left-[869px] top-0 w-[147px] text-[16px] font-['Jost'] font-bold text-[#000]">자동제세동기(AED)</div>
                        <div className="absolute left-[1136px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap">이용안내</div>
                        <div className="absolute left-[1329px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap"> 공지사항</div>
                        <div className="absolute left-0 top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap">주변응급실</div>
                    </div>
                </div>
                <div className="absolute left-[776px] top-[2313px] w-[390px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                        <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                        <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] text-[#0b2d85] text-center">가입 취소</div>
                    </div>
                    <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                        {/* <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center">다음 단계</div> */}
                    </div>
                </div>
                <div className="absolute left-[351px] top-[910px] w-[1218px] h-[103px] bg-[#f5f7f9] rounded-tl-[19px] rounded-tr-[19px] rounded-br-0 rounded-bl-0"></div>
                <div className="absolute left-[350px] top-[950px] w-[1150px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000] text-right">동의합니다.</div>
                <img className="absolute left-[1368px] top-[953px]" width="23" height="23" src="/img/user/check-mark (1) 1297_30.png"></img>
                <div className="absolute left-[389px] top-[949px] w-[135px] h-[25px] text-[20px] font-['Inter'] font-semibold"><span className="text-[#000]">이용약관</span><span className="text-[#c2a55d]"> (필수)</span></div>
                <div className="absolute left-[350px] top-[1489px] w-[1220px] h-[519px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[20px]"></div>
                <div className="absolute left-[383px] top-[1620px] w-[1165px] text-[16px] leading-[30px] font-['Inter'] font-medium text-[#7d8597]">응급NAVI (이하 병원 이라 함)은 귀하의 개인정보보호를 매우 중요시하며, 『개인정보보호법』 을 준수하고 있습니다 병원은 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br />이 개인정보처리방침의 순서는 다음과 같습니다.<br />1. 수집하는 개인정보의 항목 및 수집방법<br />2. 개인정보의 수집 및 이용목적<br />3. 개인정보의 보유 및 이용기간 및 파기절차 및 파기방법<br />4. 이용자 및 법정대리인의 권리와 그 행사방법<br />5. 개인정보의 제공 및 공유<br />6. 개인정보의 위탁<br />7. 개인정보 보호책임자<br />8. 개인정보의 안전성 확보조치<br />9. 정책 변경에 따른 공지의무</div>
                <div className="absolute left-[351px] top-[1490px] w-[1218px] h-[103px] bg-[#f5f7f9] rounded-tl-[19px] rounded-tr-[19px] rounded-br-0 rounded-bl-0"></div>
                <div className="absolute left-[350px] top-[1530px] w-[1150px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000] text-right">동의합니다.</div>
                <img className="absolute left-[1368px] top-[1533px]" width="23" height="23" src="/img/user/check-mark (1) 1290_3.png"></img>
                <div className="absolute left-[389px] top-[1529px] w-[241px] h-[25px] text-[20px] font-['Inter'] font-semibold"><span className="text-[#000]">개인정보 수집 및 이용</span><span className="text-[#c2a55d]"> (필수)</span></div>
            </div>
            <button 
                onClick={handlerGoVerify}
                className="absolute left-[980px] top-[2313px] w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"
            >
            <span className="text-[16px] font-['Inter'] font-bold text-[#fff]">다음 단계</span>
            </button>
        </>)
}

export default RegisterAgree