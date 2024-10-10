import React, { useState, useEffect } from 'react';

const MedicineSearch = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('itemName');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchMedicines = () => {
    setIsLoading(true);
    setError(null);
    fetch('/api/medicine/list')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const medicinesData = Array.isArray(data) ? data : [data];
        setMedicines(medicinesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the medicine list!', error);
        setError('Failed to fetch medicines');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleSearch = () => {
    if (!searchQuery) return;
    setIsLoading(true);
    setError(null);

    fetch(`/api/medicine/search?${searchType}=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const medicinesData = Array.isArray(data) ? data : [data];
        setMedicines(medicinesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error searching for medicine:', error);
        setError('Failed to search medicines');
        setIsLoading(false);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicines = medicines.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(medicines.length / itemsPerPage);
  const maxVisiblePages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageButtons = () => {
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
            className={`${
              page === currentPage
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

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[1100px] bg-white">
        <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[90px]">
          <h1 className="text-[52px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
            원하시는 의약품을 검색해 주세요
          </h1>

          <div className="flex justify-center mb-8">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]"
            >
              <option value="itemName">제품명</option>
              <option value="entpName">업체명</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="원하시는 제품의 이름을 검색해 주세요"
              className="border p-2 w-[360px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#0000001a] rounded-l-md"
            />
            <button
              onClick={handleSearch}
              className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md"
            >
              검색
            </button>
          </div>

          <div className="overflow-auto w-full">
            {isLoading ? (
              <p>Loading medicines...</p>
            ) : error ? (
              <p>{error}</p>
            ) : currentMedicines.length === 0 ? (
              <p>No medicines found</p>
            ) : (
              <table
                className="table-auto w-full border-collapse text-center shadow-lg rounded-lg border-color"
                style={{ tableLayout: 'fixed' }}
              >
                <thead className="bg-[#cccccc1a]">
                  <tr>
                    <th className="py-4" style={{ width: '10%' }}>번호</th>
                    <th className="py-4" style={{ width: '30%' }}>업체명</th>
                    <th className="py-4" style={{ width: '30%' }}>제품명</th>
                    <th className="py-4" style={{ width: '20%' }}>공개일자</th>
                    <th className="py-4" style={{ width: '10%' }}>상세 정보</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentMedicines.map((item, index) => (
                    <tr key={item.itemSeq} className="border-b">
                      <td className="py-4 font-roboto text-base text-black">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        <div className="truncate">{item.entpName}</div>
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        <div className="truncate">
                          {item.itemName.length > 8
                            ? item.itemName.slice(0, 8) + '...'
                            : item.itemName}
                        </div>
                      </td>
                      <td className="py-4 font-roboto text-base text-black">
                        {item.openDe.split(' ')[0]}
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() =>
                            (window.location.href = `/medicine/detail/${item.itemSeq}`)
                          }
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
          {renderPageButtons()}
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
