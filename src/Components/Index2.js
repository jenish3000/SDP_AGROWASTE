import React from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import LoginFarmer from './LoginPage/LoginFarmer';
import LoginCompany from './LoginPage/LoginCompany';
import LoginAdmin from './LoginPage/LoginAdmin';
import SignUpFarmer from './SignupPage/SignUpFarmer';
import SignUpCompany from './SignupPage/SignUpCompany';
import SignUpAdmin from './SignupPage/SignUpAdmin';
import CompanyHome from './LogHomePage/CompanyHome';
import FarmerHome from './LogHomePage/FarmerHome';
import AdminHome from './LogHomePage/AdminHomePage/AdminHome';
import Auction from './Auction/Auction';
import AuctionList from './Auction/AuctionList';
import Home from './HomePage/Home';
import Forget from './LoginPage/Forget';
import Service from './ServicePage/Service';
import OptionSignup from './OptionPage/OptionSignup';
import OptionLogin from './OptionPage/OptionLogin';
import DeepState from '../context/DeepState';
import Profile from './ProfilePage/Profile';
import SuccessPage from './ServicePage/SuccessPage';
import CreateRoom from './LogHomePage/AdminHomePage/Roomform';
import Alert from './Alert';
import Navbar from './Navbar/Navbar';
import Research from './homeComponent/ResearchPage/Research'
const Index2 = () => {
  return (
    <>
       <Router>
    <DeepState>
      <Navbar/>
      <Alert/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OptionSignup' element={<OptionSignup/>}/>
        <Route path='/OptionLogin' element={<OptionLogin/>}/>

        <Route path='/LoginFarmer' element={<LoginFarmer/>}/>
        <Route path='/LoginCompany' element={<LoginCompany/>}/>
        <Route path='/LoginAdmin' element={<LoginAdmin/>}/>

        <Route path='/SignUpFarmer' element={<SignUpFarmer/>}/>
        <Route path='/SignUpCompany' element={<SignUpCompany/>}/>
        <Route path='/SignUpAdmin' element={<SignUpAdmin/>}/>

        <Route path='/CompanyHome' element={<CompanyHome/>}/>
        <Route path='/FarmerHome' element={<FarmerHome/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>

        <Route path='/Auction' element={<Auction/>}/>
        <Route path='/AuctionList' element={<AuctionList/>}/>
        <Route path='/CreateRoom' element={<CreateRoom/>}/>
        
        <Route path='/Profile' element={<Profile/>}/>
        
        <Route path='/Service' element={<Service/>}/>
        <Route path='/SuccessPage' element={<SuccessPage/>}/>

        <Route path='/Forget' element={<Forget/>}/>
       
        <Route path='/Research' element={<Research/>}/>
       </Routes>
    </DeepState>
    </Router>
   
    </>
  )
}

export default Index2