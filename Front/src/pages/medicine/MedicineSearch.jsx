import { useState } from 'react';

const MedicineSearch = () => {
  // 더미 데이터 10개
  const dummyData = [
    { 번호: 1, 업체명: '한국바이오팜', 제품명: '네오펜정', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 2, 업체명: '서울제약', 제품명: '콜드라이트캅셀', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 3, 업체명: '대한약품', 제품명: '디펜실린주', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 4, 업체명: '녹십자헬스케어', 제품명: '비타플렉스정', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 5, 업체명: '유한양행', 제품명: '아나프릴정', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 6, 업체명: '일양약품', 제품명: '메가트롤캡슐', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 7, 업체명: '동아제약', 제품명: '파워콜드시럽', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 8, 업체명: '종근당바이오', 제품명: '바이오젠연고', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 9, 업체명: '삼성바이오로직스', 제품명: '루미젠주', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
    { 번호: 10, 업체명: '한미약품', 제품명: '센시아정', 공개일자: '2024.08.26', 상세정보: '상세 정보' },
  ];

  return (
    <>
      {/* 메인 검색 영역 */}
      <div className="flex flex-col items-center justify-center min-h-[1100px] bg-white"> {/* min-h-[1600px]로 세로 길이 확장 */}
        <div className="w-full max-w-7xl mx-auto p-4 bg-white relative top-[90px]">
          {/* 검색 타이틀 */}
          <h1 className="text-[52px] font-bold text-center mb-8 leading-[48px] font-NotoSerifTamilSlanted">
            원하시는 의약품을 검색해 주세요
          </h1>

          {/* 검색창 */}
          <div className="flex justify-center mb-8">
            <select className="border p-2 rounded-l-md w-[87px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#00000033]">
              <option>제품명</option>
            </select>
            <input
              type="text"
              placeholder="원하시는 제품의 이름을 검색해 주세요"
              className="border p-2 w-[360px] h-[36px] text-[14px] leading-[20px] text-[#00000080] border-[#0000001a] rounded-l-md"
            />
            <button className="bg-[#0b2d85] text-white px-4 h-[36px] text-[17px] rounded-r-md">
              검색
            </button>
          </div>

          {/* 의약품 테이블 */}
          <div className="overflow-auto w-full">
            <table className="table-auto w-full border-collapse text-center shadow-lg rounded-lg">
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
                {dummyData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4">{item.번호}</td>
                    <td className="py-4">{item.업체명}</td>
                    <td className="py-4">{item.제품명}</td>
                    <td className="py-4">{item.공개일자}</td>
                    <td className="py-4">
                      <button className="bg-[#0b2d85] text-white px-4 py-1 rounded-lg text-[14px] font-bold">
                        {item.상세정보}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div className="mr-[5px] flex justify-center mt-8 space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className="bg-[#0b2d85] text-white px-3 py-1 rounded-md text-[22px] leading-[31px] font-bold"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer 영역 */}
      <footer className="w-full bg-black text-white py-8 mt-10">
        <div className="flex justify-between items-center container mx-auto px-6">
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
    </>
  );
};

export default MedicineSearch;
