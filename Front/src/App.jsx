import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Session } from './Session';

import PageNotFound from './Pages/PageNotFound';

import Test from './pages/Test';

import Index from './pages/Index';



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
    <Routes>

      <Route path='/test' element={<Test />} />

      <Route path='/' element={<Index />} />

      {/* 404 페이지 처리 */}
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default App
