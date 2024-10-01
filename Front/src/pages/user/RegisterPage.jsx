import { useState, EventHandler, ReactNode } from 'react'

const RegisterPage = () => {
    return (<>
        <div className="absolute left-[461px] top-[645px] w-[200px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">회원정보 입력</div>
        <div className="absolute left-[1256px] top-[703px] w-[203px] text-[16px] font-['Inter']"><span className="text-[#c2a55d]">*</span><span className="text-[#7d8597]">은 필수 입력 항목입니다.</span></div>
        <div className="absolute left-[748px] top-[965px] w-[506px] text-[17px] font-['Inter'] text-[#7d8597]">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
        <div className="absolute left-[461px] top-[745px] w-[998px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[461px] top-[1838px] w-[998px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[748px] top-[798px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[775px] top-[798px] w-[479px] h-[55px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">아이디(이메일)를 입력해주세요.</div>
        <div className="absolute left-[534px] top-[814px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">아이디 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[748px] top-[1242px] w-[214px] text-[17px] font-['Inter'] text-[#000]">01012345678</div>
        <div className="absolute left-[534px] top-[1242px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">휴대폰번호 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[748px] top-[1323px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[775px] top-[1323px] w-[479px] h-[55px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">이름을 입력해주세요.</div>
        <div className="absolute left-[534px] top-[1339px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">이름</div>
        <div className="absolute left-[927px] top-[1529px] w-[459px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[748px] top-[1597px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[748px] top-[1428px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[45px]"></div>
        <div className="absolute left-[803px] top-[1428px] w-[18px] h-[51px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">남</div>
        <div className="absolute left-[856px] top-[1428px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]"></div>
        <div className="absolute left-[911px] top-[1428px] w-[18px] h-[51px] text-[17px] font-['Inter'] text-[#0b2d85] flex flex-col justify-center">여</div>
        <div className="absolute left-[785px] top-[1739px] w-[48px] h-[33px] text-[17px] font-['Inter'] text-[#000]">수신</div>
        <div className="absolute left-[886px] top-[1739px] w-[49px] h-[33px] text-[17px] font-['Inter'] text-[#000]">거부</div>
        <div className="absolute left-[534px] top-[1442px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">성별</div>
        <div className="absolute left-[748px] top-[1529px] w-[169px] h-[55px] bg-[#fff] border-[2px] border-solid border-[#0b2d85] rounded-[5px]"></div>
        <div className="absolute left-[748px] top-[1529px] w-[169px] h-[58px] text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">우편번호 찾기</div>
        <div className="absolute left-[538px] top-[1547px] w-[210px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">주소</div>
        <div className="absolute left-[534px] top-[1739px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">마케팅활용동의</div>
        <div className="absolute left-[748px] top-[894px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[775px] top-[894px] w-[479px] h-[55px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 입력해주세요.</div>
        <div className="absolute left-[534px] top-[911px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[748px] top-[1127px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[775px] top-[1127px] w-[399px] h-[55px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">응급NAVI88</div>
        <div className="absolute left-[534px] top-[1143px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[748px] top-[1029px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <div className="absolute left-[775px] top-[1029px] w-[479px] h-[55px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 한번 더 입력해주세요.</div>
        <div className="absolute left-[534px] top-[1045px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
        <div className="absolute left-[1264px] top-[798px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[1268px] top-[798px] w-[118px] h-[55px] text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>
        <div className="absolute left-[1264px] top-[1127px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[1268px] top-[1127px] w-[118px] h-[55px] text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>
        <img className="absolute left-[1208px] top-[1143px]" width="24" height="23" src="/img/user/reload 1117_124.png"></img>
        <img className="absolute left-[748px] top-[1738px]" width="24" height="24" src="/img/user/button 1117_127.png"></img>
        <img className="absolute left-[849px] top-[1738px]" width="24" height="24" src="/img/user/rec (1) 1117_135.png"></img>
        <img className="absolute left-[875px] top-[1440px]" width="21" height="27" src="/img/user/check (1)117_493.png"></img>
        <img className="absolute left-[767px] top-[1440px]" width="21" height="27" src="/img/user/check 1117_496.png"></img>
        <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
        <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
        <div className="absolute left-[766px] top-[1908px] w-[387px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">가입 취소</div>
            </div>
            <div className="absolute left-[203px] top-0 w-[184px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">회원가입 완료</div>
            </div>
        </div>
        <div className="absolute left-[262px] top-[443px] w-[1392px] h-[89px] flex">
            <div className="absolute left-[4px] top-[84px] w-[1388px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-0 top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">약관 동의</div>
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 1.</div>
            </div>
            <div className="absolute left-[349px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">본인인증</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 2.</div>
            </div>
            <div className="absolute left-[698px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#0b2d85] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#000]">회원정보 입력</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 3.</div>
            </div>
            <div className="absolute left-[1047px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">회원가입 완료</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 4.</div>
            </div>
        </div>
    </>)
}

export default RegisterPage