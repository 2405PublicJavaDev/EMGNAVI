import axios from 'axios';
import { useState, EventHandler, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const MypageCheckPw = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const nav = useNavigate();
    const handleMouseDown = () => {
        setIsPasswordVisible(true);
    };

    const handleMouseUp = () => {
        setIsPasswordVisible(false);
    };

    const [values, setValues] = useState({
        uEmail: '',
        uPassword: '',
    });

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setValues(prevValues => ({ ...prevValues, uEmail: userId }));
        }
    }, []);

    const handlePasswordCheck = async (e) => {
        if (e === 'Enter' || e.type === 'click') {
            if (!values.uPassword) {
                alert("비밀번호를 입력해주세요.");
                return;
            }
            try {
                const response = await axios.post('/api/login', {
                    userId: values.uEmail,
                    userPw: values.uPassword,
                });
                console.log(response.data); // 응답 확인
                alert(response.data); // 비밀번호 체크 결과 알림
                nav("/user/mypage/modify")
            } catch (error) {
                console.error(error);
                alert(error.response?.data || "비밀번호 체크 중 오류가 발생했습니다.");
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePasswordCheck('Enter');
        }
    };

    return (<>
        <div className="absolute left-0 top-[124px] w-[1920px] h-[209px] bg-[#0b2d85]"></div>
        <div className="absolute left-[230px] top-[261px] w-[1460px] h-[525px] bg-[#fff] rounded-[5px]"></div>
        <div className="absolute left-[937px] top-[964px] text-[24px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">확인</div>
        <div className="absolute left-[235px] top-[190px] w-[149px] h-[57px] text-[24px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">내정보 관리</div>
        <div className="absolute left-[868px] top-[814px] w-[184px] h-[60px] flex">
            <button
                onClick={handlePasswordCheck}
                className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">확인</span>
            </button>
        </div>
        <div className="absolute left-[420px] top-[413px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[420px] top-[723px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[569px] top-[500px] w-[182px] h-[29px] text-[22px] font-['Inter'] font-medium text-[#000]">아이디</div>
        <div className="absolute left-[569px] top-[608px] w-[201px] h-[29px] text-[22px] font-['Inter'] font-medium text-[#000]">비밀번호</div>
        <div className="absolute left-0 top-[339px] w-[1920px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">개인정보 보호를 위해 비밀번호를 다시 한번 입력해주세요.</div>
        <div className="absolute left-[829px] top-[485px] w-[450px] h-[58px] text-[17px] font-['Inter'] font-light text-[#000] flex flex-col justify-center">{values.uEmail}</div>
        <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요.'
            onKeyDown={handleKeyDown}
            onChange={(e) => setValues({ ...values, uPassword: e.target.value })}
            className="absolute left-[829px] top-[593px] w-[450px] h-[58px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] text-[16px] pl-6 outline-0">
        </input>
        <img
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}
            onMouseLeave={() => handleMouseUp()}
            style={{ cursor: 'pointer' }}
            className="absolute left-[1230px] top-[613px]" width="20" height="20"
            src="/img/user/eye.png">
        </img>
        <div className="absolute left-0 top-[969px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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

export default MypageCheckPw