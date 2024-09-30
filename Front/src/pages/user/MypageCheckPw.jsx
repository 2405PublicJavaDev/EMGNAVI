import { useState, EventHandler, ReactNode } from 'react'

const MypageCheckPw = () => {
    return (<div className="relative w-[1920px] h-[1178px] bg-[#fff] overflow-hidden">
        <div className="absolute left-0 top-[124px] w-[1920px] h-[209px] bg-[#0b2d85]"></div>
        <div className="absolute left-[230px] top-[261px] w-[1460px] h-[525px] bg-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[937px] top-[964px] text-[24px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">확인</div>
        <div className="absolute left-[235px] top-[190px] w-[149px] h-[57px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">내정보 관리</div>
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
                            <div className="absolute left-[1778px] top-0 w-[87px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">로그아웃</div>
                            <div className="absolute left-[1773px] top-0 w-[5px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                            <div className="absolute left-[1662px] top-0 w-[111px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">마이페이지</div>
                            <div className="absolute left-0 top-0 w-[1662px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[857px] top-0 w-[207px] h-[155px] flex">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/user/bg.png"></img>
                    <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/user/line.png"></img>
                    <div className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                        <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                        <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/user/file.png"></img>
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
        <div className="absolute left-[868px] top-[814px] w-[184px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
            <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center">확인</div>
        </div>
        <div className="absolute left-0 top-[946px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
            <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
            </div>
            <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group.png"></img>
            <div className="absolute left-[404px] top-[137px] w-[621px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">2024 응급NAVI.</div>
            <div className="absolute left-[390px] top-[62px] w-[742px] h-[90px] flex">
                <div className="absolute left-0 top-[54px] w-[742px] h-[36px] flex">
                    <div className="absolute left-0 top-0 w-[742px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-997<br /></div>
                    <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright.png"></img>
                </div>
                <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
            </div>
        </div>
        <div className="absolute left-[420px] top-[413px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[420px] top-[723px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[569px] top-[500px] w-[182px] h-[29px] text-[22px] font-['Inter'] font-medium text-[#000]">아이디</div>
        <div className="absolute left-[569px] top-[608px] w-[201px] h-[29px] text-[22px] font-['Inter'] font-medium text-[#000]">비밀번호</div>
        <div className="absolute left-0 top-[339px] w-[1920px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">개인정보 보호를 위해 비밀번호를 다시 한번 입력해주세요.</div>
        <div className="absolute left-[829px] top-[593px] w-[450px] h-[58px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[829px] top-[485px] w-[450px] h-[58px] text-[17px] font-['Inter'] font-light text-[#000] flex flex-col justify-center">example@naver.com</div>
        <div className="absolute left-[862px] top-[593px] w-[385px] h-[58px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 입력해주세요.</div>
    </div>)
}

export default MypageCheckPw