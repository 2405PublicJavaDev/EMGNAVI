import { useState, EventHandler, ReactNode, useEffect } from 'react'
import ChangePasswordModal from './ChangePasswordModal';
import PhoneVerificationModal from './PhoneVerificationModal';
import useAxios from '../../axios/useAxios';

const MypageModifyInf = () => {
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
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
    const { fetchData, loading, error } = useAxios();
    const [userInfo, setUserInfo] = useState(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId && isInitialLoad) {
            fetchData(
                {
                    method: 'POST',
                    url: '/api/getInf',
                    data: { userId }
                },
                (data) => {
                    setUserInfo(data);
                    const fullAddress = data.userAddress || '';
                    const lastIndex = fullAddress.lastIndexOf(" ");
                    setValues({
                        newNickname: data.userNickname || '',
                        mainAddress: fullAddress.substring(0, lastIndex),
                        detailedAddress: fullAddress.substring(lastIndex + 1),
                    });
                    setIsInitialLoad(false);
                }
            );
        }
    }, [isInitialLoad, fetchData]);

    const [values, setValues] = useState({
        newNickname: '',
        mainAddress: '',       // 기본 주소 상태 추가
        detailedAddress: '',    // 상세 주소 상태 추가
    });

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
        // 우편번호 찾기 버튼을 누르면 즉시 주소 필드를 비웁니다.
        // setValues(prevValues => ({
        //     ...prevValues,
        //     mainAddress: '',
        //     detailedAddress: '',
        // }));

        new window.daum.Postcode({
            oncomplete: function (data) {
                const fullAddress = data.zonecode + " " + data.address;
                setValues(prevValues => ({
                    ...prevValues,
                    mainAddress: fullAddress,
                    detailedAddress: '', // 상세주소는 초기화 상태를 유지합니다.
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

    const handleModify = () => {
        const fullAddress = document.getElementById("mainaddress").value + " " + document.getElementById("detailedAddress").value;
        console.log(fullAddress);
        fetchData(
            {
                method: 'POST',
                url: '/api/modfy',
                data: {
                    userNickname: values.newNickname,
                    userAddress: fullAddress
                }
            },
            (response) => {
                console.log('수정 완료:', response);
                // 여기에 성공 메시지 표시 로직 추가
            }
        );
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
                className="absolute left-[748px] top-[678px] w-[121px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]">
                <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">변경하기</span>
            </button>

            {/* 닉네임 */}
            <div className="absolute left-[534px] top-[806px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">닉네임 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[790px] w-[506px] h-[55px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
            <input
                value={values.newNickname || userInfo.userNickname || ''}
                onChange={handleInputChange}
                type='text'
                id='nickname'
                className="absolute left-[775px] top-[791px] w-[399px] h-[53px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center outline-0">
            </input>
            <button
                type='button'
                // onClick={checkNicknameDuplicate}
                className="absolute left-[1264px] top-[790px] w-[122px] h-[55px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]">
                <span className="text-[18px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">중복확인</span>
            </button>

            {/* 휴대폰번호 */}
            <div className="absolute left-[534px] top-[905px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold"><span className="text-[#000]">휴대폰번호 </span><span className="text-[#c2a55d]">*</span></div>
            <div className="absolute left-[748px] top-[905px] w-[214px] text-[17px] font-['Inter'] text-[#000]">{userInfo.userPhone}</div>
            <button
                onClick={openPhoneModal}
                className="absolute left-[894px] top-[891px] w-[121px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]">
                <span className="text-[17px] font-['Inter'] text-[#000] text-center flex flex-col justify-center">변경하기</span>
            </button>

            {/* 이름 */}
            <div className="absolute left-[534px] top-[1002px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">이름</div>
            <div className="absolute left-[748px] top-[987px] w-[479px] h-[53px] text-[17px] font-['Inter'] text-[#000] flex flex-col justify-center">{userInfo.userName}</div>

            {/* 성별 */}
            console.log(userInfo.userGender)
            <div className="absolute left-[534px] top-[1105px] w-[214px] h-[23px] text-[18px] font-['Inter'] font-semibold text-[#000] flex flex-col justify-center">성별</div>
            <div className="absolute left-[748px] top-[1091px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[45px]"></div>
            <div className="absolute left-[803px] top-[1091px] w-[18px] h-[51px] text-[17px] font-['Inter'] text-[#7d8597] flex flex-col justify-center">남</div>
            <div className="absolute left-[856px] top-[1091px] w-[96px] h-[51px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[45px]"></div>
            <div className="absolute left-[911px] top-[1091px] w-[18px] h-[51px] text-[17px] font-['Inter'] text-[#0b2d85] flex flex-col justify-center">여</div>
            <img className="absolute left-[875px] top-[1103px]" width="21" height="27" src="/img/user/check (1)117_493.png"></img>
            <img className="absolute left-[767px] top-[1103px]" width="21" height="27" src="/img/user/check 1117_496.png"></img>

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
            <div className="absolute left-[785px] top-[1402px] w-[48px] h-[33px] text-[17px] font-['Inter'] text-[#000]">수신</div>
            <div className="absolute left-[886px] top-[1402px] w-[49px] h-[33px] text-[17px] font-['Inter'] text-[#000]">거부</div>
            <img className="absolute left-[748px] top-[1401px]" width="24" height="24" src="/img/user/button 1117_127.png"></img>
            <img className="absolute left-[849px] top-[1401px]" width="24" height="24" src="/img/user/rec (1) 1117_135.png"></img>
        </form>

        <div className="absolute left-[420px] top-[1526px] w-[1080px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
        <div className="absolute left-[422px] top-[1600px] text-[17px] text-[#7d8597] whitespace-nowrap"><span className="font-['Inter']">회원 탈퇴를 하시겠습니까?   </span><span className="font-['Inter'] font-semibold">회원탈퇴</span></div>
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
                <ChangePasswordModal onClose={closePasswordModal} />
            </>
        )}
    </>
)
}

export default MypageModifyInf