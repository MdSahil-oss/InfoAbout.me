import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/login/login'
import Layout from './pages/layout';
import Index from './pages/index'
import Landing from './pages/landing/landing';
import NoPage from './pages/no-page';
import { useGetUser,useGetUserInfo } from './hooks/index'


export default function App() {

  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const [{ userInfo, isLoadingInfo, isErrorInfo }, dispatchInfo] = useGetUserInfo();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/login" element={user ? <Navigate replace to="/index" /> : <Login dispatch={dispatch} dispatchInfo={dispatchInfo} />} />
        <Route path="/index" element={user ? <Index dispatch={dispatch} user={user} userInfo={userInfo} dispatchInfo={dispatchInfo} /> : <Navigate replace to="/login" />} />
        <Route path='*' element={user ? <NoPage /> : <Navigate replace to="/login" />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
