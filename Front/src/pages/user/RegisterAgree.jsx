import { useState, EventHandler, ReactNode, useEffect } from 'react'
import uncheckImage from '../../../public/img/user/check-mark (1) 1343_312.png';
import checkImage from '../../../public/img/user/checked (1) 2324_219.png';
import uncheckBox from '../../../public/img/user/square 199_14.png';
import checkBox from '../../../public/img/user/black-check-box-with-white-check.png';
import { useNavigate } from 'react-router-dom';

const RegisterAgree = () => {
    const [isUpChecked, setIsUpChecked] = useState(false); // 체크 상태 관리
    const [isDownChecked, setIsDownChecked] = useState(false); // 체크 상태 관리
    const [isBothChecked, setIsBothChecked] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        if (isUpChecked && isDownChecked) {
            setIsBothChecked(true);
        } else {
            setIsBothChecked(false);
        }
    })

    const upToggleCheck = () => {
        setIsUpChecked(!isUpChecked); // 체크 상태 토글
    };
    const downToggleCheck = () => {
        setIsDownChecked(!isDownChecked); // 체크 상태 토글
    };

    const bothToggleCheck = () => {
        const newCheckState = !isBothChecked
        setIsBothChecked(newCheckState);
        setIsUpChecked(newCheckState);
        setIsDownChecked(newCheckState);
    }

    const handlerGoNextPage = () => {
        if (isBothChecked) {
            nav("/user/register/verify");
        } else {
            alert("이용약관에 동의해주세요.");
        }
    }

    return (
        <>
            <div className="absolute left-0 top-[245px] w-[1919px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">일반 회원가입</div>
            <div className="absolute left-[461px] top-[645px] w-[133px] h-[47px] text-[24px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
            <div className="absolute left-0 top-[324px] w-[1919px] text-[15px] font-['Inter'] text-[#7d8597] text-center">회원가입 시 즐겨찾기, 리뷰작성 등 개인화 서비스를 제공받으실 수 있습니다.</div>
            <div className="absolute left-[262px] top-[443px] w-[1392px] h-[89px] flex">
                <div className="absolute left-[4px] top-[84px] w-[1388px] h-0 border-[1px] border-solid border-[#7d8597]"></div>
                <div className="absolute left-0 top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#000]">약관 동의</div>
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#0b2d85] rounded-full"></div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#0b2d85] whitespace-nowrap">STEP 1.</div>
                </div>
                <div className="absolute left-[349px] top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">본인인증</div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 2.</div>
                </div>
                <div className="absolute left-[698px] top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">회원정보 입력</div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 3.</div>
                </div>
                <div className="absolute left-[1047px] top-0 w-[199px] h-[89px] flex">
                    <div className="absolute left-[2px] top-[79px] w-[10px] h-[10px] bg-[#7d8597] rounded-full"></div>
                    <div className="absolute left-0 top-[25px] w-[199px] h-[47px] text-[18px] font-['Inter'] font-semibold text-[#7d8597]">회원가입 완료</div>
                    <div className="absolute left-[2px] top-0 text-[13px] font-['Inter'] text-[#7d8597] whitespace-nowrap">STEP 4.</div>
                </div>
            </div>
            <div className="absolute left-[460px] top-[710px] w-[1000px] h-[519px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[20px]"></div>
            <div className="absolute left-[485px] top-[843px] w-[949px] text-[16px] leading-[35px] font-['Inter'] font-medium text-[#7d8597]">제 1장 총직<br />제 1조 (목적)<br />이 약관은 '응급NAVI' (이하 '병원')에서 제공하는 인터넷 관련 서비스를 이용함에 있어 병원과 회원의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.<br />제 2조 (약관의 효력과 변경)<br />(1) 이 약관은 서비스를 통하여 이를 공지함으로써 효력이 발생합니다.<br />(2) 병원은 사정상 중요한 사유가 발생될 경우 이 약관을 변경할 수 있으며, 개정 최소 2일전부터 공지할 것이며 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생됩니다.<br />(3) 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.</div>
            <div className="absolute left-[1296px] top-[1899px] w-[205px] h-[27px] text-[18px] font-['Inter'] font-medium text-[#000]">위 내용에 모두 동의함</div>
            <img className="absolute left-[1258px] top-[1902px]" width="20" height="20"
                onClick={bothToggleCheck}
                src={isBothChecked ? checkBox : uncheckBox}
                style={{ cursor: 'pointer' }}>
            </img>
            <div className="absolute left-0 top-0 w-[1920px] h-[161px] overflow-hidden">

            </div>
            <div className="absolute left-[765px] top-[2041px] w-[390px] h-[60px] flex">
                <div className="absolute left-0 top-0 w-[184px] h-[60px] flex">
                    <div className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#fff] border-[1px] border-solid border-[#0b2d85] rounded-[50px]"></div>
                    <div className="absolute left-0 top-[19px] w-[184px] text-[16px] font-['Inter'] text-[#0b2d85] text-center">가입 취소</div>
                </div>
                <div className="absolute left-[206px] top-0 w-[184px] h-[60px] flex">
                    <button onClick={handlerGoNextPage}
                        className="absolute left-0 top-0 w-[184px] h-[60px] bg-[#0b2d85] border-[1px] border-solid border-[#0b2d85] rounded-[50px]">
                        <span className="text-[16px] font-['Inter'] font-bold text-[#fff] text-center">다음 단계</span>
                    </button>
                </div>
            </div>
            <div className="absolute left-[461px] top-[711px] w-[998px] h-[103px] bg-[#f5f7f9] rounded-tl-[19px] rounded-tr-[19px] rounded-br-0 rounded-bl-0"></div>
            <div className="absolute left-[496px] top-[750px] w-[145px] h-[25px] text-[20px] font-['Inter'] font-semibold"><span className="text-[#000]">이용약관</span><span className="text-[#c2a55d]"> (필수)</span></div>
            <div className="absolute left-[460px] top-[1290px] w-[1000px] h-[519px] bg-[#fff] border-[1px] border-solid border-[#7d8597] rounded-[20px]"></div>
            <div className="absolute left-[485px] top-[1423px] w-[949px] text-[16px] leading-[35px] font-['Inter'] font-medium text-[#7d8597]">응급NAVI (이하 병원 이라 함)은 귀하의 개인정보보호를 매우 중요시하며, 『개인정보보호법』 을 준수하고 있습니다 병원은 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br />이 개인정보처리방침의 순서는 다음과 같습니다.<br />1. 수집하는 개인정보의 항목 및 수집방법<br />2. 개인정보의 수집 및 이용목적<br />3. 개인정보의 보유 및 이용기간 및 파기절차 및 파기방법<br />4. 이용자 및 법정대리인의 권리와 그 행사방법<br />5. 개인정보의 제공 및 공유<br />6. 개인정보의 위탁</div>
            <div className="absolute left-[461px] top-[1291px] w-[998px] h-[103px] bg-[#f5f7f9] rounded-tl-[19px] rounded-tr-[19px] rounded-br-0 rounded-bl-0"></div>
            <div className="absolute left-[1315px] top-[1331px] w-[108px] h-[23px] text-[18px] font-['Inter'] font-medium text-[#000] text-center">동의합니다.</div>
            <img className="absolute left-[1288px] top-[1333px]" width="20" height="20"
                onClick={upToggleCheck}
                src={isUpChecked ? checkImage : uncheckImage}
                style={{ cursor: 'pointer' }}>
                </img>
            <div className="absolute left-[1315px] top-[751px] w-[108px] h-[23px] text-[18px] font-['Inter'] font-medium text-[#000] text-center">동의합니다.</div>
            <img className="absolute left-[1288px] top-[753px]" width="20" height="20"
                onClick={downToggleCheck}
                src={isDownChecked ? checkImage : uncheckImage}
                style={{ cursor: 'pointer' }}>
                </img>
            <div className="absolute left-[496px] top-[1330px] w-[262px] h-[25px] text-[20px] font-['Inter'] font-semibold"><span className="text-[#000]">개인정보 수집 및 이용</span><span className="text-[#c2a55d]"> (필수)</span></div>
            <div className="absolute left-0 top-[2252px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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
        </>
    )
}
export default RegisterAgree
