import { useEffect, useContext } from 'react';
import ToastUI from './ToastUI';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const PostNotice = () => {

    const { userId } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        // userId가 ''이 아닐 때에만 동작
        if (userId !== '') {
            console.log(userId);
            if (userId === null || userId !== 'admin') {
                // 경고문구 출력 후 이전 페이지로 강제이동
                alert('관리자 계정이 아닙니다!');
                navigate(-1);
            }
        }
    }, [userId]);

    return (
        <>

            {/* footer */}
            {/* <div className="absolute left-0 top-[1189px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
                <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                    <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                    <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png"></img>
                </div>
                <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                    <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                        <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />&nbsp;&nbsp;&nbsp;&nbsp; 2024 응급NAVI.<br /></div>
                        <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/copyright"></img>
                    </div>
                    <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                </div>
                <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png"></img>
            </div> */}

            <div className="w-[100%]">
                <div className="w-[100%] mt-[124px] h-[194px] top-0 left-0 bg-[#0b2d85]">
                    <div className="ml-[335px] mt-[39px] h-[124px] text-[32px] font-['Inter'] font-bold text-[#fff] flex flex-col justify-center">공지사항 작성</div>
                </div>
            </div>

            <div id='main' className="left-0 top-[124px] w-[100%]">
                <div id='container' className="ml-[310px] mt-[-75px] w-[1300px] bg-[#fff] rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-0 overflow-hidden">


                    <div className="ml-[19px] mt-[20px] w-[1246px]">
                        <div id="editor" className="left-0 top-0 w-[1246px]">
                            <ToastUI />
                        </div>
                    </div>


                </div>
                <div className="w-full mt-[100px] bg-black py-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
                        <div className="mb-8 md:mb-0">
                            <img className="w-[117px] h-[100px]" src="/img/footer/logo.png" alt="Logo" />
                            <div className="mt-2 text-2xl font-black text-[#333] font-['Advent_Pro']">응급NAVI</div>
                        </div>

                        <div className="flex flex-col max-w-[638px]">
                            <div className="mb-4 text-sm font-bold text-[#686868] font-['Agdasima']">
                                이용약관              개인정보처리방침
                            </div>
                            <div className="text-sm leading-relaxed font-bold text-[#686868] font-['Agdasima']">
                                서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970
                                <br />
                                <span className="flex items-center">
                                    <img className="w-2 h-2 mr-1" src="/img/footer/copyright.png" alt="Copyright" />
                                    2024 응급NAVI.
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <img className="w-[145px] h-[34px]" src="/img/footer/group.png" alt="Group" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostNotice