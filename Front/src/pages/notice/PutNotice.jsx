import { useEffect, useContext, useState } from 'react';
import ToastUI from './ToastUI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const PutNotice = () => {

    const [searchParams] = useSearchParams();
    const noticeId = searchParams.get('noticeId');  // 쿼리 파라미터에서 'noticeId' 값 가져오기
    const [notice, setNotice] = useState(null);

    useEffect(() => {
        if (noticeId) {
            console.log(noticeId);
            fetch(`/api/notice/detail?noticeId=${noticeId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(res => {
                    setNotice(res.data); // 받아온 공지 데이터를 State에 저장
                })
                .catch(error => {
                    console.error('Error fetching hospital data:', error);
                });
        }
    }, []);

    const { userId } = useContext(UserContext);

    const nav = useNavigate();

    useEffect(() => {
        // userId가 ''이 아닐 때에만 동작
        if (userId !== '') {
            console.log(userId);
            if (userId === null || userId !== 'admin') {
                // 경고문구 출력 후 이전 페이지로 강제이동
                alert('관리자 계정이 아닙니다!');
                nav(-1);
            }
        }
    }, [userId]);

    return (
        <>

            <div className="w-[100%]">
                <div className="w-[100%] mt-[124px] h-[194px] top-0 left-0 bg-[#0b2d85]">
                    <div className="ml-[335px] mt-[39px] h-[124px] text-[32px] font-['Inter'] font-bold text-[#fff] flex flex-col justify-center">공지사항 작성</div>
                </div>
            </div>

            <div id='main' className="left-0 top-[124px] w-[100%]">
                <div id='container' className="ml-[310px] mt-[-75px] w-[1300px] bg-[#fff] rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-0 overflow-hidden">


                    <div className="ml-[19px] mt-[20px] w-[1246px]">
                        <div id="editor" className="left-0 top-0 w-[1246px]">
                            {notice ? (
                                <ToastUI initialValue={notice.noticeMarkdown} notice={notice} />) : (
                                <p>공지사항을 불러오는 중입니다...</p>
                            )}
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

export default PutNotice