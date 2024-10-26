import axios from 'axios';
import { useState, EventHandler, ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPw = () => {
    const [pwImageSrc, setPwImageSrc] = useState(null);
    const [password, setPassword] = useState();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [cpwImageSrc, setCpwImageSrc] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

    const location = useLocation(); // useLocation 훅을 사용하여 현재 위치 정보 가져오기
    const query = new URLSearchParams(location.search); // 쿼리 파라미터를 쉽게 다루기 위해 URLSearchParams 사용
    const token = query.get('token'); // token을 쿼리에서 가져옵니다.

    const nav = useNavigate();

    console.log(token);

    useEffect(() => {
        if (!token) {
            alert("유효하지 않은 링크입니다."); // 토큰이 없으면 에러 메시지
        }
    }, [token]);

    const validationPw = (value) => {
        const regEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;
        return regEx.test(value);
    };

    const handlerPwChange = (value) => {
        setPassword(value)

        if (value.length > 0) {
            if (!validationPw(value)) {
                console.log("유효하지 않은 비밀번호");
                setPwImageSrc("/img/user/pink.png");
            } else {
                console.log(value);
                setPwImageSrc("/img/user/green.png");
            }
        }

        else {
            setPwImageSrc(null);
        }
    };

    const handlerConfirmPwChange = (value) => {
        setConfirmPassword(value);
        console.log(confirmPassword);

        if (value.length > 0) {
            if (value === password) {
                console.log(value);
                setCpwImageSrc("/img/user/green.png");
            }
            else {
                console.log("유효하지 않은 비밀번호");
                setCpwImageSrc("/img/user/pink.png");
            }
        }
        else {
            setCpwImageSrc(null);
        }
    }

    const handleMouseDown = (type) => {
        if (type === 'password') {
            setIsPasswordVisible(true);
        } else if (type === 'confirmPassword') {
            setIsCPasswordVisible(true);
        }
    };

    const handleMouseUp = (type) => {
        if (type === 'password') {
            setIsPasswordVisible(false);
        } else if (type === 'confirmPassword') {
            setIsCPasswordVisible(false);
        }
    };

    const handleChangePassword = async () => {
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
        if (pwImageSrc !== "/img/user/green.png") {
            alert("비밀번호를 다시 확인해주세요.");
            return;
        }
        if (!confirmPassword) {
            alert("비밀번호 확인을 입력해주세요.");
            return;
        }
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            // 비밀번호 변경 요청
            const response = await axios.post('/api/reset-password', {
                userPw: password,
                tokenId: token // 토큰을 서버로 전송
            });

            if (response.data === "성공") {
                alert("비밀번호가 성공적으로 변경되었습니다.");
                nav("/user/login");
            } else {
                alert("비밀번호 변경 실패");
            }
        } catch (error) {
            console.error("비밀번호 변경 오류", error);
        }
    };

    return (
        <>
            <div className="absolute left-[210px] top-[425px] w-[1500px] h-[681px] bg-[#7d85971a] rounded-[20px]"></div>
            <div className="absolute left-[420px] top-[596px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <div className="absolute left-[420px] top-[940px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-[829px] top-[742px] text-[17px] font-['Inter'] text-[#7d8597] whitespace-nowrap">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
            <div className="absolute left-[569px] top-[683px] w-[182px] h-[29px] text-[22px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[569px] top-[825px] w-[201px] h-[29px] text-[22px] font-['Inter'] font-medium"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">비밀번호 찾기</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">가입된 아이디(이메일)로 비밀번호를 재설정 하실 수 있습니다.</div>
            <div className="absolute left-[417px] top-[522px] w-[390px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000]">새로운 비밀번호를 입력해주세요.</div>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                onChange={(e) => handlerPwChange(e.target.value)}
                name='password'
                placeholder='비밀번호를 입력해주세요.'
                className="absolute left-[829px] top-[668px] w-[450px] h-[58px] bg-[#fff] border-[1px] text-[17px] border-solid border-[#7d8597] rounded-[5px] outline-0 pl-6"></input>
            <img
                onMouseDown={() => handleMouseDown('password')}
                onMouseUp={() => handleMouseUp('password')}
                onMouseLeave={() => handleMouseUp('password')}
                style={{ cursor: 'pointer' }}
                className="absolute left-[1223px] top-[687px]" width="20" height="20"
                src="/img/user/eye.png">
            </img>
            {pwImageSrc != null && (
                <img
                    className="absolute left-[1180px] top-[687px]" width="20" height="20"
                    src={pwImageSrc}>
                </img>
            )}

            <input
                type={isCPasswordVisible ? 'text' : 'password'}
                onChange={(e) => handlerConfirmPwChange(e.target.value)}
                name='confirmpassword'
                placeholder='비밀번호를 한번 더 입력해주세요.'
                className="absolute left-[829px] top-[810px] w-[450px] h-[58px] bg-[#fff] border-[1px] text-[17px] border-solid border-[#7d8597] rounded-[5px] outline-0 pl-6"></input>
            <img
                onMouseDown={() => handleMouseDown('confirmPassword')}
                onMouseUp={() => handleMouseUp('confirmPassword')}
                onMouseLeave={() => handleMouseUp('confirmPassword')}
                style={{ cursor: 'pointer' }}
                className="absolute left-[1223px] top-[829px]" width="20" height="20"
                src="/img/user/eye.png">
            </img>
            {cpwImageSrc != null && (
                <img
                    className="absolute left-[1180px] top-[829px]" width="20" height="20"
                    src={cpwImageSrc}>
                </img>
            )}

            <div className="absolute left-[874px] top-[992px] w-[184px] h-[60px] flex">
                <div className="absolute top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={handleChangePassword}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">비밀번호 변경하기</span>
                    </button>
                </div>
            </div>
            <div className="absolute left-0 top-[1369px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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

export default ResetPw