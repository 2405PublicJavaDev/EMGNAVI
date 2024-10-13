import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../axios/useAxios';

const ChangePasswordModal = ({ onClose, currentPw }) => {
    const nav = useNavigate();
    const [pwImageSrc, setPwImageSrc] = useState(null);
    const [password, setPassword] = useState();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [cpwImageSrc, setCpwImageSrc] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

    const [isPossibleChange, setIsPossibleChange] = useState(false);
    const { fetchData, loading, error } = useAxios();

    const userId = localStorage.getItem('userId');

    const handelrCurrentPw = (value) => {
        console.log(value);
        console.log(currentPw);
        
        if (value === currentPw) {
            console.log("일치");
            setIsPossibleChange(true);
        } else {
            console.log("불일치");
            setIsPossibleChange(false);
        }
    }

    const handlerChangeNewPw = () => {
        if (!password) {
            alert("비밀번호를 입력해주세요.");
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
        if (pwImageSrc !== "/img/user/green.png") {
            alert("비밀번호를 다시 확인해주세요.");
            return;
        }
        if (isPossibleChange) {
            console.log("비번변경가능");
            if (password) {
                fetchData(
                    {
                        method: 'POST',
                        url: '/api/changePw',
                        data: { 
                            userId : userId,
                            userPw : password },
                    },
                    (data) => {
                        console.log(data);
                        if (data.includes('성공')) {
                            alert("비밀번호가 변경되었습니다");
                            onClose();
                        } else {
                            alert("비밀번호 변경 실패");
                        }
                    }
                )
            }
        } else {
            console.log("변경불가능");
            alert("현재 비밀번호가 일치하지 않습니다")
        }

    }

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
                setPwImageSrc("/img/user/green.png");
            }
        }

        else {
            setPwImageSrc(null);
        }
    };

    const handlerConfirmPwChange = (value) => {
        setConfirmPassword(value);

        if (value.length > 0) {
            if (value === password) {
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
            <div className="w-[1920px] h-[1243px] fixed top-0 left-0px right-0 bottom-0 flex items-center justify-center z-50">
                <div className="relative w-[600px] h-[935px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[600px] h-[670px] bg-[#fff] rounded-[40px]"></div>
                    <div className="absolute left-[73px] top-[194px] w-[453px] h-[75px] flex">
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">현재 비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
                        <input
                            type='password'
                            id='inputCurrentPw'
                            placeholder='현재 비밀번호를 입력해주세요.'
                            onChange={(e) => handelrCurrentPw(e.target.value)}
                            className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] text-[16px] font-['Inter'] text-[#7d8597] pl-6 outline-0">
                        </input>
                    </div>
                    <div className="absolute left-[73px] top-[304px] w-[453px] h-[105px] flex">
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">새로운 비밀번호 </span><span className="text-[#c2a55d]">*</span></div>
                        <input
                            type={isPasswordVisible ? 'type' : 'password'}
                            placeholder='새로운 비밀번호를 입력해주세요.'
                            onChange={(e) => handlerPwChange(e.target.value)}
                            className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] text-[16px] font-['Inter'] text-[#7d8597] pl-6 outline-0">
                        </input>
                        <img
                            onMouseDown={() => handleMouseDown('password')}
                            onMouseUp={() => handleMouseUp('password')}
                            onMouseLeave={() => handleMouseUp('password')}
                            style={{ cursor: 'pointer' }}
                            className="absolute left-[411px] top-[44px]" width="20" height="20"
                            src="/img/user/eye.png">
                        </img>
                        {pwImageSrc != null && (
                            <img
                                className="absolute left-[373px] top-[44px]" width="20" height="20"
                                src={pwImageSrc}>
                            </img>
                        )}
                        <div className="absolute left-[5px] top-[88px] w-[438px] h-[17px] text-[14px] font-['Inter'] text-[#7d8597]">영문, 숫자포함 8자 이상 16자 이하로 입력해주세요.</div>
                    </div>
                    <div className="absolute left-[73px] top-[438px] w-[453px] h-[75px] flex">
                        <div className="absolute left-0 top-0 w-[169px] h-[31px] text-[16px] font-['Inter'] font-medium"><span className="text-[#000]">새로운 비밀번호 확인 </span><span className="text-[#c2a55d]">*</span></div>
                        <input
                            type={isCPasswordVisible ? 'type' : 'password'}
                            placeholder='비밀번호를 한번 더 입력해주세요.'
                            onChange={(e) => handlerConfirmPwChange(e.target.value)}
                            className="absolute left-0 top-[31px] w-[453px] h-[44px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] text-[16px] font-['Inter'] text-[#7d8597] pl-6 outline-0">
                        </input>
                        <img
                            onMouseDown={() => handleMouseDown('confirmPassword')}
                            onMouseUp={() => handleMouseUp('confirmPassword')}
                            onMouseLeave={() => handleMouseUp('confirmPassword')}
                            style={{ cursor: 'pointer' }}
                            className="absolute left-[411px] top-[44px]" width="20" height="20"
                            src="/img/user/eye.png">
                        </img>
                        {cpwImageSrc != null && (
                            <img
                                className="absolute left-[373px] top-[44px]" width="20" height="20"
                                src={cpwImageSrc}>
                            </img>
                        )}
                    </div>
                    <div className="absolute left-[436px] top-[1025px] text-[30px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">변경하기</div>
                    <div className="absolute left-[1px] top-[87px] w-[599px] h-[30px] text-[32px] font-['Inter'] font-semibold text-[#000] text-center">비밀번호 변경</div>
                    <div className="absolute left-[168px] top-[569px] w-[266px] h-[41px] flex">
                        <div className="absolute left-0 top-0 w-[126px] h-[41px] flex">
                            <button
                                onClick={onClose}
                                className="absolute left-0 top-0 w-[126px] h-[41px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                                <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">닫기</span>
                            </button>
                        </div>
                        <div className="absolute left-[140px] top-0 w-[126px] h-[41px] flex">
                            <button
                                onClick={handlerChangeNewPw}
                                className="absolute left-0 top-0 w-[126px] h-[41px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                                <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">확인</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePasswordModal