import { useState, EventHandler, ReactNode } from 'react'

const RegisterAgree = () => {
    return (<>
        <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
        <div className="absolute left-[461px] top-[645px] w-[133px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
        <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
        <div className="absolute left-[262px] top-[443px] w-[1392px] h-[89px] flex">
            <div className="absolute left-[4px] top-[84px] w-[1388px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-0 top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#0b2d85] rounded-full"></div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 1.</div>
            </div>
            <div className="absolute left-[349px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">본인인증</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 2.</div>
            </div>
            <div className="absolute left-[698px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">회원정보 입력</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 3.</div>
            </div>
            <div className="absolute left-[1047px] top-0 w-[199px] h-[89px] flex">
                <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">회원가입 완료</div>
                <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 4.</div>
            </div>
        </div>
        <div className="absolute left-[460px] top-[710px] w-[1000px] h-[519px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[20px]"></div>
        <div className="absolute left-[485px] top-[843px] w-[949px] text-[16px] leading-[35px] font-['Inter'] font-medium text-[#7d8597]">제 1장 총직<br />제 1조 (목적)<br />이 약관은 '응급NAVI' (이하 '병원')에서 제공하는 인터넷 관련 서비스를 이용함에 있어 병원과 회원의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.<br />제 2조 (약관의 효력과 변경)<br />(1) 이 약관은 서비스를 통하여 이를 공지함으로써 효력이 발생합니다.<br />(2) 병원은 사정상 중요한 사유가 발생될 경우 이 약관을 변경할 수 있으며, 개정 최소 2일전부터 공지할 것이며 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생됩니다.<br />(3) 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.</div>
        <div className="absolute left-[1296px] top-[1899px] w-[205px] h-[27px] text-[18px] font-['Inter'] font-medium text-[#000]">위 내용에 모두 동의함</div>
        <img className="absolute left-[1258px] top-[1902px]" width="18" height="18" src="/img/user/square 199_14.png"></img>
        <div className="absolute left-0 top-0 w-[1920px] h-[161px] overflow-hidden">
        </div>
        <div className="absolute left-[765px] top-[2041px] w-[390px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] text-[#0b2d85] text-center">가입 취소</div>
            </div>
            <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center">다음 단계</div>
            </div>
        </div>
    </>)
}

export default RegisterAgree