import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const PhoneVerificationModal = ({ onClose }) => {
    const nav = useNavigate();
    const handlerGoNext = () => {
        nav("/user/register/page")
    }

    return (
        <>
            <div className="w-[983px] h-[1066px] fixed top-0 left-0px right-0 bottom-0 flex items-center justify-center z-50">
                <div className="absolute left-0 top-0 w-[983px] h-[1066px] bg-[#fff] rounded-[40px]"></div>
                <div className="absolute left-[447px] top-[483px] w-[297px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                <input type="text" className="absolute left-[319px] top-[598px] w-[425px] h-[67px] bg-[#fff] text-[24px] font-['Inter'] text-[#000] border-[1px] border-solid border-[#7d8597] rounded-[5px] pl-6"></input>
                <div className="absolute left-[319px] top-[483px] w-[117px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                <div className="absolute left-[764px] top-[483px] w-[117px] h-[67px] bg-[#7d8597] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
                <input type="text" placeholder="12345678" className="absolute left-[470px] top-[484px] w-[253px] h-[65px] text-[24px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0" />
                <img className="absolute left-[398px] top-[505px]" width="24" height="24" src="/img/user/show-more-button (1)313_129.png"></img>
                <div className="absolute left-[346px] top-[483px] w-[47px] h-[67px] text-[24px] font-['Inter'] text-[#000] flex flex-col justify-center">010</div>
                <div className="absolute left-0 top-[138px] w-[979px] h-[47px] text-[32px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
                <div className="absolute left-[96px] top-[304px] w-[241px] h-[47px] text-[30px] font-['Inter'] font-semibold text-[#000]">본인인증 정보 입력</div>
                <div className="absolute left-[96px] top-[493px] w-[157px] h-[47px] text-[30px] font-['Inter'] font-medium text-[#000]">휴대폰 번호</div>
                <div className="absolute left-[96px] top-[614px] w-[180px] h-[47px] text-[30px] font-['Inter'] font-medium text-[#000]">인증번호 입력</div>
                <div className="absolute left-[95px] top-[382px] w-[793px] h-0 border-[1px] border-solid border-[#000]"></div>
                <div className="absolute left-[764px] top-[502px] w-[116px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center">전송</div>
                <div className="absolute left-[764px] top-[598px] w-[117px] h-[67px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
                <div className="absolute left-[764px] top-[617px] w-[116px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center">확인</div>
                <div className="absolute left-[287px] top-[897px] w-[184px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-[77px] top-[20px] text-[16px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">닫기</div>
                </div>
                <div className="absolute left-[490px] top-[897px] w-[184px] h-[60px] flex">
                    <button onClick={handlerGoNext} className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                    <span className="absolute left-[77px] top-[20px] text-[16px] font-['Inter'] font-bold text-[#fff] whitespace-nowrap">다음</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PhoneVerificationModal