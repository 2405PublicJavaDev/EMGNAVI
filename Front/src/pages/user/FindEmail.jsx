import { useState, EventHandler, ReactNode } from 'react'
import PhoneVerificationModal from './PhoneVerificationModal';

const FindEmail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative w-[1920px] h-[1505px] bg-[#fff] overflow-hidden">
                <div className="relative w-[1920px] h-[1587px] bg-[#fff] overflow-hidden">
                    <div className="absolute left-[210px] top-[425px] w-[1500px] h-[466px] bg-[#7d85971a] rounded-[20px]"></div>
                    <img className="absolute left-[918px] top-[548px]" width="72" height="72" src="/img/user/smartphone 2177_1385.png"></img>
                    <img className="absolute left-[965px] top-[574px]" width="37" height="37" src="/img/user/checked (1) 2177_1386.png"></img>
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
                                        <div className="absolute left-[1778px] top-0 w-[87px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">회원가입</div>
                                        <div className="absolute left-[1773px] top-0 w-[5px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                        <div className="absolute left-[1697px] top-0 w-[76px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">로그인</div>
                                        <div className="absolute left-0 top-0 w-[1697px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
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
                    <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">아이디 찾기</div>
                    <div className="absolute left-0 top-[667px] w-[1920px] h-[51px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
                    <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">휴대폰 본인인증으로 아이디를 찾으실 수 있습니다.</div>
                    <div className="absolute left-[862px] top-[748px] w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-[862px] top-[748px] w-[184px] h-[60px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">인증하기</div>
                    <div className="absolute left-[765px] top-[978px] w-[390px] h-[60px] flex">
                        <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] text-[#0b2d85] text-center">메인으로 가기</div>
                        </div>
                        <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                            <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                            <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center">로그인하러 가기</div>
                        </div>
                    </div>
                    <div className="absolute left-0 top-[1355px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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