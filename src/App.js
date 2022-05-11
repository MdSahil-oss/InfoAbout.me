import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, renderMatches } from "react-router-dom";
import Login from './pages/login/login'
import Index from './pages/index'
import Landing from './pages/landing/landing';
import NoPage from './pages/no-page';
import TwitterCallback from './pages/twitter/twitter-callback'
import { useGetUserInfo } from './hooks/index'
import { useState } from 'react';
import useGetUser from './hooks/index'
// import 'dotenv/config'

let page = 'none'

export default function App() {

  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const [{ userInfo, isLoadingInfo, isErrorInfo }, dispatchInfo] = useGetUserInfo();
  
  if (window.location.href.includes('twitterCallback')) {
    page = 'twitter';
  }
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/login" element={user ? <Navigate replace to="/index" /> : <Login dispatch={dispatch} dispatchInfo={dispatchInfo} />} />
        <Route path="/index" element={user ? <Index page={page} dispatch={dispatch} user={user} userInfo={userInfo} dispatchInfo={dispatchInfo} /> : <Navigate replace to="/login" />} />
        <Route path='*' element={user ? <NoPage /> : <Navigate replace to="/login" />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/twitterCallback' element={user ? <Navigate replace to="/index" /> : <Login dispatch={dispatch} dispatchInfo={dispatchInfo} />} />
        <Route path='/twitterCallbackFail' element={<TwitterCallback />} />
      </Routes>
    </BrowserRouter>
  );
}
