import { data } from 'autoprefixer';
import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxios from '../../axios/useAxios';

const FindPw = () => {
    const [email, setEmail] = useState('');
    const { response, error, loading, fetchData } = useAxios();

    const nav = useNavigate();
    const handlerGoFindEmail = () => {
        nav("/user/findEmail");
    };

    const handlerGoLogin = () => {
        nav("/user/login");
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlerGoComplete = () => {
        if (email) {
            fetchData(
                {
                    method: 'POST',
                    url: `/api/send-reset-mail`,
                    data: {
                        userId: email
                    }
                },
                (data) => {
                    if(data.includes('성공')) {
                        console.log(data)
                        alert("입력하신 이메일로 비밀번호 재설정 링크가 발송되었습니다.");
                        nav("/user/findPw/sent");
                    } else {
                        alert("해당 이메일 주소를 찾을 수 없습니다. 올바른 이메일을 입력해 주세요.")
                    }
                }
            )
        }
    }

    return (<>
        <div className="absolute left-[210px] top-[425px] w-[1500px] h-[466px] bg-[#7d85971a]"></div>
        <div className="absolute left-[420px] top-[596px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[569px] top-[682px] w-[98px] h-[30px] text-[22px] font-['Inter'] font-medium text-[#000]">아이디</div>
        <div className="absolute left-[420px] top-[804px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-0 top-[245px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">비밀번호 찾기</div>
        <div className="absolute left-[338px] top-[522px] w-[281px] h-[51px] text-[24px] font-['Inter'] font-semibold text-[#000] text-center">아이디 입력</div>
        <div className="absolute left-0 top-[324px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">가입된 아이디(이메일)로 비밀번호를 재설정 하실 수 있습니다.</div>
        <div className="absolute left-[765px] top-[978px] w-[390px] h-[60px] flex">
            <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                <button
                    onClick={handlerGoLogin}
                    className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                    <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center">로그인하러 가기</span>
                </button>
            </div>
            <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                <button
                    onClick={handlerGoFindEmail}
                    className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                    <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">아이디 찾기</span>
                </button>
            </div>
        </div>
        <div className="absolute left-[731px] top-[671px] w-[489px] h-[52px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
        <input
            value={email}
            type='text'
            onChange={handleEmailChange}
            placeholder='아이디(이메일)를 입력해주세요.'
            className="absolute left-[760px] top-[672px] w-[459px] h-[50px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>
        <div className="absolute left-[1248px] top-[671px] w-[103px] h-[52px] flex">
            <button
                onClick={handlerGoComplete}
                className="absolute left-0 top-0 w-[103px] h-[52px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">전송</span>
            </button>
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

export default FindPw