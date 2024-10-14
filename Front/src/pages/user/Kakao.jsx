import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../axios/useAxios";

const Kakao = () => {
    const nav = useNavigate();
    const { fetchData, loading, error } = useAxios();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            fetchData(
                {
                    method: 'POST',
                    url: `/api/kakao`, // 백엔드 API로 코드 전송
                    data : { code }
                },
                (data) => {
                    if (data) {
                        alert("서버 응답: ", data);
                        // 원하는 로직 실행, 예: 로그인 후 이동
                    } else {
                        alert("오류 발생");
                    }
                }
            );
        } else {
            console.log("코드가 없습니다");
        }
    }, [fetchData, nav]); // useEffect에 종속성 추가

    return (
        <>
            <div className="absolute left-[210px] top-[425px] w-[1500px] h-[545px] bg-[#7d85971a]"></div>
            <div className="absolute left-[420px] top-[596px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <div className="absolute left-[569px] top-[682px] w-[98px] h-[30px] text-[22px] font-['Inter'] font-medium text-[#000]">닉네임</div>
            <div className="absolute left-[420px] top-[804px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">소셜 회원가입</div>
            <div className="absolute left-[338px] top-[522px] w-[281px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">닉네임 입력</div>
            <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">소셜 로그인 시 리뷰 등록, 즐겨찾기에 사용할 닉네임을 설정해주세요.</div>
            <div className="absolute left-[874px] top-[867px] w-[184px] h-[60px] flex">
                <div className="absolute top-0 w-[184px] h-[60px] flex">
                    <button 

                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">닉네임 설정하기</span>
                    </button>
                </div>
            </div>
            <div className="absolute left-[1207px] top-[671px] w-[144px] h-[52px] flex">
                <button 
                    
                    className="absolute left-0 top-0 w-[144px] h-[52px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
                    </button>
            </div>
            <div className="absolute left-[715px] top-[671px] w-[467px] h-[52px] flex">
                <div className="absolute left-0 top-0 w-[467px] h-[52px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                <div className="absolute left-[36px] top-0 w-[282px] h-[52px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">응급NAVI66</div>
                <img className="absolute left-[410px] top-[10px]" width="32" height="32" src="/img/user/reload 1117_124.png"></img>
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

export default Kakao