import { useState, useEffect, useContext } from 'react'
import ChangePasswordModal from './ChangePasswordModal';
import PhoneVerificationModal from './PhoneVerificationModal';
import useAxios from '../../axios/useAxios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext';

const MypageModifyInf = ({ setIsLoginTrue }) => {
    const { userId } = useContext(UserContext);

    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [userPhone, setUserPhone] = useState(''); // 전화번호 상태 추가

    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const openPhoneModal = () => {
        setIsPhoneModalOpen(true);
    };
    const closePhoneModal = () => {
        setIsPhoneModalOpen(false);
    };
    const openPasswordModal = () => {
        setIsPasswordModalOpen(true);
    };
    const closePasswordModal = () => {
        setIsPasswordModalOpen(false);
    };
    const { fetchData } = useAxios();
    const nav = useNavigate();

    const [isMaleChecked, setIsMaleChecked] = useState(false);
    const [isFemaleChecked, setIsFemaleChecked] = useState(false);
    const [isNicknameChecked, setIsNicknameChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [currentPw, setCurrentPw] = useState('');
    const [values, setValues] = useState({
        newNickname: '',
        mainAddress: '',
        detailedAddress: '',
        userGender: '',
        marketingAgree: '',
    });

    // console.log(values);
    // console.log(isNicknameChecked);

    useEffect(() => {
        if (userId) {
            const fetchData = async () => {
                try {
                    const response = await axios.post('/api/getInf', { userId });
                    setUserInfo(response.data);
                    const fullAddress = response.data.userAddress || '';
                    const lastIndex = fullAddress.lastIndexOf(" ");
                    setValues({
                        newNickname: response.data.userNickname || '',
                        mainAddress: fullAddress.substring(0, lastIndex),
                        detailedAddress: fullAddress.substring(lastIndex + 1),
                        userGender: response.data.userGender || '',
                        marketingAgree: response.data.marketingAgree || '',
                    });
                    setCurrentPw(response.data.userPw);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        } else {
            setLoading(false);
        }
    }, []); // 의존성 배열을 빈 배열로 설정

    const handlePhoneChange = (newPhone) => {
        setUserPhone(newPhone); // 전화번호 업데이트
    };

    // 닉네임 중복 확인
    const checkNicknameDuplicate = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            const response = await axios.post('/api/nickname/duplicate', { userNickname: values.newNickname });
            alert(response.data); // Show response message
            setIsNicknameChecked(true);
        } catch (error) {
            console.error("에러 발생:", error);
            alert(error.response.data);
        }
    };

    // 성별 변경 핸들러
    const handleGenderChange = (gender) => {
        if (values.userGender !== gender) {
            setValues(prevValues => ({
                ...prevValues,
                userGender: gender
            }));
            setIsMaleChecked(gender === 'M');
            setIsFemaleChecked(gender === 'F');
        }
    };

    const agreeCheck = () => {
        setValues(prevValues => ({
            ...prevValues,
            marketingAgree: 'Y'
        }));
    };

    const disagreeCheck = () => {
        setValues(prevValues => ({
            ...prevValues,
            marketingAgree: 'N'
        }));
    };

    if (loading) {
        return <div>데이터를 불러오는 중입니다...</div>;
    }

    if (error) {
        return <div>오류가 발생했습니다: {error.message}</div>;
    }

    if (!userInfo) {
        return <div>사용자 정보를 찾을 수 없습니다.</div>;
    }

    const findPostCode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                const fullAddress = data.zonecode + " " + data.address;
                setValues(prevValues => ({
                    ...prevValues,
                    mainAddress: fullAddress,
                    detailedAddress: '', // Reset detailed address
                }));
                document.getElementById("detailedAddress").focus();
            }
        }).open();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleModify = (e) => {
        e.preventDefault();
        if (!isNicknameChecked) {
            alert("닉네임 중복확인을 해주세요.");
            return;
        }
        const fullAddress = `${values.mainAddress} ${values.detailedAddress}`;
        fetchData(
            {
                method: 'POST',
                url: '/api/modify',
                data: {
                    userId: userId,
                    userNickname: values.newNickname,
                    userAddress: fullAddress,
                    userGender: values.userGender,
                    marketingAgree: values.marketingAgree
                }
            },
            (response) => {
                alert('정보가 수정되었습니다.');
                nav("/user/mypage");
            }
        )
    };


    const handlerDelete = () => {
        if (confirm("정말 탈퇴하시겠습니까?")) {
            fetchData(
                {
                    method: 'POST',
                    url: `/api/delete`,
                    data: {
                        userId: userId
                    }
                },
                (data) => {
                    if (data.includes("성공")) {
                        alert("탈퇴가 성공적으로 처리되었습니다.");
                        nav("/");
                    } else {
                        alert("탈퇴 처리에 실패했습니다.");
                    }
                }
            );
        }
    };




    return (
        <>
            <div className="absolute left-0 top-[124px] w-[1920px] h-[209px] bg-[#0b2d85]"></div>
            <div className="absolute left-[235px] top-[190px] w-[149px] h-[57px] text-[25px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">내정보 관리</div>
            <div className="absolute left-[230px] top-[261px] w-[1460px] h-[1783px] bg-[#fff] rounded-[5px]"></div>
            <div className="absolute left-[235px] top-[339px] w-[1455px] h-[67px] text-[36px] font-['Inter'] font-semibold text-[#000] text-center">내정보</div>
            <div className="absolute left-[420px] top-[497px] w-[1080px] h-0 border-[1px] border-solid border-[#000]"></div>
            <form id="form" onSubmit={handleModify} autoComplete='off'>
                {/* 아이디 */}
                <div className="absolute left-[534px] top-[598px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">아이디 </span><span className="text-[#c2a55d]">*</span></div>
                <div className="absolute left-[748px] top-[582px] w-[479px] h-[55px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">{userInfo.userId}</div>

                {/* 비밀번호 */}
                <div className="absolute left-[534px] top-[695px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
                <button
                    onClick={openPasswordModal}
                    type='button'
                    className="absolute left-[748px] top-[678px] w-[121px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]">
                    <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">변경하기</span>
                </button>

                {/* 닉네임 */}
                <div className="absolute left-[534px] top-[806px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
                <div className="absolute left-[748px] top-[790px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                <input
                    value={values.newNickname || userInfo.userNickname || ''}
                    type='text'
                    id='nickname'
                    onChange={(e) => {
                        const newNickname = e.target.value; // 입력한 닉네임 값
                        setValues(prevValues => ({
                            ...prevValues,
                            newNickname: newNickname, // 상태 업데이트
                        }));
                        setIsNicknameChecked(false); // 중복 확인 상태 초기화
                    }}
                    className="absolute left-[775px] top-[791px] w-[399px] h-[53px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0">
                </input>
                <button
                    type='button'
                    onClick={checkNicknameDuplicate}
                    className="absolute left-[1264px] top-[790px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                    <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
                </button>

                {/* 휴대폰번호 */}
                <div className="absolute left-[534px] top-[905px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">휴대폰번호 </span><span className="text-[#c2a55d]">*</span></div>
                <div className="absolute left-[748px] top-[905px] w-[214px] text-[17px] font-['Inter'] text-[#000]">{userInfo.userPhone}</div>
                <button
                    onClick={openPhoneModal}
                    type='button'
                    className="absolute left-[894px] top-[891px] w-[121px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]">
                    <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">변경하기</span>
                </button>

                {/* 이름 */}
                <div className="absolute left-[534px] top-[1002px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">이름</div>
                <div className="absolute left-[748px] top-[987px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">{userInfo.userName}</div>

                {/* 성별 */}
                <div className="absolute left-[534px] top-[1105px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">성별</div>
                <button
                    type='button'
                    onClick={() => handleGenderChange('M')} // 성별 수정 함수 호출
                    className={`absolute left-[748px] top-[1091px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid rounded-[45px] 
                    ${values.userGender === 'M' ? 'border-[#0b2d85]' : 'border-[#7d8597]'}`}>
                    <div className={`text-[17px] font-['Inter'] flex flex-col justify-center pl-6 
                            ${values.userGender === 'M' ? 'text-[#0b2d85] font-semibold' : 'text-[#7d8597]'}`}>
                        남
                    </div>
                    <img
                        className="absolute top-[13px] left-[18px]"
                        width="21"
                        height="27"
                        src={values.userGender === 'M' ? '/img/user/check (1)117_493.png' : '/img/user/check 1117_496.png'}
                    />
                </button>

                <button
                    type='button'
                    onClick={() => handleGenderChange('F')} // 성별 수정 함수 호출
                    className={`absolute left-[860px] top-[1091px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid rounded-[45px] 
                    ${values.userGender === 'F' ? 'border-[#0b2d85]' : 'border-[#7d8597]'}`}>
                    <div className={`text-[17px] font-['Inter'] flex flex-col justify-center pl-6 
                            ${values.userGender === 'F' ? 'text-[#0b2d85] font-semibold' : 'text-[#7d8597]'}`}>
                        여
                    </div>
                    <img
                        className="absolute top-[13px] left-[18px]"
                        width="21"
                        height="27"
                        src={values.userGender === 'F' ? '/img/user/check (1)117_493.png' : '/img/user/check 1117_496.png'}
                    />
                </button>
                {/* 주소 */}
                <div className="absolute left-[538px] top-[1210px] w-[210px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">주소</div>
                <button
                    type='button'
                    onClick={findPostCode}
                    className="absolute left-[748px] top-[1192px] w-[169px] h-[55px] bg-[#fff] border-[2px] border-solid border-[#0b2d85] rounded-[5px]">
                    <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">우편번호 찾기</span>
                </button>
                <input
                    type='text'
                    id='mainaddress'
                    value={values.mainAddress}
                    readOnly
                    className="absolute left-[927px] top-[1192px] w-[459px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] outline-0 pl-6"></input>
                <input
                    id='detailedAddress'
                    type='text'
                    placeholder='상세주소를 입력해주세요.'
                    value={values.detailedAddress}
                    onChange={handleInputChange}
                    className="absolute left-[748px] top-[1260px] w-[638px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] pl-6 outline-0"></input>

                {/* 마케팅활용동의 */}
                <div className="absolute left-[534px] top-[1402px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">마케팅활용동의</div>
                <img
                    onClick={agreeCheck}
                    className="absolute left-[748px] top-[1401px]"
                    width="24"
                    height="24"
                    src={values.marketingAgree === 'Y' ? '/img/user/button 1117_127.png' : '/img/user/rec (1) 1117_135.png'}
                />
                <button
                    type='button'
                    onClick={agreeCheck}
                    className="absolute left-[781px] top-[1397px] w-[48px] h-[33px] text-[17px] font-['Inter'] text-[#000]">수신</button>
                <img
                    onClick={disagreeCheck}
                    className="absolute left-[849px] top-[1401px]"
                    width="24"
                    height="24"
                    src={values.marketingAgree === 'N' ? '/img/user/button 1117_127.png' : '/img/user/rec (1) 1117_135.png'}
                />
                <button
                    type='button'
                    onClick={disagreeCheck}
                    className="absolute left-[886px] top-[1397px] w-[49px] h-[33px] text-[17px] font-['Inter'] text-[#000]">거부</button>           </form>

            <div className="absolute left-[420px] top-[1526px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
            <div className="absolute left-[422px] top-[1600px] text-[17px] text-[#7d8597] whitespace-nowrap"><span className="font-['Inter']">회원을 탈퇴 하시겠습니까?   </span>
                <span
                    onClick={handlerDelete}
                    style={{ cursor: 'pointer' }}
                    className="font-['Inter'] font-semibold">회원탈퇴</span></div>
            <div className="absolute left-[1372px] top-[1851px] text-[24px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">내정보 변경</div>
            <div className="absolute left-[1113px] top-[1690px] w-[387px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">취소</div>
                </div>
                <div className="absolute left-[203px] top-0 w-[184px] h-[60px] flex">
                    <button
                        type='submit'
                        form='form'
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">내정보 변경</span>
                    </button>
                </div>
            </div>


            <div className="absolute left-0 top-[1869px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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
            {isPhoneModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closePhoneModal}></div>
                    <PhoneVerificationModal onClose={closePhoneModal} />
                </>
            )}
            {isPasswordModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closePasswordModal}></div>
                    <ChangePasswordModal onClose={closePasswordModal} currentPw={currentPw} />
                </>
            )}
        </>
    )
}

export default MypageModifyInf