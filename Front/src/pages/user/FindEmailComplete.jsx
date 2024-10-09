import { useState, EventHandler, ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../axios/useAxios';

const FIndEmailComplete = () => {

    const location = useLocation();
    const { userPhone } = location.state || {};
    const { response, error, loading, setConfig } = useAxios();
    const [email, setEmail] = useState(''); // 이메일 상태 추가
    const nav = useNavigate();

    useEffect(() => {
        console.log("userPhone:", userPhone); // userPhone 값 확인
        if (userPhone) {
            // API 호출 설정
            setConfig({
                method: 'POST',
                url: '/api/findEmail',
                data: { userPhone },
            });
        }
    }, [userPhone, setConfig]);

    useEffect(() => {
        if (response) {
            console.log("Response received:", response);
            // API 응답에서 아이디(이메일) 값 설정
            // 이메일의 두 번째, 세 번째 문자를 '*'로 변경
            const maskedEmail = response.split('').map((char, index) => {
                if (index === 1 || index === 2) {
                    return '*';
                }
                return char;
            }).join('');
            setEmail(maskedEmail);
        }

        if (error) {
            console.error("Error occurred:", error);
            if (error.response && error.response.status === 404) {
                setEmail('해당 휴대폰 번호로 등록된 아이디가 없습니다.');
                const idElement = document.getElementById("idName");
                if (idElement) {
                    idElement.hidden = true; // hidden 속성을 사용하여 요소를 숨김
                }
            } else {
                setEmail('아이디를 찾는 중 오류가 발생했습니다.');
            }
        }
    }, [response, error]);

    const handlerGoFindPw = () => {
        nav("/user/findPw");
    };

    const handlerGoLogin = () => {
        nav("/user/login");
    };
    return (
        <>
            <div className="absolute left-[210px] top-[426px] w-[1500px] h-[466px] bg-[#7d85971a]"></div>
            <div className="absolute left-[420px] top-[633px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <div
                id='idName'
                className="absolute left-[569px] top-[679px] w-[104px] h-[34px] text-[22px] font-['Inter'] font-medium text-[#000]">아이디</div>
            <div className="absolute left-[1px] top-[679px] w-[1919px] h-[41px] text-[22px] font-['Inter'] font-light text-[#000] text-center">
                {email}
            </div>
            <div className="absolute left-[420px] top-[754px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">아이디 찾기</div>
            <div className="absolute left-[1px] top-[533px] w-[1920px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">회원가입 시 입력하신 아이디 정보입니다.</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">휴대폰 본인인증으로 아이디를 찾으실 수 있습니다.</div>
            <div className="absolute left-[765px] top-[979px] w-[390px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={handlerGoLogin}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center">로그인하러 가기</span>
                    </button>
                </div>
                <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={handlerGoFindPw}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">비밀번호 찾기</span>
                    </button>
                </div>
            </div>
            <div className="absolute left-0 top-[1169px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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

export default FIndEmailComplete