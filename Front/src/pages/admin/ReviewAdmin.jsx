import { useState, EventHandler, ReactNode } from 'react'

const ReviewAdmin = () => {
    return(
    <>
    <div className="pt-[165px] w-full bg-white"></div>
    <div className="relative w-[100%] bg-[#fff] overflow-hidden" style={{marginTop: '-161px'}}>
    <div className="relative w-[100%] h-[1080px] bg-[#fff] overflow-hidden">
        <div className="absolute left-0 top-[848px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
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
        <div className="absolute left-[-3px] top-[124px] w-[1923px] h-[170px] bg-[#0b2d85]"></div>
        <div className="absolute left-[-5px] top-[161px] w-[100%] h-[687px] overflow-hidden">
            <div className="absolute -translate-y-1/2 right-[198px] top-[calc(50%+-36px)] w-[1460px] h-[476px] flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#fff] rounded-[5px] overflow-hidden">
                <div className="relative self-stretch h-[68px] shrink-0 bg-[#cccccc1a]">
                    <div className="absolute left-[20px] top-[24px] w-[20px] h-[20px]"></div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center">작성자 아이디</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center">리뷰 내용</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center">작성일자</div>
                    <div className="absolute left-[970px] top-[24px] w-[120px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center">평점</div>
                    <div className="absolute left-[1164px] top-[24px] w-[85px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center">기능 번호</div>
                    <div className="absolute left-[1349px] top-[24px] text-[16px] leading-[20px] font-['Roboto'] font-bold text-[#000] text-center whitespace-nowrap">리뷰 관리</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">1</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                    <div className="absolute left-[1201px] top-[29px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">A</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                    <div className="absolute left-[1201px] top-[28px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">B</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">3</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                    <img className="absolute left-[970px] top-[20px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
                    <div className="absolute left-[1201px] top-[38px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">C</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">4</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                    <div className="absolute left-[1201px] top-[29px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">D</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">5</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                    <div className="absolute left-[1202px] top-[29px] w-[11px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">E</div>
                </div>
                <div className="relative self-stretch h-[68px] shrink-0">
                    <div className="absolute left-[20px] top-[24px] w-[20px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">6</div>
                    <div className="absolute left-[50px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">user01@gmail</div>
                    <div className="absolute left-[346px] top-[24px] w-[380px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">리뷰 내용입니다.</div>
                    <div className="absolute left-[810px] top-[24px] w-[150px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center">2024.09.30</div>
                    <div className="absolute left-[1127px] top-[-11px] w-[100px] h-[100px] overflow-hidden">
                        <div className="absolute left-[75px] top-[40px] text-[16px] leading-[20px] font-['Roboto'] font-medium text-[#000] text-center whitespace-nowrap">F</div>
                    </div>
                    <div className="absolute left-[1341px] top-[16px] w-[80px] h-[36px] flex flex-col items-center justify-center p-[12px] bg-[#0b2d85] rounded-[8px]">
                        <div className="text-[14px] leading-[24px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">관리</div>
                    </div>
                </div>
            </div>
            <div className="absolute left-[867px] top-[559px] w-[190px] h-[55px] bg-[#fff] overflow-hidden">
                <div className="absolute left-[10px] top-[10px] w-[35px] h-[35px] flex">
                    <img className="absolute left-0 top-0" width="35" height="35" src="/img/medicine/bluebox.png"></img>
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] text-[17px] leading-[24px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">1</div>
                </div>
                <div className="absolute left-[55px] top-[10px] w-[35px] h-[35px] flex">
                    <img className="absolute left-0 top-0" width="35" height="35" src="/img/medicine/bluebox.png"></img>
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] text-[17px] leading-[24px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">2</div>
                </div>
                <div className="absolute left-[100px] top-[10px] w-[35px] h-[35px] flex">
                    <img className="absolute left-0 top-0" width="35" height="35" src="/img/medicine/bluebox.png"></img>
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] text-[17px] leading-[24px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">3</div>
                </div>
                <div className="absolute left-[145px] top-[10px] w-[35px] h-[35px] flex">
                    <img className="absolute left-0 top-0" width="35" height="35" src="/img/medicine/bluebox.png"></img>
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] text-[17px] leading-[24px] font-['Roboto'] font-bold text-[#0b2d85] text-center flex flex-col justify-center">4</div>
                </div>
            </div>
            <div className="absolute left-[212px] top-0 w-[333px] h-[57px] text-[25px] font-['Inter'] font-bold text-[#fff] text-center flex flex-col justify-center">리뷰 리스트</div>
            <div className="absolute left-[754px] top-[614px] w-[416px] h-[37px] flex">
                <div className="absolute left-0 top-0 w-[333px] h-[37px] flex">
                    <div className="absolute left-[94px] top-[1px] w-[239px] h-[36px] overflow-hidden">
                        <div className="absolute left-0 top-0 w-[223px] h-[36px] flex flex-row items-center justify-start py-[8px] px-[12px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[6px]">
                            <div className="flex-1 text-[14px] leading-[20px] font-['Roboto'] text-[#00000080] line-clamp-1">리뷰 검색</div>
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 w-[87px] h-[36px] rounded-tl-0 rounded-tr-[5px] rounded-br-[5px] rounded-bl-0 overflow-hidden">
                        <div className="absolute left-0 top-0 w-[360px] h-[36px] flex flex-row items-center justify-start gap-[4px] py-[8px] px-[12px] bg-[#fff] border-[1px] border-solid border-[#0000001a] rounded-[6px]">
                            <div className="w-[78px] h-[20px] text-[14px] leading-[20px] font-['Roboto'] text-[#00000080] line-clamp-1"> 아이디</div>
                            </div>
                        <img className="absolute left-[70px] top-[12px]" width="14" height="12" src="/img/admin/reviewAdmin/Polygon.png"></img>
                        <div className="absolute left-[67px] top-[1px] w-[20px] h-[35px] bg-[#0b2d854d]"></div>
                    </div>
                </div>
                <div className="absolute left-[326px] top-[3px] w-[90px] h-[33px] bg-[#0b2d85] rounded-[8px]">
                    <div className="absolute left-[30px] top-[6px] w-[40px] h-[21px] text-[17px] leading-[24px] font-['Noto_Sans_KR'] font-medium text-[#fff]">검색</div>
                </div>
            </div>
        </div>
        {/* <div className="absolute left-0 top-0 w-[100%] h-[161px] overflow-hidden">
            <div className="absolute left-0 top-0 w-[100%] h-[32px] flex">
                <div className="absolute left-0 top-0 w-[100%] h-[31px] bg-[#0b2d85]"></div>
                <div className="absolute left-[1662px] top-[1px] w-[228px] h-[31px]"><span className="text-[24px] font-['Inter'] font-thin text-[#7d8597]">|</span><span className="text-[20px] font-['Inter'] font-bold text-[#fff]">   </span><span className="text-[16px] font-['Inter'] font-semibold text-[#fff]">마이페이지</span><span className="text-[20px] font-['Inter'] font-bold text-[#fff]">   </span><span className="text-[24px] font-['Inter'] font-thin text-[#7d8597]">|</span><span className="text-[20px] font-['Inter'] font-bold text-[#fff]">   </span><span className="text-[16px] font-['Inter'] font-semibold text-[#fff]">로그아웃</span><span className="text-[20px] font-['Inter'] font-bold text-[#fff]">   </span><span className="text-[24px] font-['Inter'] font-thin text-[#7d8597]">|</span></div>
            </div>
            <div className="absolute left-0 top-0 w-[100%] h-[155px] flex">
                <div className="absolute left-0 top-[31px] w-[100%] h-[93px] bg-[#fff]"></div>
                <div className="absolute left-[286px] top-[60px] text-[20px] font-['Jost'] font-medium text-[#000] whitespace-nowrap">주변응급실                    주변병원                    주변약국                                                     자동제세동기(AED)                    이용안내                    공지사항</div>
                <div className="absolute left-[857px] top-0 w-[207px] h-[155px] flex">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="bg0_113.png"></img>
                    <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="line0_114.png"></img>
                    <div className="absolute left-[48px] top-[6px] w-[111px] h-[124px] flex">
                        <div className="absolute left-[10px] top-[95px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] whitespace-nowrap">응급NAVI</div>
                        <img className="absolute left-0 top-0" width="111" height="97" src="file 10_117.png"></img>
                    </div>
                </div>
            </div>
        </div> */}
        <img className="absolute left-[1208px] top-[386px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
        <img className="absolute left-[1333px] top-[393px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1208px] top-[522px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
        <img className="absolute left-[1303px] top-[529px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1333px] top-[529px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1208px] top-[590px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
        <img className="absolute left-[1333px] top-[597px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1208px] top-[311px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
        <img className="absolute left-[1208px] top-[658px]" width="165" height="41" src="/img/medicine/goldstarfifth.png"></img>
        <img className="absolute left-[1273px] top-[665px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1303px] top-[665px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
        <img className="absolute left-[1333px] top-[665px]" width="33" height="27" src="/img/medicine/greyonestar.png"></img>
    </div>
    </div>
    </>
    )
    }

export default ReviewAdmin