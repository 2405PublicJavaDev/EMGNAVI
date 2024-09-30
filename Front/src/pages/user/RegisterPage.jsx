import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const nav = useNavigate();
    const handlerComplete = () => {
        nav("/user/register/complete")
    }
    return (<div className="relative w-[1920px] h-[3086px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[347px] top-[844px] w-[200px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">회원정보 입력</div>
        <div className="absolute left-[1310px] top-[908px] text-[24px] font-['Inter'] whitespace-nowrap"><span className="text-[#c2a55d]">*</span><span className="text-[#7d8597]">은 필수 입력 항목입니다.</span></div>
        <div className="absolute left-[683px] top-[1312px] text-[22px] font-['Inter'] text-[#7d8597] whitespace-nowrap">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
        <div className="absolute left-[350px] top-[988px] w-[1220px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[350px] top-[2464px] w-[1220px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[683px] top-[1086px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder="아이디(이메일)를 입력해주세요." className="absolute left-[716px] top-[1087px] w-[550px] h-[65px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0" />
        <div className="absolute left-[423px] top-[1102px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium"><span className="text-[#000]">아이디 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[716px] top-[1696px] text-[24px] font-['Inter'] text-[#000] whitespace-nowrap">01012345678</div>
        <div className="absolute left-[423px] top-[1692px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium"><span className="text-[#000]">휴대폰번호 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[683px] top-[1817px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder="이름을 입력해주세요." className="absolute left-[716px] top-[1818px] w-[550px] h-[65px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0" />
        <div className="absolute left-[423px] top-[1833px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium text-[#000]">이름</div>
        <div className="absolute left-[916px] top-[2099px] w-[387px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[683px] top-[2192px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[683px] top-[1958px] w-[118px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[45px]"></div>
        <div className="absolute left-[751px] top-[1958px] w-[23px] h-[67px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">남</div>
        <div className="absolute left-[815px] top-[1958px] w-[118px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]"></div>
        <div className="absolute left-[883px] top-[1958px] w-[23px] h-[67px] text-[24px] font-['Inter'] text-[#0b2d85] flex flex-col justify-center">여</div>
        <div className="absolute left-[729px] top-[2333px] w-[45px] h-[33px] text-[24px] font-['Inter'] text-[#000] flex flex-col justify-center">수신</div>
        <div className="absolute left-[874px] top-[2333px] w-[45px] h-[33px] text-[24px] font-['Inter'] text-[#000] flex flex-col justify-center">거부</div>
        <div className="absolute left-[423px] top-[1974px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium text-[#000]">성별</div>
        <div className="absolute left-[683px] top-[2099px] w-[207px] h-[67px] bg-[#fff] border-[2px] border-solid border-[#0b2d85] rounded-[5px]"></div>
        <div className="absolute left-[683px] top-[2101px] w-[207px] h-[65px] text-[24px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">우편번호 찾기</div>
        <div className="absolute left-[423px] top-[2115px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium text-[#000]">주소</div>
        <div className="absolute left-[423px] top-[2333px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium text-[#000]">마케팅활용동의</div>
        <div className="absolute left-[683px] top-[1227px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder="비밀번호를 입력해주세요." className="absolute left-[716px] top-[1228px] w-[550px] h-[65px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0" />
        <div className="absolute left-[423px] top-[1243px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[683px] top-[1535px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder="응급NAVI88" className="absolute left-[716px] top-[1536px] w-[550px] h-[65px] text-[24px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0" />
        <div className="absolute left-[423px] top-[1551px] w-[182px] h-[47px] text-[24px] font-['Inter'] font-medium"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[683px] top-[1394px] w-[620px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder="비밀번호를 한번 더 입력해주세요." className="absolute left-[716px] top-[1395px] w-[550px] h-[65px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0" />
        <div className="absolute left-[423px] top-[1410px] w-[201px] h-[47px] text-[24px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[1333px] top-[1086px] w-[163px] h-[67px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[1333px] top-[1086px] w-[163px] h-[67px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>
        <div className="absolute left-[1333px] top-[1535px] w-[163px] h-[67px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[1333px] top-[1535px] w-[163px] h-[67px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>
        <img className="absolute left-[1238px] top-[1551px]" width="36" height="36" src="/img/user/reload 1117_124.png"></img>
        <img className="absolute left-[683px] top-[2333px]" width="33" height="33" src="/img/user/button 1117_127.png"></img>
        <img className="absolute left-[828px] top-[2333px]" width="33" height="33" src="/img/user/rec (1) 1117_135.png"></img>
        <img className="absolute left-[839px] top-[1976px]" width="26" height="31" src="/img/user/check (1)117_493.png"></img>
        <img className="absolute left-[707px] top-[1976px]" width="31" height="31" src="/img/user/check 1117_496.png"></img>
        <div className="absolute left-0 top-[2859px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
            <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
            </div>
            <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                    <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                    <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright (1) 1150_102.png"></img>
                </div>
                <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
            </div>
            <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group 17150_104.png"></img>
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
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/user/bg279_183.png"></img>
                    <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/user/line279_184.png"></img>
                    <div className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                        <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                        <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/user/file 1279_187.png"></img>
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
        <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
        <div className="absolute left-[235px] top-[591px] w-[133px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">약관 동의</div>
        <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
        <div className="absolute left-[249px] top-[671px] w-[1421px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[235px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
        <div className="absolute left-[601px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
        <div className="absolute left-[967px] top-[664px] w-[14px] h-[14px] bg-[#0b2d85] rounded-full"></div>
        <div className="absolute left-[1333px] top-[664px] w-[14px] h-[14px] bg-[#7d8597] rounded-full"></div>
        <div className="absolute left-[235px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 1.</div>
        <div className="absolute left-[601px] top-[591px] w-[133px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">본인인증</div>
        <div className="absolute left-[601px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 2.</div>
        <div className="absolute left-[967px] top-[591px] w-[199px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#000]">회원정보 입력</div>
        <div className="absolute left-[967px] top-[544px] text-[20px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 3.</div>
        <div className="absolute left-[1333px] top-[591px] w-[199px] h-[47px] text-[20px] font-['Inter'] font-semibold text-[#7d8597]">회원가입 완료</div>
        <div className="absolute left-[1333px] top-[544px] text-[20px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 4.</div>
        <div className="absolute left-[766px] top-[2610px] w-[184px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
            <div className="absolute left-[60px] top-[20px] text-[16px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">가입 취소</div>
        </div>
        <div className="absolute left-[969px] top-[2610px] w-[184px] h-[60px] flex">
            <button onClick={handlerComplete} className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                <span className="absolute left-[45px] top-[20px] text-[16px] font-['Inter'] font-bold text-[#fff] whitespace-nowrap">회원가입 완료</span>
            </button>
        </div>
    </div>)
}

export default RegisterPage