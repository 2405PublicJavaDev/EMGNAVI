
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'
import StyledHTMLContent from '../common/StyledHTMLContent';
import { formatDate } from '../common/dateUtil';
import { UserContext } from '../../UserContext';

const GetNoticeDetail = () => {
    const [searchParams] = useSearchParams();
    const noticeId = searchParams.get('noticeId');  // 쿼리 파라미터에서 'noticeId' 값 가져오기
    const [notice, setNotice] = useState(null);

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
                console.log('data: ' + data);
                if (data === 1) {
                    //성공 처리
                    console.log('공지사항 삭제 성공');
                    alert('공지사항 삭제 성공');
                    window.location.href = 'https://127.0.0.1:3000/notice/getNoticeList';
                } else {
                    console.log('공지사항 삭제 실패');
                    alert('공지사항 삭제 실패');
                }
            })
            .catch(error => {
                console.error('Error fetching notice data:', error);
            });
    };

    useEffect(() => {
        if (notice) {
            console.log(notice);
        }
    }, [notice])

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[100%] h-[2143px] relative">

                <div className="absolute left-0 top-[1911px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
                    <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
                        <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
                        <img className="absolute left-0 top-0" width="117" height="100" src="/img/user/logo.png"></img>
                    </div>
                    <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
                        <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
                            <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
                            <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/user/copyright (1) 1150_102.png"></img>
                        </div>
                        <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
                    </div>
                    <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/user/Group 17150_104.png"></img>
                </div>

                <div className="absolute w-[100%] h-[1911px] top-0 left-0">
                    <div className="absolute w-[100%] h-[1787px] top-[124px] left-0">
                        <div className="relative h-[1787px]">
                            <div className="absolute w-[100%] h-[194px] top-0 left-0 bg-[#0b2d85]">
                                {notice ? (
                                    <div className="w-[145px] h-[38px] top-[38px] left-[335px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[normal] whitespace-nowrap absolute tracking-[0]">
                                        {notice.noticeTitle}

                                    </div>
                                ) : (
                                    <p>공지사항을 불러오는 중입니다...</p>
                                )}
                            </div>
                            <div className="absolute w-[1300px] h-[1675px] top-[119px] left-[310px] rounded-[10px_10px_0px_0px] overflow-hidden">
                                {/* 페이지네이션 위치 주석처리함 */}
                                {/* <div className="absolute w-[949px] h-16 top-[1546px] left-[178px] bg-[url(/img/notice/image-55.png)] bg-cover bg-[50%_50%]" /> */}
                                <div className="absolute w-[1300px] h-[1505px] top-0 left-0">

                                    <div id='noticeContent' className="bg-white h-[calc(100vh-200px)] border-t border-solid border-[#e5e7eb] p-10">
                                        {/* 공지 내용이 들어갈 부분 */}
                                        {notice ? (
                                            <div>
                                                <p>{notice.writerId} | {formatDate(notice.noticeDate)}</p>
                                                <br />
                                                <StyledHTMLContent htmlContent={notice.noticeContents} />
                                            </div>
                                        ) : (
                                            <p>공지사항을 불러오는 중입니다...</p>
                                        )}
                                        {userId == 'admin' ? (
                                            <div className="flex space-x-4">
                                                <button onClick={() => window.location.href = 'putNotice?noticeId=' + notice.noticeId} className="w-[100px] h-[35px] bg-[#f3f5f9] border-[1px] border-solid border-[#e3e9ef] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#000]">수정</button>
                                                <button onClick={() => handleDeleteBtn(notice.noticeId)} className="w-[100px] h-[35px] bg-[#0b2d85] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#fff] text-center">삭제</button>
                                            </div>) : ('')}
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