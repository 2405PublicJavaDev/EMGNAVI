import { useState, EventHandler, ReactNode } from 'react'

const MedicineSearch = () => {
  return (
    <>
      <div className="absolute left-0 top-[136px] w-[100%] h-[1184px] overflow-hidden">
        <div className="absolute left-0 top-[58px] w-[100%] h-[1126px] bg-[#fff] overflow-hidden">
          <div className="absolute left-[337px] top-[201px] w-[1246px] h-[655px]"></div>
          <div className="absolute left-0 top-0 w-[100%] h-[1010px] overflow-hidden">
            <div className="absolute -translate-y-1/2 right-[519px] top-[calc(50%+93px)] w-[882px] flex flex-col items-center justify-start border-[1px] border-solid border-[#0000001a] rounded-[6px] overflow-hidden">
              <div className="relative self-stretch h-[68px] shrink-0 bg-[#cccccc1a]">
                <div className="absolute left-[20px] top-[24px] w-[30px] h-[20px]"></div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">업체명</div>
                <div className="absolute left-[301px] top-[25px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">제품명</div>
                <div className="absolute left-[524px] top-[24px] w-[450px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">상세정보</div>
                <div className="absolute left-[486px] top-[25px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">공개 일자</div>
                <div className="absolute left-[30px] top-[24px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">번호</div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[16px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">1</div>
                <div className="absolute left-[107px] top-[16px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">한국바이오팜</div>
                <div className="absolute left-[301px] top-[16px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">네오펜정</div>
                <div className="absolute left-[486px] top-[16px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[648px] top-[8px] w-[150px] flex flex-col items-start justify-start pt-0 pr-0 pb-0 pl-[50px]">
                  <div className="self-stretch h-[36px] shrink-0 flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                    <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">서울제약</div>
                <div className="absolute left-[293px] top-[14px] w-[116px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">콜드라이트캅셀</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[649px] top-[16px] w-[150px] flex flex-col items-start justify-start pt-0 pr-0 pb-0 pl-[50px]">
                  <div className="self-stretch h-[36px] shrink-0 flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                    <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">3</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">대한약품</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">디펜실린주</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[648px] top-[16px] w-[150px] h-[36px]">
                  <div className="absolute left-[52px] top-0 w-[100px] h-[36px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                    <div className="absolute left-[22px] top-[6px] text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">4</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">녹십자헬스케어</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">비타플렉스정</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[700px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">5</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">유한양행</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">아나프릴정</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[700px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">6</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">일양약품</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">메가트롤캡슐</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[700px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">7</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">동아제약</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">파워콜드시럽</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[699px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">8</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">종근당바디오</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">바이오젠연고</div>
                <div className="absolute left-[470px] top-[16px] w-[150px] h-[36px]">
                  <div className="absolute left-[16px] top-[8px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                </div>
                <div className="absolute left-[699px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">9</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">삼성바이오로직스</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">루미젠주</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[699px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
              <div className="relative self-stretch h-[68px] shrink-0">
                <div className="absolute left-[30px] top-[24px] w-[30px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">10</div>
                <div className="absolute left-[107px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">한미약품</div>
                <div className="absolute left-[301px] top-[24px] w-[100px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">센시아정</div>
                <div className="absolute left-[486px] top-[24px] w-[130px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.08.26</div>
                <div className="absolute left-[930px] top-[16px] w-[150px]"></div>
                <div className="absolute left-[699px] top-[16px] w-[100px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                  <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">상세 정보</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[838px] top-[1065px] w-[243px] h-[70px] bg-[#fff] overflow-hidden">
          <div className="absolute left-[13px] top-[13px] w-[45px] h-[45px] flex">
            <img className="absolute left-0 top-0" width="44" height="44" src="/img/medicine/bluebox.png"></img>
            <div className="absolute left-0 top-0 w-[45px] h-[45px] text-[22px] leading-[31px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">1</div>
          </div>
          <div className="absolute left-[70px] top-[13px] w-[45px] h-[45px] flex">
            <img className="absolute left-0 top-0" width="44" height="44" src="/img/medicine/bluebox.png"></img>
            <div className="absolute left-0 top-0 w-[45px] h-[45px] text-[22px] leading-[31px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">2</div>
          </div>
          <div className="absolute left-[128px] top-[13px] w-[45px] h-[45px] flex">
            <img className="absolute left-0 top-0" width="44" height="44" src="/img/medicine/bluebox.png"></img>
            <div className="absolute left-0 top-0 w-[45px] h-[45px] text-[22px] leading-[31px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">3</div>
          </div>
          <div className="absolute left-[186px] top-[13px] w-[45px] h-[45px] flex">
            <img className="absolute left-0 top-0" width="44" height="44" src="/img/medicine/bluebox.png"></img>
            <div className="absolute left-0 top-0 w-[45px] h-[45px] text-[22px] leading-[31px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">4</div>
          </div>
        </div>
        <div className="absolute left-[170px] top-[27px] w-[1580px] h-[252px]">
          <div className="absolute left-0 top-0 w-[1580px] h-[252px]">
            <div className="absolute left-0 top-0 w-[1580px] h-[180px]">
              <div className="absolute left-[301px] top-[22px] w-[978px] text-[52px] leading-[48px] font-['NotoSerifTamilSlanted'] font-bold text-[#000] text-center">원하시는 의약품을 검색해 주세요</div>
              <div className="absolute left-[563px] top-[90px] w-[454px] h-[37px] flex">
                <div className="absolute left-[94px] top-[1px] w-[360px] h-[36px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-[360px] h-[36px] flex flex-row items-center justify-start py-[8px] px-[12px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[6px]">
                    <div className="flex-1 h-[20px] text-[14px] leading-[20px] font-['Roboto'] text-[#00000080] line-clamp-1">원하시는 제품의 이름을 검색해 주세요</div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 w-[87px] h-[36px] border-[1px] border-solid border-[#00000033] rounded-[5px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-[360px] h-[36px] flex flex-row items-center justify-start gap-[4px] py-[8px] px-[12px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[6px]">
                    <div className="w-[78px] h-[20px] text-[14px] leading-[20px] font-['Roboto'] text-[#00000080] line-clamp-1">제품명</div>
                    {/* <img width="14" height="12" src="/img/medicine/Polygon_10_146.png"></img> */}
                  </div>
                  <img className="absolute left-[70px] top-[12px]" width="14" height="12" src="/img/admin/reviewAdmin/Polygon.png"></img>
                  <div className="absolute left-[67px] top-[1px] w-[20px] h-[35px] bg-[#d9d9d94d]"></div>
                </div>
              </div>
              <div className="absolute left-[670px] top-[252px]"></div>
              <div className="absolute left-[678px] top-[147px] w-[240px] h-[48px] bg-[#0b2d85] border-[1px] border-solid border-[#0939ad] rounded-[8px]">
                <div className="absolute left-[98px] top-[12px] text-[24px] leading-[24px] font-['Noto_Sans_KR'] font-medium text-[#fff] whitespace-nowrap">검색</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[1320px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
        <div className="absolute left-[136px] top-[41px] w-[117px] h-[126px] flex">
          <div className="absolute left-[13px] top-[97px] text-[24px] font-['Advent_Pro'] font-black text-[#333] whitespace-nowrap">응급NAVI</div>
          <img className="absolute left-0 top-0" width="117" height="100" src="/img/footer/logo.png"></img>
        </div>
        <div className="absolute left-[390px] top-[62px] w-[638px] h-[115px] flex">
          <div className="absolute left-0 top-[54px] w-[638px] h-[61px] flex">
            <div className="absolute left-0 top-0 w-[638px] h-[61px] text-[14px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">서울 중구 남대문로 120 대일빌딩 2층, 3층 KH정보교육원 종로지원     |     대표자명 : 민봉식     |     대표전화 : 1544-9970<br />     2024 응급NAVI.<br /></div>
            <img className="absolute left-[2px] top-[27px]" width="9" height="8" src="/img/footer/copyright.png"></img>
          </div>
          <div className="absolute left-0 top-0 w-[221px] h-[21px] text-[15px] leading-[150%] font-['Agdasima'] font-bold text-[#686868]">이용약관              개인정보처리방침</div>
        </div>
        <img className="absolute left-[1634px] top-[47px]" width="145" height="34" src="/img/footer/group.png"></img>
      </div>
    </>
  )
}

export default MedicineSearch