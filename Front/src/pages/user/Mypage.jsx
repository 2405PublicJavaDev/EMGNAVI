import { useState, EventHandler, ReactNode } from 'react'

const Mypage = () => {
    return (
        <>
            <div className="absolute left-0 top-[161px] w-[1920px] h-[908px]">
                <div className="absolute left-[733px] top-[264px] w-[455px] h-[410px] bg-[#7d85971a] rounded-[20px]"></div>
                <div className="absolute left-0 top-[84px] w-[1920px] h-[47px] text-[40px] font-['Inter'] font-bold text-[#000] text-center">마이페이지</div>
                <div className="absolute left-0 top-[163px] w-[1920px] text-[15px] font-['Inter'] text-[#7d8597] text-center">당신의 건강을 위한 최적의 길을 안내하는 응급NAVI입니다.</div>
            </div>
            <div className="absolute left-[1255px] top-[425px] w-[455px] h-[410px] bg-[#7d85971a] rounded-[20px]"></div>
            <div className="absolute left-[210px] top-[425px] w-[455px] h-[410px] bg-[#7d85971a] rounded-[20px]"></div>
            <div className="absolute left-[733px] top-[656px] w-[455px] h-[30px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">즐겨찾는 병원</div>
            <div className="absolute left-[733px] top-[709px] w-[455px] h-[19px] text-[16px] font-['Inter'] text-[#7d8597] text-center">즐겨찾는 병원</div>
            <div className="absolute left-[1255px] top-[656px] w-[455px] h-[30px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">즐겨찾는 약국</div>
            <div className="absolute left-[1255px] top-[709px] w-[455px] h-[19px] text-[16px] font-['Inter'] text-[#7d8597] text-center">즐겨찾는 약국</div>
            <div className="absolute left-[210px] top-[656px] w-[455px] h-[30px] text-[26px] font-['Inter'] font-semibold text-[#000] text-center">내정보 관리</div>
            <div className="absolute left-[210px] top-[709px] w-[455px] h-[19px] text-[16px] font-['Inter'] text-[#7d8597] text-center">회원정보 수정</div>
            <img className="absolute left-[926px] top-[537px]" width="94" height="89" src="/img/user/Group 221397_73.png"></img>
            <img className="absolute left-[1447px] top-[537px]" width="89" height="87" src="/img/user/Group 200397_50.png"></img>
            <img className="absolute left-[412px] top-[545px]" width="70" height="78" src="/img/user/Group 199397_54.png"></img>
            <div className="absolute left-0 top-[1069px] w-[1920px] h-[232px] bg-[#000] overflow-hidden">
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
        </>)
}

export default Mypage