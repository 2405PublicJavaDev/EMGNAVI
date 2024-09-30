import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const PhoneVerificationModal = ({ onClose }) => {
    const nav = useNavigate();
    const handlerGoNext = () => {
        nav("/user/register/page")
    }

    return (
        <>
            <div className="w-[1920px] h-[1243px] fixed top-0 left-0px right-0 bottom-0 flex items-center justify-center z-50">
                <div className="relative w-[600px] h-[935px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[600px] h-[670px] flex">
                        <div className="absolute left-0 top-0 w-[600px] h-[670px] bg-[#fff] rounded-[40px]"></div>
                        <div className="absolute left-[273px] top-[304px] w-[181px] h-[36px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[195px] top-[363px] w-[259px] h-[36px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[195px] top-[304px] w-[71px] h-[36px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[466px] top-[304px] w-[71px] h-[36px] bg-[#7d8597] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
                        <div className="absolute left-[288px] top-[304px] w-[112px] h-[36px] text-[15px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">12345678</div>
                        <img className="absolute left-[243px] top-[314px]" width="14" height="15" src="show-more-button (1)335_1812.png"></img>
                        <div className="absolute left-[195px] top-[304px] w-[57px] h-[36px] text-[15px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">010</div>
                        <div className="absolute left-[1px] top-[87px] w-[599px] h-[30px] text-[32px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
                        <div className="absolute left-[59px] top-[205px] w-[147px] h-[30px] text-[17px] font-['Inter'] font-bold text-[#000]">본인인증 정보 입력</div>
                        <div className="absolute left-[59px] top-[310px] w-[96px] h-[30px] text-[16px] font-['Inter'] font-semibold text-[#000]">휴대폰 번호</div>
                        <div className="absolute left-[59px] top-[370px] w-[110px] h-[30px] text-[16px] font-['Inter'] font-semibold text-[#000]">인증번호 입력</div>
                        <div className="absolute left-[59px] top-[240px] w-[483px] h-0 border-[1px] border-solid border-[#000]"></div>
                        <div className="absolute left-[466px] top-[304px] w-[71px] h-[36px] text-[15px] font-['Inter'] text-[#fff] text-center flex flex-col justify-center">전송</div>
                        <div className="absolute left-[466px] top-[363px] w-[71px] h-[36px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
                        <div className="absolute left-[466px] top-[363px] w-[71px] h-[36px] text-[15px] font-['Inter'] text-[#fff] text-center flex flex-col justify-center">확인</div>
                    </div>
                    <div className="absolute left-[168px] top-[569px] w-[266px] h-[41px] flex">
                        <div className="absolute left-0 top-0 w-[126px] h-[41px] flex">
                            <div className="absolute left-0 top-0 w-[126px] h-[41px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-0 top-[0px] w-[126px] h-[41px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">닫기</div>
                        </div>
                        <div className="absolute left-[140px] top-0 w-[126px] h-[41px] flex">
                            <div className="absolute left-0 top-0 w-[126px] h-[41px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-[0px] top-[0px] w-[126px] h-[41px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">다음</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhoneVerificationModal