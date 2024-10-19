import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PharmacySearch = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchCategory, setSearchCategory] = useState('기관명');
    const [showCategoryList, setShowCategoryList] = useState(false);
    const [pharmacies, setPharmacies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 7;

    const categories = ['기관명', '주소', '전화번호'];

    useEffect(() => {
        fetchPharmacies();
    }, [currentPage]);

    const fetchPharmacies = async () => {
        try {
            console.log('Fetching pharmacies...');
            const response = await axios.get(`/api/pharmacy/list?page=${currentPage}&size=${itemsPerPage}`);
            console.log('API Response:', response.data);
            setPharmacies(response.data.pharmacies || []);
            setTotalPages(response.data.totalPages || 0);
        } catch (error) {
            console.error('Error fetching pharmacies:', error);
            console.error('Error details:', error.response?.data);
            setPharmacies([]);
            setTotalPages(0);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = async () => {
        try {
            console.log('Searching pharmacies...');
            const response = await axios.get(`/api/pharmacy/search?${searchCategory}=${searchQuery}&page=0&size=${itemsPerPage}`);
            console.log('Search API Response:', response.data);
            setPharmacies(response.data.pharmacies || []);
            setTotalPages(response.data.totalPages || 0);
            setCurrentPage(0);
        } catch (error) {
            console.error('Error searching pharmacies:', error);
            console.error('Error details:', error.response?.data);
            setPharmacies([]);
            setTotalPages(0);
        }
    };

    const toggleCategoryList = () => {
        setShowCategoryList(!showCategoryList);
    };

    const selectCategory = (category) => {
        setSearchCategory(category);
        setShowCategoryList(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="pt-[165px] w-full bg-white"></div>
            <div className="flex-grow relative w-[100%] bg-[#fff] overflow-hidden" style={{marginTop: '-161px'}}>
                <div className="relative w-[100%] h-[900px] bg-[#fff] overflow-hidden">
                    <div className="absolute left-[-3px] top-[124px] w-[1923px] h-[170px] bg-[#0b2d85]"></div>
                    <div className="absolute left-[-5px] top-[161px] w-[100%] h-[725px] overflow-hidden">
                        <div className="absolute left-[212px] top-0 w-[333px] h-[57px] text-[25px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">
                            약국 조회
                        </div>
                        <div className="absolute -translate-y-1/2 right-[198px] top-[calc(50%+-36px)] w-[1460px] h-[535px] flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#fff] rounded-[5px] overflow-hidden shadow-sm border-[#0000001a]">
                            {pharmacies.length > 0 ? (
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#cccccc1a]">
                                            <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">번호</th>
                                            <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">기관명</th>
                                            <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">주소</th>
                                            <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">전화번호</th>
                                            <th className="py-[24px] text-[16px] font-['Roboto'] font-bold text-[#000] text-center">상세정보</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pharmacies.map((pharmacy, index) => (
                                            <tr key={pharmacy.hpid} className="h-[68px]">
                                                <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{currentPage * itemsPerPage + index + 1}</td>
                                                <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{pharmacy.dutyName}</td>
                                                <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{pharmacy.dutyAddr}</td>
                                                <td className="text-[16px] font-['Roboto'] font-medium text-[#000] text-center">{pharmacy.dutyTel1}</td>
                                                <td className="text-center">
                                                    <button className="w-[80px] h-[36px] bg-[#0b2d85] rounded-[8px] text-[14px] font-['Roboto'] font-bold text-[#fff]">
                                                        상세정보
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[16px] font-['Roboto'] font-medium text-[#000]">
                                    데이터를 불러오는 중이거나 데이터가 없습니다.
                                </div>
                            )}
                        </div>
                        
                        {/* Pagination */}
                        <div className="absolute left-[920px] top-[615px] w-[190px] h-[55px] bg-[#fff] overflow-hidden flex">
                            {[...Array(totalPages).keys()].map((number) => (
                                <div key={number} className="w-[35px] h-[35px] mx-[5px] flex items-center justify-center cursor-pointer" onClick={() => handlePageChange(number)}>
                                    <div className="absolute text-center bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold">
                                        {number + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* 검색창 */}
                        <div className="absolute left-[760px] top-[670px] w-[416px] h-[37px] flex justify-center">
                            <select 
                                className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]"
                                value={searchCategory}
                                onChange={(e) => setSearchCategory(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="약국을 검색해보세요"
                                className="border p-2 w-[250px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#0000001a] rounded-l-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button 
                                className="bg-[#0b2d85] text-white px-4 h-[36px] text-[18px] rounded-r-md"
                                onClick={handleSearch}
                            >
                                검색
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer 영역 */}
            <footer className="w-full bg-black text-white py-8 mt-auto">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/img/footer/logo.png" alt="응급NAVI" width="117" height="100" />
                        <div className="ml-4 text-xl font-bold">응급NAVI</div>
                    </div>
                    <div className="text-gray-400 text-sm">
                        서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원 | 대표전화: 1544-9970
                        <br />
                        © 2024 응급NAVI. All Rights Reserved.
                    </div>
                    <img src="/img/footer/group.png" alt="Group" width="145" height="34" />
                </div>
            </footer>
        </div>
    );
};

export default PharmacySearch;