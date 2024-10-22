
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'
import StyledHTMLContent from '../common/StyledHTMLContent';
import { formatDate } from '../common/dateUtil';
import { UserContext } from '../../UserContext';

const GetNoticeDetail = () => {

    const nav = useNavigate();

    const [searchParams] = useSearchParams();
    const noticeId = searchParams.get('noticeId');  // 쿼리 파라미터에서 'noticeId' 값 가져오기
    const [notice, setNotice] = useState(null);
    const [prevNotice, setPrevNotice] = useState(null);
    const [nextNotice, setNextNotice] = useState(null);

    const { userId } = useContext(UserContext);

    useEffect(() => {
        if (noticeId) {
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
                    console.error('Error fetching notice data:', error);
                });
            fetch(`/api/notice/getBetweenId?noticeId=${noticeId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(res => {
                    setPrevNotice(res.PREV);
                    setNextNotice(res.NEXT);
                })
                .catch(error => {
                    console.error('Error fetching between notice id:', error);
                });;
        }
    }, [noticeId]);

    // 삭제 버튼 핸들러
    const handleDeleteBtn = (noticeId) => {

        const url = `/api/notice/delete?noticeId=${noticeId}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data === 1) {
                    //성공 처리
                    alert('공지사항 삭제 성공');
                    nav('/notice/getNoticeList');
                } else {
                    alert('공지사항 삭제 실패');
                }
            })
            .catch(error => {
                console.error('Error fetching notice data:', error);
            });
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[100%]">



                <div className="w-[100%]">
                    <div className="w-[100%] mt-[124px] left-0">
                        <div className="relative">
                            <div className="w-[100%] h-[194px] top-0 left-0 bg-[#0b2d85]">
                                {notice ? (
                                    <div className="w-[145px] h-[38px] top-[38px] left-[335px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[normal] whitespace-nowrap absolute tracking-[0]">
                                        {notice.noticeTitle}

                                    </div>
                                ) : (
                                    <p>공지사항을 불러오는 중입니다...</p>
                                )}
                            </div>
                            <div id='test' className='w-[100%] mt-[-75px]'>

                                <div className="w-[1300px] ml-[310px] rounded-[10px_10px_0px_0px]">
                                    {/* 페이지네이션 위치 주석처리함 */}
                                    {/* <div className="absolute w-[949px] h-16 top-[1546px] left-[178px] bg-[url(/img/notice/image-55.png)] bg-cover bg-[50%_50%]" /> */}
                                    <div className="w-[1300px]">

                                        <div id='noticeContent' className="bg-white border-t border-solid border-[#e5e7eb] p-10 rounded-[10px_10px_0px_0px]">
                                            {/* 공지 내용이 들어갈 부분 */}
                                            {notice ? (
                                                <div className='min-h-[400px]'>
                                                    <p>{notice.writerId} | {formatDate(notice.noticeDate)}</p>
                                                    <br />
                                                    <StyledHTMLContent htmlContent={notice.noticeContents} />
                                                </div>
                                            ) : (
                                                <p>공지사항을 불러오는 중입니다...</p>
                                            )}
                                            <div className="flex items-center justify-between w-full max-w-2xl mx-auto border border-gray-200 rounded-lg">
                                                <button className="flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                                                    onClick={() => prevNotice ? nav(`/notice/getNoticeDetail?noticeId=${prevNotice}`) : alert('현재 위치가 마지막 공지입니다!')}>
                                                    {/* <ChevronLeft className="w-4 h-4 mr-1" /> */}
                                                    Prev Notice
                                                </button>
                                                <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                                                    onClick={() => nav('/notice/getNoticeList')}>
                                                    All Notice
                                                </button>
                                                <button className="flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                                                    onClick={() => nextNotice ? nav(`/notice/getNoticeDetail?noticeId=${nextNotice}`) : alert('현재 위치가 최신 공지입니다!')}>
                                                    Next Notice
                                                    {/* <ChevronRight className="w-4 h-4 ml-1" /> */}
                                                </button>
                                            </div>
                                            {userId === 'admin' && (
                                                <div className="flex justify-end space-x-4 mt-4">
                                                    <button onClick={() => nav(`/notice/putNotice?noticeId=${notice.noticeId}`)} className="w-[100px] h-[35px] bg-[#f3f5f9] border border-gray-300 rounded-md text-md font-medium text-[#000] hover:bg-gray-200 transition-colors duration-200">
                                                        수정
                                                    </button>
                                                    <button onClick={() => handleDeleteBtn(notice.noticeId)} className="w-[100px] h-[35px] bg-[#0b2d85] rounded-md text-md font-medium text-white hover:bg-[#0a5a92] transition-colors duration-200">
                                                        삭제
                                                    </button>
                                                </div>
                                            )}
                                        </div>


                                    </div>
                                </div>
                                <div className="w-full bg-black py-10">
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

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default GetNoticeDetail