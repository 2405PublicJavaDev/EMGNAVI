import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Kakao = () => {
    const nav = useNavigate();
    const [values, setValues] = useState({
        userId: '',
        userNickname: '',
        userPhone: '',
        userGender: '',
        userName: '',
    });
    const [isNicknameChecked, setIsNicknameChecked] = useState(false);  // 닉네임 중복 확인 상태

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            axios.post('/api/kakao', { code })
                .then(response => {
                    if (response.data.userNickname != null) {
                        window.location.href = "/";
                    } else {
                        console.log(response);
                        setValues(prevValues => ({
                            ...prevValues,
                            userId: response.data.userId,
                            userGender: response.data.userGender,
                            userPhone: response.data.userPhone,
                            userName: response.data.userName
                        }));
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [nav]);

    const checkNicknameDuplicate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/nickname/duplicate', { userNickname: values.uNickname });
            alert(response.data);
            setIsNicknameChecked(true);
        } catch (error) {
            console.error("에러 발생:", error);
            alert(error.response.data);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!values.userNickname) {
            alert("닉네임을 입력해주세요");
            return;
        }
        if (!isNicknameChecked) {
            alert("닉네임 중복확인을 해주세요");
            return;
        }
        const response = await axios.post('/api/user', {
            userId: values.userId,
            userNickname: values.userNickname,
            userPhone: values.userPhone,
            userName: values.userName,
            userGender: values.userGender,
        })
        if (response.status === 200) {
            alert("소셜 회원가입 완료");
            window.location.href = "/";
        } else {
            console.log(response);
        }
    }



    return (
        <>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">소셜 회원가입</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">소셜 로그인 시 리뷰 등록, 즐겨찾기에 사용할 닉네임을 설정해주세요.</div>
            <div className="absolute left-[210px] top-[425px] w-[1500px] h-[545px] bg-[#7d85971a]"></div>
            <div className="absolute left-[338px] top-[522px] w-[281px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">닉네임 입력</div>
            <div className="absolute left-[420px] top-[596px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <div className="absolute left-[569px] top-[682px] w-[98px] h-[30px] text-[22px] font-['Inter'] font-medium text-[#000]">닉네임</div>

            <div className="absolute left-[715px] top-[671px] w-[467px] h-[52px] flex">
                <div className="absolute left-0 top-0 w-[467px] h-[52px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                <input
                    type="text"
                    id="nickname"
                    onChange={(e) => {
                        const value = e.target.value;
                        setValues({ ...values, userNickname: value });
                    }}
                    className="absolute left-[36px] top-1 w-[282px] h-[47px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0"></input>
            </div>

            <div className="absolute left-[1207px] top-[671px] w-[144px] h-[52px] flex">
                <button
                    type='button'
                    onClick={checkNicknameDuplicate}
                    className="absolute left-0 top-0 w-[144px] h-[52px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                    <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
                </button>
            </div>

            <div className="absolute left-[420px] top-[804px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>

            <div className="absolute left-[874px] top-[867px] w-[184px] h-[60px] flex">
                <div className="absolute top-0 w-[184px] h-[60px] flex">
                    <button
                        onClick={handleSignUp}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">닉네임 설정하기</span>
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

export default Kakao;