import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicineSearch = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('itemName');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);  // 0부터 시작하는 페이지 인덱스
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const nav = useNavigate();

  const categories = [
    { value: 'itemName', label: '제품명' },
    { value: 'entpName', label: '업체명' },
  ];

  // 의약품 목록 가져오기 (페이징)
  const fetchMedicines = (page = 0) => {
    setIsLoading(true);
    setError(null);

    fetch(`/api/medicine/list?page=${page}&size=${itemsPerPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMedicines(data.medicines || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the medicine list!', error);
        setError('Failed to fetch medicines');
        setIsLoading(false);
      });
  };

  // 검색 요청 처리
  const handleSearch = (page = 0) => {
    if (!searchQuery) return;
    setIsLoading(true);
    setError(null);
    
    const queryParams = new URLSearchParams({
      [searchType]: searchQuery,
      page: page.toString(),
      size: itemsPerPage.toString()
    });
    
    const url = `/api/medicine/search?${queryParams}`;
    console.log(`Sending request to: ${url}`);
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Received data:', data);
        setMedicines(data.medicines || []);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error searching for medicine:', error);
        setError('Failed to search medicines');
        setIsLoading(false);
      });
  };

  // 엔터키로 검색 실행
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(0);  // 엔터키를 누르면 첫 페이지부터 검색 실행
    }
  };
  
  // 페이지 변경 핸들러
  const handlePageChange = (newPage) => {
    if (searchQuery) {
      handleSearch(newPage);
    } else {
      fetchMedicines(newPage);
    }
  };

  // 페이지네이션 렌더링
  const renderPageButtons = () => {
    const maxVisiblePages = 10;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

    const visiblePages = pageNumbers.slice(
      Math.floor(currentPage / maxVisiblePages) * maxVisiblePages,
      Math.floor(currentPage / maxVisiblePages) * maxVisiblePages + maxVisiblePages
    );

    return (
      <div className="mr-[5px] flex justify-center mt-8 space-x-2">
        {currentPage > 0 && (
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
            className={`${
              page === currentPage
                ? 'bg-white text-[#0b2d85] border-2 border-[#0b2d85]'
                : 'bg-[#0b2d85] text-white'
            } px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold`}
          >
            {page + 1} 
          </button>
        ))}

        {currentPage < totalPages - 1 && (
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

  useEffect(() => {
    fetchMedicines(0);  // 초기 페이지 로드 시 0 페이지(첫 페이지) 요청
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[1100px] bg-white">
        <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[90px]">
          {/* 검색창과 문구 고정 */}
          <h1 className="text-[52px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
            원하시는 의약품을 검색해 주세요
          </h1>

          <div className="flex justify-center mb-8">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}  
              placeholder="원하시는 제품의 이름을 검색해 주세요"
              className="border p-2 w-[360px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#0000001a] rounded-l-md"
            />
            <button
              onClick={() => handleSearch(0)}
              className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md"
            >
              검색
            </button>
          </div>

          {/* 검색 결과 */}
          <div className="overflow-auto w-full text-align-center">
            {isLoading ? (
              <div className="flex justify-center items-center h-[500px] text-[70px] font-roboto text-black">
                <p>의약품 정보 불러오는 중...</p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-[500px]">
                <p className="text-4xl">에러 발생: {error}</p>
              </div>
            ) : medicines.length === 0 ? (
              <div className="flex justify-center items-center h-[500px]">
                <p className="text-4xl">검색 결과가 없습니다.</p>
              </div>
            ) : (
              <table className="table-auto w-full border-collapse text-center shadow-lg rounded-lg border-color">
                <thead className="bg-[#cccccc1a]">
                  <tr>
                    <th className="py-4">번호</th>
                    <th className="py-4">업체명</th>
                    <th className="py-4">제품명</th>
                    <th className="py-4">공개일자</th>
                    <th className="py-4">상세 정보</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {medicines.map((item, index) => (
                    <tr key={item.itemSeq} className="border-b">
                      <td className="py-4 font-roboto text-base text-black">
                        {currentPage * itemsPerPage + index + 1}
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        {item.entpName}
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        {item.itemName.length > 8
                          ? item.itemName.slice(0, 8) + '...'
                          : item.itemName}
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        {item.openDe.split(' ')[0]}
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => nav(`/medicine/detail/${item.itemSeq}`)}
                          className="bg-[#0b2d85] text-white px-4 py-1 rounded-lg text-[14px] font-bold"
                        >
                          상세 정보
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* 페이지네이션 */}
          {!isLoading && !error && medicines.length > 0 && renderPageButtons()}
        </div>
      </div>

      <footer className="w-full bg-black text-white py-8 mt-10">
        <div className="flex justify-between items-center container mx-auto px-6">
          <div className="flex items-center">
            <img
              src="/img/footer/logo.png"
              alt="응급NAVI"
              width="117"
              height="100"
            />
            <div className="ml-4 text-xl font-bold">응급NAVI</div>
          </div>
          <div className="text-gray-400 text-sm">
            서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원 | 대표전화:
            1544-9970
            <br />
            © 2024 응급NAVI. All Rights Reserved.
          </div>
          <img src="/img/footer/group.png" alt="Group" width="145" height="34" />
        </div>
      </footer>
    </>
  );
};

export default MedicineSearch;
