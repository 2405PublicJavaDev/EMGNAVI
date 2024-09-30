import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterComplete = () => {
    const nav = useNavigate();
    const handlerGoLogin = () => {
        nav("/user/login");
    }

    return (<div className="relative w-[1920px] h-[1976px] bg-[#fff] overflow-hidden">
        <div className="absolute left-0 top-[1159px] w-[1919px] h-[47px] text-[26px] font-['Inter'] font-semibold text-center"><span className="text-[#0b2d85]">응급NAVI88</span><span className="text-[#000]"> 님, 환영합니다.</span></div>
        <div className="absolute left-0 top-[1224px] w-[1919px] h-[77px] text-[16px] leading-[150%] font-['Inter'] text-[#000] text-center">회원가입이 완료되었습니다.<br />응급NAVI 홈페이지에 가입해주셔서 감사합니다.</div>
        <div className="absolute left-[1017px] top-[1395px] text-[24px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">로그인하러 가기</div>
        <div className="absolute left-0 top-[1744px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
            <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
            </div>
            <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                    <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                    <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright (1) 1150_88.png"></img>
                </div>
                <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
            </div>
            <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group 17150_90.png"></img>
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
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/user/bg279_210.png"></img>
                    <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/user/line279_211.png"></img>
                    <div className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                        <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                        <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/user/file 1279_214.png"></img>
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
        <div className="absolute left-[766px] top-[1482px] w-[184px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
            <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">메인으로 가기</div>
        </div>
        <div className="absolute left-[969px] top-[1482px] w-[184px] h-[60px] flex">
            <button onClick={handlerGoLogin} className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                <span className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">로그인하러 가기</span>
            </button></div>
        <img className="absolute left-[917px] top-[1017px]" width="56" height="64" src="/img/user/user (1) 1324_217.png"></img>
        <img className="absolute left-[966px] top-[1026px]" width="36" height="36" src="/img/user/checked (1) 2324_219.png"></img>
        <div className="absolute left-[243px] top-[929px] w-[1435px] h-[466px] bg-[#7d85971a] rounded-[20px]"></div>
    </div>)
}

export default RegisterComplete
