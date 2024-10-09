import { useState, EventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Chart from '../stat/Chart'

const GetNoticeDetail = () => {
    return (
        <div className="relative w-[1920px] h-[1545px] bg-[#fff] overflow-hidden">


            <div className="absolute left-0 top-[1313px] w-[100%] h-[232px] bg-[#000] overflow-hidden">
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

            <div className="absolute left-0 top-[124px] w-[1920px] h-[1189px] overflow-hidden">
                <div className="absolute left-0 top-0 w-[1920px] h-[194px] overflow-hidden">
                    <div className="absolute left-0 top-0 w-[1920px] h-[194px] bg-[#0b2d85]"></div>
                    <div className="absolute left-[335px] top-[39px] w-[145px] h-[38px] text-[32px] font-['Inter'] font-bold text-[#fff] flex flex-col justify-center">공지사항</div>
                </div>
                <div className="absolute left-[310px] top-[194px] w-[1300px] h-[993px] rounded-tl-[10px] rounded-tr-0 rounded-br-0 overflow-hidden">
                    <img className="absolute left-[-310px] top-[871px]" width="1920" height="124" src="image 76162_6.png"></img>
                    <img className="absolute left-[-310px] top-0" width="1920" height="871" src="image 75162_3.png"></img>
                </div>
            </div>

            <div className="z-100">
                <h2>My First Bar Chart</h2>
                <Chart />
            </div>



        </div>
    )
}

export default GetNoticeDetail