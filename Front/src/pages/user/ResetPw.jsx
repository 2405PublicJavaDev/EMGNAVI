import { useState, EventHandler, ReactNode } from 'react'

const ResetPw = () => {
    return (
        <>
            <div className="absolute left-[210px] top-[425px] w-[1500px] h-[616px] bg-[#7d85971a] rounded-[20px]"></div>
            <div className="absolute left-[420px] top-[596px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <div className="absolute left-[420px] top-[940px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-[829px] top-[742px] text-[17px] font-['Inter'] text-[#7d8597] whitespace-nowrap">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
            <div className="absolute left-[569px] top-[683px] w-[182px] h-[29px] text-[22px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[569px] top-[825px] w-[201px] h-[29px] text-[22px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">비밀번호 찾기</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">가입된 아이디(이메일)로 비밀번호를 재설정 하실 수 있습니다.</div>
            <div className="absolute left-[417px] top-[522px] w-[390px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000]">새로운 비밀번호를 입력해주세요.</div>
            <div className="absolute left-[829px] top-[668px] w-[450px] h-[58px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <div className="absolute left-[829px] top-[810px] w-[450px] h-[58px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <div className="absolute left-[862px] top-[668px] w-[489px] h-[58px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 입력해주세요.</div>
            <div className="absolute left-[862px] top-[810px] w-[489px] h-[58px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 한번 더 입력해주세요.</div>
            <div className="absolute left-[765px] top-[1151px] w-[390px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] text-[#0b2d85] text-center">메인으로 가기</div>
                </div>
                <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center">로그인하러 가기</div>
                </div>
            </div>
            <div className="absolute left-0 top-[1369px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
                <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                    <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                    <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png"></img>
                </div>
                <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png"></img>
                <div className="absolute left-[404px] top-[137px] w-[621px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">2024 응급NAVI.</div>
                <div className="absolute left-[390px] top-[62px] w-[742px] h-[90px] flex">
                    <div className="absolute left-0 top-[54px] w-[742px] h-[36px] flex">
                        <div className="absolute left-0 top-0 w-[742px] h-[16px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-997<br /></div>
                        <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/copyright.png"></img>
                    </div>
                    <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                </div>
            </div>
        </>)
}

export default ResetPw