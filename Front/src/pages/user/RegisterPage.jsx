import { useState, EventHandler, ReactNode, useEffect } from 'react'
import check from "../../../public/img/user/check (1)117_493.png";
import unCheck from "../../../public/img/user/check 1117_496.png";
import agree from "../../../public/img/user/button 1117_127.png";
import disagree from "../../../public/img/user/rec (1) 1117_135.png";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [isMaleChecked, setIsMaleChecked] = useState(true);
    const [isFemaleChecked, setIsFemaleChecked] = useState(false);
    const [isAgreeChecked, setIsAgreeChecked] = useState(true);
    const [isDisagreeChecked, setIsDisagreeChecked] = useState(false);
    const nav = useNavigate();

    const maleCheck = () => {
        if (!isMaleChecked) {
            setIsFemaleChecked(false);
            setIsMaleChecked(true);
        }
    };

    const femaleCheck = () => {
        if (!isFemaleChecked) {
            setIsFemaleChecked(true);
            setIsMaleChecked(false);
        }
    };

    const findPostCode = () => {
        new daum.Postcode({
            oncomplete: function (data) {
                document.getElementById("address").value = data.address;
                console.log(data.address);
                document.getElementById("detailAddress").focus();
            }
        }).open();
    };

    const agreeCheck = () => {
        if (!isAgreeChecked) {
            setIsAgreeChecked(true);
            setIsDisagreeChecked(false);
        }
    };

    const disagreeCheck = () => {
        if (!isDisagreeChecked) {
            setIsDisagreeChecked(true);
            setIsAgreeChecked(false);
        }
    };

    const cancelRegister = () => {
        nav("/");
    };
    const handlerGoNextPage = () => {
        nav("/user/register/complete");
    };

    return (
        <>
            <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
            <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
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
            <div className="absolute left-[461px] top-[645px] w-[200px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">회원정보 입력</div>
            <div className="absolute left-[1256px] top-[703px] w-[203px] text-[16px] font-['Inter']"><span className="text-[#c2a55d]">*</span><span className="text-[#7d8597]">은 필수 입력 항목입니다.</span></div>
            <div className="absolute left-[461px] top-[745px] w-[998px] h-0 border-[1px] border-solid border-[#000]"></div>

            {/* 아이디 */}
            <div className="absolute left-[534px] top-[814px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">아이디 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[798px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type='text'
                placeholder='아이디(이메일)를 입력해주세요.'
                className="absolute left-[773px] top-[799px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"
            ></input>
            <div className="absolute left-[1264px] top-[798px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
            <div className="absolute left-[1268px] top-[798px] w-[118px] h-[55px] text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>

            {/* 비밀번호 */}
            <div className="absolute left-[534px] top-[911px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[894px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type='text'
                placeholder='비밀번호를 입력해주세요.'
                className="absolute left-[775px] top-[895px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"
            ></input>
            <div className="absolute left-[748px] top-[965px] w-[506px] text-[17px] font-['Inter'] text-[#7d8597]">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>

            {/* 비밀번호 확인 */}
            <div className="absolute left-[534px] top-[1045px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[1029px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type='text'
                placeholder='비밀번호를 한번 더 입력해주세요.'
                className="absolute left-[775px] top-[1030px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>

            {/* 닉네임 */}
            <div className="absolute left-[534px] top-[1143px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[1127px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <div className="absolute left-[775px] top-[1127px] w-[399px] h-[55px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">응급NAVI88</div>
            <img className="absolute left-[1208px] top-[1143px]" width="24" height="23" src="/img/user/reload 1117_124.png"></img>
            <div className="absolute left-[1264px] top-[1127px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
            <div className="absolute left-[1268px] top-[1127px] w-[118px] h-[55px] text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</div>

            {/* 휴대폰번호 */}
            <div className="absolute left-[534px] top-[1242px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">휴대폰번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[1242px] w-[214px] text-[17px] font-['Inter'] text-[#000]">01012345678</div>

            {/* 이름 */}
            <div className="absolute left-[534px] top-[1339px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">이름</div>
            <div className="absolute left-[748px] top-[1323px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type='text'
                placeholder='이름을 입력해주세요.'
                className="absolute left-[775px] top-[1324px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>

            {/* 성별 */}
            <div className="absolute left-[534px] top-[1442px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">성별</div>
            <button
                onClick={maleCheck}
                className={`absolute left-[748px] top-[1428px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid rounded-[45px] 
                    ${isMaleChecked ? 'border-[#0b2d85]' : 'border-[#7d8597]'}`}>
                <div className={`text-[17px] font-['Inter'] flex flex-col justify-center pl-6 
                            ${isMaleChecked ? 'text-[#0b2d85] font-semibold' : 'text-[#7d8597]'}`}>
                    남
                </div>
                <img
                    className="absolute top-[13px] left-[18px]"
                    width="21"
                    height="27"
                    src={isMaleChecked ? check : unCheck}
                    alt="check"
                />
            </button>
            <button
                onClick={femaleCheck}
                className={`absolute left-[860px] top-[1428px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid rounded-[45px] 
                    ${isFemaleChecked ? 'border-[#0b2d85]' : 'border-[#7d8597]'}`}>
                <div className={`text-[17px] font-['Inter'] flex flex-col justify-center pl-6 
                            ${isFemaleChecked ? 'text-[#0b2d85] font-semibold' : 'text-[#7d8597]'}`}>
                    여
                </div>
                <img
                    className="absolute top-[13px] left-[18px]"
                    width="21"
                    height="27"
                    src={isFemaleChecked ? check : unCheck}
                    alt="check"
                />
            </button>

            {/* 주소 */}
            <div className="absolute left-[538px] top-[1547px] w-[210px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">주소</div>
            <button
                onClick={findPostCode}
                className="absolute left-[748px] top-[1529px] w-[169px] h-[55px] bg-[#fff] border-[2px] border-solid border-[#0b2d85] rounded-[5px]">
                <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">우편번호 찾기</span>
            </button>
            <input
                type='text'
                id='address'
                readOnly
                className="absolute left-[927px] top-[1529px] w-[459px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] outline-0 pl-6"></input>
            <input
                id='detailAddress'
                type='text'
                className="absolute left-[748px] top-[1597px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] pl-6 outline-0">
            </input>

            {/* 마케팅활용동의 */}
            <div className="absolute left-[534px] top-[1739px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">마케팅활용동의</div>
            <img
                onClick={agreeCheck}
                className="absolute left-[748px] top-[1738px]" width="24" height="24"
                src={isAgreeChecked ? agree : disagree}></img>
            <button
                onClick={agreeCheck}
                className="absolute left-[781px] top-[1734px] w-[48px] h-[33px] text-[17px] font-['Inter'] text-[#000]">수신</button>

            <img
                onClick={disagreeCheck}
                className="absolute left-[849px] top-[1738px]" width="24" height="24"
                src={isDisagreeChecked ? agree : disagree}></img>
            <button
                onClick={disagreeCheck}
                className="absolute left-[886px] top-[1734px] w-[49px] h-[33px] text-[17px] font-['Inter'] text-[#000]">거부</button>

            <div className="absolute left-[461px] top-[1838px] w-[998px] h-0 border-[1px] border-solid border-[#7d8597]"></div>

            <div className="absolute left-[766px] top-[1908px] w-[387px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={cancelRegister}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">가입 취소</span>
                    </button>
                </div>

                <div className="absolute left-[203px] top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={handlerGoNextPage}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">회원가입 완료</span>
                    </button>
                </div>
            </div>

            <div className="absolute left-0 top-[2069px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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

export default RegisterPage