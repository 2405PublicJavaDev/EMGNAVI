import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Session } from './axios/Session';

import PageNotFound from './Pages/PageNotFound';

import Header from './pages/Header';

import Test from './pages/Test';

import Index from './pages/Index';

import RegisterMain from './pages/user/registerMain';
import RegisterAgree from './pages/user/RegisterAgree';
import RegisterVerify from './pages/user/RegisterVerify';
import RegisterPage from './pages/user/RegisterPage';
import RegisterComplete from './pages/user/RegisterComplete';

import LoginMain from './pages/user/LoginMain';
import Kakao from './pages/user/Kakao';
import Naver from './pages/user/Naver';
import Google from './pages/user/Google';
import SocialComplete from './pages/user/SocialComplete';
import SocialMypageModifyInf from './pages/user/SocialMypageModifyInf';

import FindEmail from './pages/user/FindEmail';
import FIndEmailComplete from './pages/user/FindEmailComplete';

import FindPw from './pages/user/FindPw';
import FindPwSendMSG from './pages/user/FindPwSendMSG';
import ResetPw from './pages/user/ResetPw';

import Mypage from './pages/user/Mypage';
import MypageCheckPw from './pages/user/MypageCheckPw';
import MypageModifyInf from './pages/user/MypageModifyInf';

import PostNotice from './pages/notice/PostNotice';
import GetNoticeList from './pages/notice/GetNoticeList';
import GetNoticeDetail from './pages/notice/GetNoticeDetail';

import GetHospitalMap from './pages/map/GetHospitalMap';
import GetEmergencyMap from './pages/map/GetEmergencyMap';


import MedicineSearch from './pages/medicine/MedicineSearch';
import MedicineDetail from './pages/medicine/MedicineDetail';
import PharmacySearch from './pages/pharmacy/PharmacySearch';

import AdminPage from './pages/admin/AdminPage';
import ReportList from './pages/report/ReportList';
import FavoriteHospital from './pages/user/Favorite/FavHospital';
import FavPharmacy from './pages/user/Favorite/FavPharmacy'
import GetAedMap from './pages/map/GetAedMap'
import GetEmergencyStat from './pages/stat/GetEmergencyStat';

function App() {

  const { reload, handleReload, handleUser, userId } = useContext(UserContext);

  useEffect(() => {

    const fetchSessionData = async () => {
      handleReload(false);
      const response = await Session();
      if (response) {
        handleUser(response.userId, response.userNickname);
      }
    };

    fetchSessionData();
  }, [reload == true]);

  return (
    <>
      <Header />

      <Routes>

        <Route path='/test/:no' element={<Test />} />

        <Route path='/' element={<Index />} />

        <Route path='/user/register' element={<RegisterMain />} />
        <Route path='/user/register/agree' element={<RegisterAgree />} />
        <Route path='/user/register/verify' element={<RegisterVerify />} />
        <Route path='/user/register/page' element={<RegisterPage />} />
        <Route path='/user/register/complete' element={<RegisterComplete />} />

        <Route path='/user/login' element={<LoginMain />} />
        <Route path="/kakao/callback" element={<Kakao />} />
        <Route path="/naver/callback" element={<Naver />} />
        <Route path="/google/callback" element={<Google />} />
        <Route path="/user/social/complete" element={<SocialComplete />} />
        <Route path="/user/social/mypage/modify" element={<SocialMypageModifyInf />} />

        <Route path='/user/findEmail' element={<FindEmail />} />
        <Route path='/user/findEmail/complete' element={<FIndEmailComplete />} />

        <Route path='/user/findPw' element={<FindPw />} />
        <Route path="/user/findPw/sent" element={<FindPwSendMSG />} />
        <Route path="/user/findPw/resetPw" element={<ResetPw />} />

        <Route path="/user/mypage" element={<Mypage />} />
        <Route path="/user/mypage/check" element={<MypageCheckPw />} />
        <Route path="/user/mypage/modify" element={<MypageModifyInf />} />

        <Route path='/notice/postNotice' element={<PostNotice />} />
        <Route path='/notice/getNoticeList' element={<GetNoticeList />} />
        <Route path='/notice/getNoticeDetail' element={<GetNoticeDetail />} />

        <Route path='/stat/getEmergencyStat' element={<GetEmergencyStat />} />

        <Route path='/admin/reportList' element={<ReportList />} />

        <Route path='/map/getHospitalMap' element={<GetHospitalMap />} />
        <Route path='/map/getEmergencyMap' element={<GetEmergencyMap />} />

        <Route path='/medicine/MedicineSearch' element={<MedicineSearch />} />
        <Route path='/medicine/detail/:itemSeq' element={<MedicineDetail />} />


        <Route path='/pharmacy/PharmacySearch' element={<PharmacySearch />} />

        <Route path='/user/mypage/favorite/hospital' element={<FavoriteHospital />} />
        <Route path='/user/mypage/favorite/pharmacy' element={<FavPharmacy />} />
        <Route path='/map/getAedMap' element={<GetAedMap />} />

        <Route path='/admin/adminPage' element={<AdminPage />} />

        {/* 404 페이지 처리 */}
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App