import { useState, EventHandler, ReactNode, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../UserContext';

const Header = () => {

    const { handleReload, userId } = useContext(UserContext);

    const nav = useNavigate();

    const handlerGoLogin = () => {
        nav("/user/login");
    };
    const handlerGoRegister = () => {
        nav("/user/register");
    };
    const handlerGoMain = () => {
        nav("/");
    }
    const handleLogout = async () => {
        const isConfirmed = confirm("로그아웃 하시겠습니까?");
        if (isConfirmed) {
            await axios.post('/api/logout');
            handleReload(true);
            nav("/user/login"); // 로그아웃 후 로그인 페이지로 이동
        } // 취소 시 아무 동작도 하지 않음
    };
    const handlerGoMypage = () => {
        nav("/user/mypage");
    }
    const handlerGoAdminpage = () => {
        nav("/admin/adminPage");
    }

    return (
        <>
            {(!location.pathname.startsWith("/map")) &&
                <div className="absolute left-0 top-0 w-[100%] h-[161px] overflow-hidden z-10">
                    <div className="absolute left-0 top-0 w-[100%] h-[155px] flex">
                        <div className="absolute left-0 top-[31px] w-[100%] h-[93px] flex">
                            <div className="absolute left-0 top-0 w-[100%] h-[93px] bg-[#fff]"></div>
                        </div>
                        <div className="absolute left-0 top-0 w-[100%] h-[31px] flex">
                            {userId ? (
                                <div className="absolute left-0 top-0 w-[1920px] h-[31px] flex">
                                    <div className="absolute left-0 top-0 w-[1920px] h-[31px] bg-[#0b2d85]"></div>
                                    <div className="absolute left-0 top-[4px] w-[1920px] h-[27px] flex">
                                        <div className="absolute left-[1865px] top-0 w-[55px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                        <div
                                            onClick={handleLogout}
                                            style={{ cursor: 'pointer' }}
                                            className="absolute left-[1778px] top-0 w-[87px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">로그아웃</div>
                                        <div className="absolute left-[1773px] top-0 w-[5px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                        {userId === 'admin' ? (
                                            <>
                                                <div
                                                    onClick={handlerGoAdminpage}
                                                    style={{ cursor: 'pointer' }}
                                                    className="absolute left-[1662px] top-0 w-[111px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">관리자페이지</div>
                                                <div className="absolute left-0 top-0 w-[1662px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    onClick={handlerGoMypage}
                                                    style={{ cursor: 'pointer' }}
                                                    className="absolute left-[1662px] top-0 w-[111px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">마이페이지</div>
                                                <div className="absolute left-0 top-0 w-[1662px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute left-0 top-0 w-[100%] h-[31px] flex">
                                    <div className="absolute left-0 top-0 w-[100%] h-[31px] bg-[#0b2d85]"></div>
                                    <div className="absolute left-0 top-[4px] w-[100%] h-[27px] flex">
                                        <div className="absolute left-[1865px] top-0 w-[55px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                        <div
                                            onClick={handlerGoRegister}
                                            style={{ cursor: 'pointer' }}
                                            className="absolute left-[1778px] top-0 w-[87px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">회원가입</div>
                                        <div className="absolute left-[1773px] top-0 w-[5px] h-[27px] text-[16px]"><span className="font-['Inter'] font-extralight text-[#7d8597]">|</span><span className="font-['Inter'] font-semibold text-[#fff]"> </span></div>
                                        <div
                                            onClick={handlerGoLogin}
                                            style={{ cursor: 'pointer' }}
                                            className="absolute left-[1697px] top-0 w-[76px] h-[27px] text-[16px] font-['Inter'] font-medium text-[#fff] text-center">로그인</div>
                                        <div className="absolute left-0 top-0 w-[1697px] h-[27px] text-[16px] font-['Inter'] font-extralight text-[#7d8597] text-right">|</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button onClick={handlerGoMain} className="absolute left-[857px] top-0 w-[207px] h-[155px] flex">
                            <img className="absolute left-0 right-0 top-0 bottom-0" width="206" height="154" src="/img/header/background.png"></img>
                            <img className="absolute left-[2.21%] right-[2.8%] top-0 bottom-[2.63%]" width="196" height="150" src="/img/header/line.png"></img>
                            <div
                                style={{ cursor: 'pointer' }}
                                className="absolute left-[24px] top-[6px] w-[159px] h-[123px] flex">
                                <div className="absolute left-0 top-[95px] w-[159px] h-[28px] text-[24px] font-['Advent_Pro'] font-black text-[#0b2d85] text-center">응급NAVI</div>
                                <img className="absolute left-[24px] top-0" width="111" height="97" src="/img/header/logo.png"></img>
                            </div>
                        </button>
                    </div>
                    <div className="absolute left-[264px] top-[60px] w-[1393px] h-[23px] flex">
                        <button className="absolute left-0 top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/map/getEmergencyMap')}>내비게이션</button>
                        <button className="absolute left-[208px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/hospital/HospitalSearch')}>병원검색</button>
                        <button className="absolute left-[401px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/pharmacy/PharmacySearch')}>약국검색</button>
                        <button className="absolute left-[869px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/medicine/MedicineSearch')}>의약품검색</button>
                        <button className="absolute left-[1093px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/stat/getEmergencyStat')}>응급실 통계</button>
                        <button className="absolute left-[1329px] top-0 text-[16px] font-['Jost'] font-bold text-[#000] whitespace-nowrap hover:border-b-2 hover:border-gray-600 hover:text-gray-700 hover:transition-all hover:duration-300" onClick={() => nav('/notice/getNoticeList')}> 공지사항</button>
                    </div>

                </div>

            }
        </>
    )
}

export default Header