import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [data, setData] = useState([]);

    const Icon = ({ children }) => (
        <div className="text-4xl text-[#0b2d85] mb-4">{children}</div>
    );

    // 백엔드에서 데이터 가져오기
    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/news');
            const cleanedItems = response.data.items.map(item => ({
                ...item,
                title: item.title
                    .replace(/<b>/g, '') // <b> 태그 제거
                    .replace(/<\/b>/g, '') // </b> 태그 제거
                    .replace(/&quot;/g, '"'), // &quot;를 일반 따옴표로 변경
                description: item.description
                    .replace(/<b>/g, '') // <b> 태그 제거
                    .replace(/<\/b>/g, '') // </b> 태그 제거
                    .replace(/&quot;/g, '"'), // &quot;를 일반 따옴표로 변경
            }));
            setData(cleanedItems); // items 배열이 포함된 경우
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews(); // 컴포넌트가 렌더링되면 뉴스 데이터를 가져옴
    }, []);

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <div className="fixed right-[50px] top-[160px] w-72 bg-white shadow-lg rounded-sm overflow-hidden z-50 border border-gray-200">
                    <div className="bg-[#0b2d85] p-3 flex items-center justify-between">
                        <h1 className="text-lg font-semibold text-white">최신 의료 뉴스</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="max-h-[calc(100vh-220px)] overflow-y-auto">
                        {data.length > 0 ? (
                            <div className="divide-y divide-gray-100">
                                {data.map((item, index) => (
                                    <div key={index} className="p-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                                        <h2 className="text-sm font-medium text-gray-800 mb-1 line-clamp-1">{item.title}</h2>
                                        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-[#0b2d85] hover:text-blue-700 font-medium flex items-center"
                                        >
                                            자세히 보기
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="flex-1 space-y-4 py-1">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* 히어로 섹션 */}
                <section className="bg-[#0b2d85] text-white pt-[300px] pb-[200px]">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">응급 NAVI</h1>
                        <p className="text-xl md:text-2xl text-center mb-8">당신의 건강을 위한 최적의 길을 안내합니다</p>
                        <div className="flex justify-center">
                            <button className="bg-white text-[#0b2d85] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                                지금 시작하기
                            </button>
                        </div>
                    </div>
                </section>

                {/* 특징 섹션 */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">응급 NAVI의 특징</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '⏱️', title: '실시간', description: '응급실 병상 가용 여부와 사고 정보를 실시간으로 제공합니다.' },
                                { icon: '📱', title: '스마트', description: '사용자 친화적인 인터페이스로 쉽고 빠르게 정보를 확인할 수 있습니다.' },
                                { icon: '🛡️', title: '안전', description: '신속한 의료 서비스 접근으로 생명을 지키는데 기여합니다.' },
                                { icon: '📍', title: '위치기반', description: '사용자 위치 기반으로 가장 가까운 의료 시설을 안내합니다.' },
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <Icon>{feature.icon}</Icon>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 소개 섹션 */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">응급 NAVI 소개</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            응급 NAVI는 실시간으로 응급실 병상 가용 여부와 근처 병원, 약국, 제세동기 위치 등 중요한 의료 정보를 제공하는 웹 플랫폼입니다.
                            우리는 위급한 환자들이 신속하게 병원을 찾아 치료받을 수 있도록 돕고, 의료 자원의 효율적 배분을 통해 국민의 생명을 보호하는 데 기여하고자 합니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: '🏥', title: '접근성', description: '내 위치를 기반으로 인근 의료시설 및 약국에 대한 정보를 제공합니다.' },
                                { icon: '🔍', title: '단순화', description: '사용자가 필요한 조건에 맞춰서 의료기관을 검색하거나 지도에서 간단하게 주변 정보를 조회할 수 있습니다.' },
                                { icon: '🌐', title: '다양성', description: '병원, 응급실 외에도 약국, 의약품, AED 등 다양한 의료, 응급 관련 정보를 제공합니다.' },
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                    <Icon>{item.icon}</Icon>
                                    <h3 className="text-xl font-semibold mb-2 text-[#0b2d85]">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 섹션 */}
                <section className="bg-[#0b2d85] text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">응급 상황에 대비하세요</h2>
                        <p className="text-xl mb-8">응급 NAVI와 함께 안전하고 신속한 의료 서비스를 경험하세요.</p>
                        <button className="bg-white text-[#0b2d85] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                            지금 이용하기
                        </button>
                    </div>
                </section>
            </div>

            <div className="absolute left-0 top-[2069px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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
    );
};


export default Index;