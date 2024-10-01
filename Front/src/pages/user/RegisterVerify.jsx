import { useState, EventHandler, ReactNode } from 'react'
import PhoneVerificationModal from './PhoneVerificationModal';

const RegisterVerify = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="absolute left-[265px] top-[710px] w-[1390px] h-[466px] bg-[#7d85971a] rounded-[20px]"></div>
            <img className="absolute left-[920px] top-[814px]" width="69" height="69" src="/img/user/smartphone 1101_3.png"></img>
            <div className="absolute left-[243px] top-[946px] w-[1435px] h-[30px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
            <img className="absolute left-[966px] top-[839px]" width="34" height="35" src="/img/user/checked (1) 1107_6.png"></img>
            <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
            <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
            <div className="absolute left-[868px] top-[1041px] w-[184px] h-[60px] flex">
                <button onClick={openModal}
                    className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"
                >
                    <span className="text-[16px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">인증하기</span>
                </button>
            </div>
            <div className="absolute left-[243px] top-[645px] w-[102px] h-[29px] text-[24px] font-['Inter'] font-semibold text-[#000]">본인인증</div>
            <div className="absolute left-[262px] top-[443px] w-[1392px] h-[89px] flex">
                <div className="absolute left-[4px] top-[84px] w-[1388px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
                <div className="absolute left-0 top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">약관 동의</div>
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 1.</div>
                </div>
                <div className="absolute left-[349px] top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#0b2d85] rounded-full"></div>
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#000]">본인인증</div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 2.</div>
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
        </div >

            { isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeModal}></div>
                    <PhoneVerificationModal onClose={closeModal} />
                </>
            )
}
        </>
    )
}

export default RegisterVerify