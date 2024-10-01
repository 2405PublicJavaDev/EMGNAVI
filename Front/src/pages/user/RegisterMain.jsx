import { useState, EventHandler, ReactNode } from 'react'

const RegisterMain = () => {
    return (<>
        <div className="absolute left-0 top-[161px] w-[1920px] h-[908px]">
            <div className="absolute left-0 top-0 w-[1920px] h-[908px] bg-[#fff]"></div>
            <div className="absolute left-[210px] top-[264px] w-[1500px] h-[466px] bg-[#7d85971a] rounded-[20px]"></div>
            <div className="absolute left-0 top-[84px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">회원가입</div>
            <div className="absolute left-0 top-[477px] w-[1920px] h-[51px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">일반 회원가입</div>
            <div className="absolute left-0 top-[163px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 유형을 선택해주세요.</div>
            <div className="absolute left-0 top-[528px] w-[1920px] text-[16px] font-['Inter'] text-[#000] text-center">대한민국 국적의 일반인</div>
            <img className="absolute left-[932px] top-[350px]" width="56" height="64" src="/img/user/user.png"></img>
            <div className="absolute left-[868px] top-[607px] w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
            <div className="absolute left-[930px] top-[627px] text-[16px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">가입하기</div>
        </div>
    </>)
}

export default RegisterMain