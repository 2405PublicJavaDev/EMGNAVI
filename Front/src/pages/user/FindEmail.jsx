import { useState, EventHandler, ReactNode } from 'react'
import PhoneVerificationModal from './PhoneVerificationModal';
import { useNavigate } from 'react-router-dom';

const FindEmail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const nav = useNavigate();
    const handlerGoMain = () => {
        nav("/");
    };

    const handlerGoLogin = () => {
        nav("/user/login");
    };
        
    return (
        <>
            <div className="absolute left-[210px] top-[425px] w-[1500px] h-[466px] bg-[#7d85971a] rounded-[20px]"></div>
            <img className="absolute left-[918px] top-[548px]" width="72" height="72" src="/img/user/smartphone 2177_1385.png"></img>
            <img className="absolute left-[965px] top-[574px]" width="37" height="37" src="/img/user/checked (1) 2324_219.png"></img>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">아이디 찾기</div>
            <div className="absolute left-0 top-[667px] w-[1920px] h-[51px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">휴대폰 본인인증으로 아이디를 찾으실 수 있습니다.</div>
            <button
                onClick={openModal}
                className="absolute left-[862px] top-[748px] w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">인증하기</span>
            </button>
            <div className="absolute left-[765px] top-[978px] w-[390px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <button 
                        onClick={handlerGoMain}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center">메인으로 가기</span>
                    </button>
                </div>
                <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                    <button 
                        onClick={handlerGoLogin}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                    <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">로그인하러 가기</span>
                    </button>
                </div>
            </div>
            <div className="absolute left-0 top-[1355px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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

            {isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeModal}></div>
                    <PhoneVerificationModal onClose={closeModal} />
                </>
            )}
        </>
    )
}

export default FindEmail