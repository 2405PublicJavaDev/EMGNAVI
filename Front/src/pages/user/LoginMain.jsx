import { useState, EventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const LoginMain = () => {
    return (<div className="relative w-[1920px] h-[1853px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[137px] top-[407px] w-[1646px] h-[993px] bg-[#7d85971a] rounded-[20px]"></div>
        <div className="absolute left-[803px] top-[857px] w-[318px] h-[23px] flex">
            <Link to="/user/register" className="absolute left-0 top-0 w-[77px] text-[19px] font-['Inter'] text-[#7d8597]">회원가입</Link>
            <div className="absolute left-[77px] top-0 w-[6px] text-[19px] font-['Inter'] text-[#7d8597]">|</div>
            <div className="absolute left-[188px] top-0 w-[6px] text-[19px] font-['Inter'] text-[#7d8597]">|</div>
            <Link to="/user/findEmail" className="absolute left-[83px] top-0 w-[105px] text-[19px] font-['Inter'] text-[#7d8597] text-center">아이디 찾기</Link>
            <Link to="/user/register" className="absolute left-[194px] top-0 w-[124px] text-[19px] font-['Inter'] text-[#7d8597] text-center">비밀번호 찾기</Link>
        </div>
        <div className="absolute left-0 top-[472px] w-[1920px] text-[32px] font-['Istok_Web'] font-bold text-[#0b2d85] text-center">응급NAVI</div>
        <div className="absolute left-[670px] top-[564px] w-[581px] h-[73px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input type="text" placeholder='아이디(이메일)를 입력해주세요.' className="absolute left-[782px] top-[565px] w-[370px] h-[71px] text-[20px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>
        <img className="absolute left-[702px] top-[585px]" width="30" height="30" src="/img/user/user 185_14.png"></img>
        <div className="absolute left-[670px] top-[656px] w-[581px] h-[73px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[670px] top-[748px] w-[581px] h-[73px] flex">
            <div className="absolute left-0 top-0 w-[581px] h-[73px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
            <div className="absolute left-0 top-0 w-[581px] h-[73px] text-[22px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">로그인</div>
        </div>
        <div className="absolute left-[670px] top-[1007px] w-[581px] h-[73px] flex">
            <div className="absolute left-0 top-0 w-[581px] h-[73px] bg-[#2db400] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
            <div className="absolute left-0 top-0 w-[581px] h-[73px] text-[22px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">네이버 로그인</div>
        </div>
        <div className="absolute left-[670px] top-[1099px] w-[581px] h-[73px] flex">
            <div className="absolute left-0 top-0 w-[581px] h-[73px] bg-[#ffe100] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
            <div className="absolute left-0 top-0 w-[581px] h-[73px] text-[22px] font-['Inter'] font-medium text-[#000] text-center flex flex-col justify-center">카카오톡 로그인</div>
        </div>
        <div className="absolute left-[670px] top-[1191px] w-[581px] h-[73px] flex">
            <div className="absolute left-0 top-0 w-[581px] h-[73px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <div className="absolute left-0 top-0 w-[581px] h-[73px] text-[22px] font-['Inter'] text-[#686868] text-center flex flex-col justify-center">구글 로그인</div>
        </div>
        <input type="text" placeholder='비밀번호를 입력해주세요.' className="absolute left-[782px] top-[657px] w-[370px] h-[71px] text-[20px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>
        <img className="absolute left-[701px] top-[676px]" width="32" height="32" src="/img/user/padlock (1) 186_6.png"></img>
        <div className="absolute left-[670px] top-[943px] w-[195px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[1056px] top-[943px] w-[195px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[892px] top-[931px] text-[19px] font-['Inter'] font-semibold text-[#7d8597] whitespace-nowrap">SNS 간편 로그인</div>
        <img className="absolute left-[704px] top-[1032px]" width="27" height="24" src="/img/user/n 186_30.png"></img>
        <img className="absolute left-[698px] top-[1118px]" width="38" height="35" src="/img/user/kakaotalk.png"></img>
        <img className="absolute left-[703px] top-[1214px]" width="28" height="28" src="/img/user/search (1) 186_36.png"></img>
        <div className="absolute left-0 top-[1621px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
            <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
            </div>
            <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                    <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                    <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright (1) 1145_1184.png"></img>
                </div>
                <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
            </div>
            <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group 17145_1186.png"></img>
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
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/user/bg279_237.png"></img>
                    <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/user/line279_238.png"></img>
                    <div className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                        <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                        <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/user/file 1279_241.png"></img>
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
        <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">로그인</div>
        <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">응급NAVI 홈페이지에 방문해주신 여러분 진심으로 환영합니다.</div>
    </div>)
}

export default LoginMain