import { useEffect, useState } from 'react'
import Truncate from 'react-truncate';
import parse, { domToReact } from 'html-react-parser';

const GetNoticeList = () => {

    const [notices, setNotices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('itemName'); // 'itemName' 또는 'entpName'
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);  // 총 페이지 수
    const itemsPerPage = 10;

    const fetchNotices = (page = 1) => {

        setIsLoading(true);
        setError(null);

        // 페이지와 검색어 기반으로 데이터 요청
        fetch(`/api/notice/list?page=${page - 1}&size=${itemsPerPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNotices(data.data); // 받아온 공지 데이터를 State에 저장
            })
            .catch(error => {
                console.error('Error fetching hospital data:', error);
            });

        // .then((data) => {
        //     setNotices(data.notices);  // 백엔드에서 받은 의약품 데이터
        //     setTotalPages(data.totalPages);  // 백엔드에서 받은 총 페이지 수
        //     setIsLoading(false);
        // })
        // .catch((error) => {
        //     console.error('There was an error fetching the medicine list!', error);
        //     setError('Failed to fetch medicines');
        //     setIsLoading(false);
        // });
    };

    useEffect(() => {
        fetchNotices(currentPage);
    }, [currentPage]);

    const handleSearch = () => {
        if (!searchQuery) return;
        setIsLoading(true);
        setError(null);

        // 검색 쿼리를 바탕으로 API 요청
        fetch(`/api/notice/search?${searchType}=${searchQuery}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setNotices(data.notices);  // 검색된 데이터 설정
                setTotalPages(data.totalPages);  // 검색된 데이터에 대한 총 페이지 수 설정
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error searching for medicine:', error);
                setError('Failed to search medicines');
                setIsLoading(false);
            });
    };

    useEffect(() => {

    }, [notices]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageButtons = () => {
        const maxVisiblePages = 10;
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

        const visiblePages = pageNumbers.slice(
            Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages,
            Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + maxVisiblePages
        );

        return (
            <div className="mr-[5px] flex justify-center mt-8 space-x-2">
                {currentPage > maxVisiblePages && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold"
                    >
                        {'<'}
                    </button>
                )}

                {visiblePages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${page === currentPage
                            ? 'bg-white text-[#0b2d85] border-2 border-[#0b2d85]'
                            : 'bg-[#0b2d85] text-white'
                            } px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold`}
                    >
                        {page}
                    </button>
                ))}

                {currentPage < totalPages - maxVisiblePages + 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold"
                    >
                        {'>'}
                    </button>
                )}
            </div>
        );
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 블록 요소 제거 함수
    const blockToInline = (html) => {
        const blockElements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];

        return parse(html, {
            replace: (domNode) => {
                // if (domNode.name === 'div' || domNode.name === 'p' || domNode.name === 'h1' || domNode.name === 'li') {
                if (blockElements.includes(domNode.name)) {
                    return (
                        <>
                            <span>{domToReact(domNode.children)}</span>
                            <br />
                        </>
                    );
                }
            }
        });
    };

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
                                <div className="w-[145px] h-[38px] top-[38px] left-[335px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[normal] whitespace-nowrap absolute tracking-[0]">
                                    공지사항
                                </div>
                            </div>
                            <div className="absolute w-[1300px] h-[1675px] top-[119px] left-[310px] rounded-[10px_10px_0px_0px] overflow-hidden">
                                <div className="absolute w-[949px] h-16 top-[1546px] left-[178px] bg-[url(/img/notice/image-55.png)] bg-cover bg-[50%_50%]" />
                                <div className="absolute w-[1300px] h-[1505px] top-0 left-0">

                                    <div className="h-[calc(100vh-200px)] border-t border-solid border-[#e5e7eb]">
                                        {notices && notices.length > 0 ? (

                                            <div>
                                                {notices.map((notice) => (

                                                    <div id='div0' key={notice.noticeId} className="bg-white border-b border-gray-200 py-4 flex">
                                                        <div id='div1' className="flex-shrink-0 flex flex-col items-center text-sm text-gray-500 mb-2 w-[500px]">
                                                            <div className="flex items-center space-x-2">
                                                                <span>{notice.writerId}</span>
                                                                <span>&nbsp;|&nbsp;</span>
                                                                {/* <span>{notice.noticeDate}</span> */}
                                                                <span>{formatDate(notice.noticeDate)}</span>
                                                            </div>
                                                            <h2 className="text-xl font-bold mt-2 text-center">{notice.noticeTitle}</h2>
                                                        </div>
                                                        <div id='div2' className='flex-grow min-w-0'>
                                                            <Truncate lines={3} ellipsis={<span>... <span className="text-gray-400 hover:underline cursor-pointer">[상세보기]</span></span>}>
                                                                {blockToInline(notice.noticeContents)}
                                                            </Truncate>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        ) : (
                                            // 조회된 결과가 없을 때
                                            <div style={{ padding: '20px', textAlign: 'center', fontSize: '16px', color: '#999' }}>
                                                조회된 결과가 없습니다.
                                            </div>
                                        )}
                                        {/* 페이지네이션 */}
                                        {renderPageButtons()}
                                    </div>


                                    {/* <img
                                        className="h-[754px] top-[751px] absolute w-[1300px] left-0 object-cover"
                                        alt="Image"
                                        src="/img/notice/image-54.png"
                                    />
                                    <img
                                        className="h-[758px] top-0 absolute w-[1300px] left-0 object-cover"
                                        alt="Image"
                                        src="/img/notice/image-52.png"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetNoticeList