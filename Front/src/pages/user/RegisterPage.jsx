import { useState, EventHandler, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [isMaleChecked, setIsMaleChecked] = useState(true);
    const [isFemaleChecked, setIsFemaleChecked] = useState(false);

    const [isAgreeChecked, setIsAgreeChecked] = useState(true);
    const [isDisagreeChecked, setIsDisagreeChecked] = useState(false);

    const [idImageSrc, setIdImageSrc] = useState(null);

    const [pwImageSrc, setPwImageSrc] = useState(null);
    const [password, setPassword] = useState();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [cpwImageSrc, setCpwImageSrc] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

    const [randomNickname, setRandomNickname] = useState('');
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
                document.getElementById("address").value = data.zonecode + " " + data.address;
                console.log(data.address);
                console.log(data.zonecode);
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

    const makeRandomNickname = () => {
        const adjectives = ['가냘픈', '가는', '가엾은', '가파른', '같은', '거센', '거친', '검은', '게으른', '고달픈', '고른', '고마운', '고운', '고픈', '곧은', '괜찮은', '구석진', '굳은', '굵은', '귀여운', '그런', '그른', '그리운', '기다란', '기쁜', '긴', '깊은', '깨끗한', '나쁜', '나은', '난데없는', '날랜', '날카로운', '낮은', '너그러운', '너른', '널따란', '넓은', '네모난', '노란', '높은', '누런', '눅은', '느닷없는', '느린', '늦은', '다른', '더러운', '더운', '덜된', '동그란', '돼먹잖은', '된', '둥그런', '둥근', '뒤늦은', '드문', '딱한', '때늦은', '뛰어난', '뜨거운', '막다른', '많은', '매운', '먼', '멋진', '메마른', '메스꺼운', '모난', '못난', '못된', '못생긴', '무거운', '무딘', '무른', '무서운', '미끄러운', '미운', '바람직한', '반가운', '밝은', '밤늦은', '보드라운', '보람찬', '부드러운', '부른', '붉은', '비싼', '빠른', '뼈저린', '뽀얀', '뿌연', '새로운', '서툰', '섣부른', '설운', '성가신', '센', '수줍은', '쉬운', '스스러운', '슬픈', '시원찮은', '싫은', '쌀쌀맞은', '쏜살같은', '쓰디쓴', '쓰린', '쓴', '아니꼬운', '아닌', '아름다운', '아쉬운', '안된', '안쓰러운', '알맞은', '약빠른', '얇은', '얕은', '어두운', '어려운', '어린', '엄청난', '열띤', '예쁜', '올바른', '옳은', '외로운', '이른', '익은', '있는', '작은', '잘난', '잘생긴', '재미있는', '적은', '젊은', '점잖은', '조그만', '좁은', '좋은', '줄기찬', '즐거운', '지나친', '지혜로운', '질긴', '짓궂은', '짙은', '짠', '짧은', '큰', '탐스러운', '푸른', '한결같은', '흐린', '희망찬', '흰'];
        const nouns = ['고양이', '강아지', '거북이', '토끼', '뱀', '사자', '호랑이', '표범', '치타', '하이에나', '기린', '코끼리', '코뿔소', '하마', '악어', '펭귄', '부엉이', '올빼미', '곰', '돼지', '소', '닭', '독수리', '타조', '고릴라', '오랑우탄', '침팬지', '원숭이', '코알라', '캥거루', '고래', '상어', '칠면조', '직박구리', '쥐', '청설모', '메추라기', '앵무새', '삵', '스라소니', '판다', '오소리', '오리', '거위', '백조', '두루미', '고슴도치', '두더지', '아홀로틀', '맹꽁이', '너구리', '개구리', '두꺼비', '카멜레온', '이구아나', '노루', '제비', '까치', '고라니', '수달', '당나귀', '순록', '염소', '공작', '바다표범', '들소', '박쥐', '참새', '물개', '바다사자', '살모사', '구렁이', '얼룩말', '산양', '멧돼지', '카피바라', '도롱뇽', '북극곰', '퓨마', '', '미어캣', '코요테', '라마', '딱따구리', '기러기', '비둘기', '스컹크', '돌고래', '까마귀', '매', '낙타', '여우', '사슴', '늑대', '재규어', '알파카', '양', '다람쥐', '담비'];
        const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
        const randomNounIndex = Math.floor(Math.random() * nouns.length);
        const randomNumber = Math.floor(Math.random() * 100);
        const nickname = `${adjectives[randomAdjectiveIndex]}${nouns[randomNounIndex]}${randomNumber}`;
        setRandomNickname(nickname);
    };

    useEffect(() => {
        makeRandomNickname();
    }, []);

    const cancelRegister = () => {
        nav("/");
    };
    const handlerGoNextPage = () => {
        nav("/user/register/complete");
    };

    const validationEmail = (value) => {
        const regEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regEx.test(value);
    };

    const validationPw = (value) => {
        const regEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;
        return regEx.test(value);
    };

    const handlerIdChange = (value) => {
        if (value.length > 0) {
            if (!validationEmail(value)) {
                console.log("유효하지 않은 이메일");
                setIdImageSrc("/img/user/pink.png");
            } else {
                console.log(value);
                setIdImageSrc("/img/user/green.png");
            }
        } else {
            setIdImageSrc(null);
        }
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
                name='id'
                onChange={(e) => handlerIdChange(e.target.value)}
                placeholder='아이디(이메일)를 입력해주세요.'
                className="absolute left-[773px] top-[799px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"
            ></input>
            {idImageSrc != null && (
                <img
                    className="absolute left-[1208px] top-[817px] border-0" width="20" height="20"
                    src={idImageSrc}>
                </img>
            )}
            <button
                className="absolute left-[1264px] top-[798px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
            </button>

            {/* 비밀번호 */}
            <div className="absolute left-[534px] top-[911px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[894px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                onChange={(e) => handlerPwChange(e.target.value)}
                placeholder='비밀번호를 입력해주세요.'
                className="absolute left-[775px] top-[895px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"
            ></input>
            <img
                onMouseDown={() => handleMouseDown('password')}
                onMouseUp={() => handleMouseUp('password')}
                onMouseLeave={() => handleMouseUp('password')}
                style={{ cursor: 'pointer' }}
                className="absolute left-[1335px] top-[913px]" width="20" height="20"
                src="/img/user/eye.png">
            </img>
            {pwImageSrc != null && (
                <img
                    className="absolute left-[1290px] top-[913px]" width="20" height="20"
                    src={pwImageSrc}>
                </img>
            )}

            <div className="absolute left-[748px] top-[965px] w-[556px] text-[17px] font-['Inter'] text-[#7d8597]">영어, 숫자, 특수문자 포함 8자 이상 16자 이하로 입력해주세요.</div>

            {/* 비밀번호 확인 */}
            <div className="absolute left-[534px] top-[1045px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[1029px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                type={isCPasswordVisible ? 'text' : 'password'}
                name='confirmpassword'
                onChange={(e) => handlerConfirmPwChange(e.target.value)}
                placeholder='비밀번호를 한번 더 입력해주세요.'
                className="absolute left-[775px] top-[1030px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center outline-0"></input>
            <img
                onMouseDown={() => handleMouseDown('confirmPassword')}
                onMouseUp={() => handleMouseUp('confirmPassword')}
                onMouseLeave={() => handleMouseUp('confirmPassword')}
                style={{ cursor: 'pointer' }}
                className="absolute left-[1335px] top-[1047px]" width="20" height="20"
                src="/img/user/eye.png">
            </img>
            {cpwImageSrc != null && (
                <img
                    className="absolute left-[1290px] top-[1047px]" width="20" height="20"
                    src={cpwImageSrc}>
                </img>
            )}

            {/* 닉네임 */}
            <div className="absolute left-[534px] top-[1143px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[1127px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                id='nickname'
                type='text'
                name='nickname'
                value={randomNickname}
                onChange={(e) => setRandomNickname(e.target.value)}
                className="absolute left-[775px] top-[1128px] w-[399px] h-[53px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0"></input>
            <img
                onClick={makeRandomNickname}
                style={{ cursor: 'pointer' }}
                className="absolute left-[1208px] top-[1143px]" width="24" height="23" src="/img/user/reload 1117_124.png"></img>
            <button

                className="absolute left-[1264px] top-[1127px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
            </button>

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
                    src={isMaleChecked ? '/img/user/check (1)117_493.png' : '/img/user/check 1117_496.png'}
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
                    src={isFemaleChecked ? '/img/user/check (1)117_493.png' : '/img/user/check 1117_496.png'}
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
                placeholder='상세주소를 입력해주세요.'
                className="absolute left-[748px] top-[1597px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] pl-6 outline-0">
            </input>

            {/* 마케팅활용동의 */}
            <div className="absolute left-[534px] top-[1739px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">마케팅활용동의</div>
            <img
                onClick={agreeCheck}
                className="absolute left-[748px] top-[1738px]" width="24" height="24"
                src={isAgreeChecked ? '/img/user/button 1117_127.png' : '/img/user/rec (1) 1117_135.png'}></img>
            <button
                onClick={agreeCheck}
                className="absolute left-[781px] top-[1734px] w-[48px] h-[33px] text-[17px] font-['Inter'] text-[#000]">수신</button>

            <img
                onClick={disagreeCheck}
                className="absolute left-[849px] top-[1738px]" width="24" height="24"
                src={isDisagreeChecked ? '/img/user/button 1117_127.png' : '/img/user/rec (1) 1117_135.png'}></img>
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