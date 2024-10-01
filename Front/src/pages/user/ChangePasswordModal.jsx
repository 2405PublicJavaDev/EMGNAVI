import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePasswordModal = ({ onClose }) => {
    const nav = useNavigate();
    const handlerGoNext = () => {
        nav("/user/mypage/modify")
    }

    return (
        <>
            <div className="w-[1920px] h-[1243px] fixed top-0 left-0px right-0 bottom-0 flex items-center justify-center z-50">
                <div className="relative w-[600px] h-[935px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[600px] h-[670px] bg-[#fff] rounded-[40px]"></div>
                    <div className="absolute left-[73px] top-[194px] w-[453px] h-[75px] flex">
                        <div className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[24px] top-[31px] w-[429px] h-[44px] text-[16px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">현재 비밀번호를 입력해주세요.</div>
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">현재 비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
                    </div>
                    <div className="absolute left-[73px] top-[438px] w-[453px] h-[75px] flex">
                        <div className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[24px] top-[31px] w-[429px] h-[44px] text-[16px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">비밀번호를 한번 더 입력해주세요.</div>
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">새로운 비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
                    </div>
                    <div className="absolute left-[73px] top-[304px] w-[453px] h-[105px] flex">
                        <div className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <div className="absolute left-[24px] top-[31px] w-[429px] h-[44px] text-[16px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">새로운 비밀번호를 입력해주세요.</div>
                        <div className="absolute left-[5px] top-[88px] w-[438px] h-[17px] text-[14px] font-['Inter'] text-[#7d8597]">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">새로운 비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
                    </div>
                    <div className="absolute left-[436px] top-[1025px] text-[30px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">변경하기</div>
                    <div className="absolute left-[298px] top-[973px] w-[387px] h-[60px] flex">
                        <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">닫기</div>
                        </div>
                        <div className="absolute left-[203px] top-0 w-[184px] h-[60px] flex">
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">다음</div>
                        </div>
                    </div>
                    <div className="absolute left-[1px] top-[87px] w-[599px] h-[30px] text-[32px] font-['Inter'] font-semibold text-[#000] text-center">비밀번호 변경</div>
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

export default ChangePasswordModal