import { useState, EventHandler, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../axios/useAxios';

const PhoneVerificationModal = ({ onClose }) => {
    const { response, error, loading, setConfig } = useAxios();
    const nav = useNavigate();
    const [phoneNumber, setphoneNumber] = useState("");
    const [isNext, setIsNext] = useState(false);  // 다음 페이지로 갈지 여부 상태

        const validatePhone = (e) => {
            e.preventDefault();
            const phoneNumber = document.querySelector("#phone").value;
            if (phoneNumber.length === 11 && /^\d*$/.test(phoneNumber)) {
                console.log(phoneNumber);
                setConfig({
                    method: 'POST',
                    url: `/api/verify/phone`,
                    data: {
                        phoneNumber: phoneNumber
                    },
                });
                return phoneNumber;
            } else {
                alert("휴대폰 번호를 다시 한번 확인해주세요");
                return null;
            }
        };

        const handlerGoNextPage = (e) => {
            e.preventDefault();
            // const phone = validatePhone(e); // 유효하지 않은 번호일 경우 다음 버튼 안눌리게
            const phone = document.querySelector("#phone").value; // 이건 그냥 핸드폰 번호 바로 받아와짐
            if (phone) {
                setphoneNumber(phone);  // 휴대폰 번호 설정
                setIsNext(true);  // 페이지 이동을 위한 상태 변경
            } else {
                alert("휴대폰 번호를 입력해주세요");
            }
        };

        useEffect(() => {
            if (isNext && phoneNumber) {
                nav("/user/register/page", { state: { phoneNumber } });
            }
        }, [isNext, phoneNumber]);


    

    return (
        <>
            <form id='form' onSubmit={validatePhone} autoComplete='off' className="w-[1920px] h-[1243px] fixed top-0 left-0px right-0 bottom-0 flex items-center justify-center z-50">
                <div className="relative w-[600px] h-[935px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[600px] h-[670px] flex">
                        <div className="absolute left-0 top-0 w-[600px] h-[670px] bg-[#fff] rounded-[40px]"></div>
                        <div className="absolute left-[196px] top-[304px] w-[250px] h-[42px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px]"></div>
                        <input
                            type='text'
                            className="absolute left-[196px] top-[363px] w-[250px] h-[42px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[5px] pl-4 outline-0"></input>
                        <button
                            id='send'
                            type='submit'
                            form='form'
                            // onClick={validatePhone}
                            className="absolute left-[466px] top-[304px] w-[71px] h-[42px] bg-[#7d8597] border-[1px] border-solid border-[#fff] rounded-[5px]">
                            <span className="text-[15px] font-['Inter'] text-[#fff] text-center flex flex-col justify-center">전송</span>
                        </button>
                        <input
                            id='phone'
                            type='text'
                            placeholder="01012345678"
                            className="absolute left-[197px] top-[305px] w-[248px] h-[40px] text-[15px] font-['Inter'] text-[#7d8597] flex flex-col justify-center pl-4 rounded-[5px] outline-0"></input>
                        <div className="absolute left-[1px] top-[87px] w-[599px] h-[30px] text-[32px] font-['Inter'] font-semibold text-[#000] text-center">휴대폰 본인인증</div>
                        <div className="absolute left-[59px] top-[205px] w-[150px] h-[30px] text-[17px] font-['Inter'] font-bold text-[#000]">본인인증 정보 입력</div>
                        <div className="absolute left-[59px] top-[310px] w-[96px] h-[30px] text-[16px] font-['Inter'] font-semibold text-[#000]">휴대폰 번호</div>
                        <div className="absolute left-[59px] top-[373px] w-[110px] h-[30px] text-[16px] font-['Inter'] font-semibold text-[#000]">인증번호 입력</div>
                        <div className="absolute left-[59px] top-[240px] w-[483px] h-0 border-[1px] border-solid border-[#000]"></div>
                        <div className="absolute left-[466px] top-[363px] w-[71px] h-[42px] bg-[#0b2d85] border-[1px] border-solid border-[#fff] rounded-[5px]"></div>
                        <div className="absolute left-[466px] top-[363px] w-[71px] h-[42px] text-[15px] font-['Inter'] text-[#fff] text-center flex flex-col justify-center">확인</div>
                    </div>
                    <div className="absolute left-[168px] top-[553px] w-[266px] h-[46px] flex">
                        <div className="absolute left-0 top-0 w-[126px] h-[46px] flex">
                            <button onClick={onClose}
                                className="absolute left-0 top-0 w-[126px] h-[46px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                                <span className="text-[16px] font-['Inter'] text-[#0b2d85] text-center flex flex-col justify-center">닫기</span>
                            </button>
                        </div>
                        <div className="absolute left-[140px] top-0 w-[126px] h-[46px] flex">
                            <button
                                type='button'
                                onClick={handlerGoNextPage}
                                className="absolute left-0 top-0 w-[126px] h-[46px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                                <span className="absolute left-[0px] top-[0px] w-[126px] h-[46px] text-[16px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">다음</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PhoneVerificationModal