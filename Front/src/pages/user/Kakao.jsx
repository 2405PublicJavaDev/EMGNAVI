import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../axios/useAxios";
import axios from "axios"

const Kakao = ({ setIsLoginTrue }) => {
    const nav = useNavigate();
    const [randomNickname, setRandomNickname] = useState('');
    const makeRandomNickname = () => {
        const adjectives = ['가냘픈', '가는', '가엾은', '가파른', '같은', '거센', '거친', '검은', '게으른', '고달픈', '고른', '고마운', '고운', '고픈', '곧은', '괜찮은', '구석진', '굳은', '굵은', '귀여운', '그런', '그른', '그리운', '기다란', '기쁜', '긴', '깊은', '깨끗한', '나쁜', '나은', '난데없는', '날랜', '날카로운', '낮은', '너그러운', '너른', '널따란', '넓은', '네모난', '노란', '높은', '누런', '눅은', '느닷없는', '느린', '늦은', '다른', '더러운', '더운', '덜된', '동그란', '돼먹잖은', '된', '둥그런', '둥근', '뒤늦은', '드문', '딱한', '때늦은', '뛰어난', '뜨거운', '막다른', '많은', '매운', '먼', '멋진', '메마른', '메스꺼운', '모난', '못난', '못된', '못생긴', '무거운', '무딘', '무른', '무서운', '미끄러운', '미운', '바람직한', '반가운', '밝은', '밤늦은', '보드라운', '보람찬', '부드러운', '부른', '붉은', '비싼', '빠른', '뼈저린', '뽀얀', '뿌연', '새로운', '서툰', '섣부른', '설운', '성가신', '센', '수줍은', '쉬운', '스스러운', '슬픈', '시원찮은', '싫은', '쌀쌀맞은', '쏜살같은', '쓰디쓴', '쓰린', '쓴', '아니꼬운', '아닌', '아름다운', '아쉬운', '안된', '안쓰러운', '알맞은', '약빠른', '얇은', '얕은', '어두운', '어려운', '어린', '엄청난', '열띤', '예쁜', '올바른', '옳은', '외로운', '이른', '익은', '있는', '작은', '잘난', '잘생긴', '재미있는', '적은', '젊은', '점잖은', '조그만', '좁은', '좋은', '줄기찬', '즐거운', '지나친', '지혜로운', '질긴', '짓궂은', '짙은', '짠', '짧은', '큰', '탐스러운', '푸른', '한결같은', '흐린', '희망찬', '흰'];
        const nouns = ['고양이', '강아지', '거북이', '토끼', '뱀', '사자', '호랑이', '표범', '치타', '하이에나', '기린', '코끼리', '코뿔소', '하마', '악어', '펭귄', '부엉이', '올빼미', '곰', '돼지', '소', '닭', '독수리', '타조', '고릴라', '오랑우탄', '침팬지', '원숭이', '코알라', '캥거루', '고래', '상어', '칠면조', '직박구리', '쥐', '청설모', '메추라기', '앵무새', '삵', '스라소니', '판다', '오소리', '오리', '거위', '백조', '두루미', '고슴도치', '두더지', '아홀로틀', '맹꽁이', '너구리', '개구리', '두꺼비', '카멜레온', '이구아나', '노루', '제비', '까치', '고라니', '수달', '당나귀', '순록', '염소', '공작', '바다표범', '들소', '박쥐', '참새', '물개', '바다사자', '살모사', '구렁이', '얼룩말', '산양', '멧돼지', '카피바라', '도롱뇽', '북극곰', '퓨마', '', '미어캣', '코요테', '라마', '딱따구리', '기러기', '비둘기', '스컹크', '돌고래', '까마귀', '매', '낙타', '여우', '사슴', '늑대', '재규어', '알파카', '양', '다람쥐', '담비'];
        const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
        const randomNounIndex = Math.floor(Math.random() * nouns.length);
        const randomNumber = Math.floor(Math.random() * 100);
        const nickname = `${adjectives[randomAdjectiveIndex]}${nouns[randomNounIndex]}${randomNumber}`;
        setRandomNickname(nickname);
        setValues((prevValues) => ({ ...prevValues, uNickname: nickname }));
    };
    const [values, setValues] = useState({
        uNickname: '',
    });
    // console.log(values.uNickname);


    useEffect(() => {
        makeRandomNickname(); // 기존 코드
    }, []); // 컴포넌트 마운트 시 한 번만 실행

    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
        axios.post('/api/kakao', { code })
            .then(response => {
                if (response.data.unickname != null) {
                    localStorage.setItem('isLoginTrue', 'true'); 
                    localStorage.setItem('userId', response.data.uEmail);
                    setIsLoginTrue(true); 
                    window.location.href = "/";
                } else {
                    setValues({ uEmail: response.data.uemail });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

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
                    value={randomNickname}
                    onChange={(e) => {
                        const value = e.target.value;
                        setRandomNickname(value)
                        setValues({ ...values, uNickname: value });
                    }}
                    className="absolute left-[36px] top-1 w-[282px] h-[47px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0"></input>
                <img
                    onClick={makeRandomNickname}
                    style={{ cursor: 'pointer' }}
                    className="absolute left-[407px] top-[12px]" width="30" height="30" src="/img/user/reload 1117_124.png"></img>
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