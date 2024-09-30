import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Session } from './Session';

import PageNotFound from './Pages/PageNotFound';

import Test from './pages/Test';
import RegisterMain from './pages/user/RegisterMain';
import RegisterAgree from './pages/user/RegisterAgree';

import Index from './pages/Index';
import RegisterVerify from './pages/user/RegisterVerify';
import RegisterPage from './pages/user/RegisterPage';
import RegisterComplete from './pages/user/RegisterComplete';
import LoginMain from './pages/user/LoginMain';
import FindEmail from './pages/user/FindEmail';
import FIndEmailComplete from './pages/user/FindEmailComplete';



function App() {

  const location = useLocation();

  const { handleUser } = useContext(UserContext);

  useEffect(() => {
    const fetchSessionData = async () => {
      const response = await Session();
      if (response) {
        handleUser(response.uEmail, response.uNickname);
      }
    };

    fetchSessionData();
  }, []);

  return (
    <>
      <Routes>

        <Route path='/test/:no' element={<Test />} />

        <Route path='/' element={<Index />} />

        <Route path='/user/register' element={<RegisterMain />} />
        <Route path='/user/register/agree' element={<RegisterAgree />} />
        <Route path='/user/register/verify' element={<RegisterVerify />} />
        <Route path='/user/register/page' element={<RegisterPage />} />
        <Route path='/user/register/complete' element={<RegisterComplete />} />
        <Route path='/user/login' element={<LoginMain />} />
        <Route path='/user/findEmail' element={<FindEmail />} />
        <Route path='/user/findEmail/complete' element={<FIndEmailComplete />} />
        {/* 404 페이지 처리 */}
        <Route path='*' element={<PageNotFound />} />

      </Routes>
      
    </>
  )
}

export default App