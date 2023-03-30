import React from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import LoginFarmer from './LoginPage/LoginFarmer';
import LoginCompany from './LoginPage/LoginCompany';
import LoginAdmin from './LoginPage/LoginAdmin';
import SignUpFarmer from './SignupPage/SignUpFarmer';
import SignUpCompany from './SignupPage/SignUpCompany';
import SignUpAdmin from './SignupPage/SignUpAdmin';
import Auction from './Auction/Auction';
import AuctionList from './Auction/AuctionList';
import Home from './HomePage/Home';
import Forget from './LoginPage/Forget';
import Service from './ServicePage/Service';
import OptionSignup from './OptionPage/OptionSignup';
import OptionLogin from './OptionPage/OptionLogin';
import DeepState from '../context/DeepState';
import Alert from './Alert';
import Navbar from './Navbar/Navbar';
import Research from './HomePage/ResearchPage/Research'
const Index2 = () => {
  return (
    <>
       <Router>
    <DeepState>
      <Navbar></Navbar>
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
        <Route path='/Auction' element={<Auction/>}/>
        <Route path='/AuctionList' element={<AuctionList/>}/>
        <Route path='/Forget' element={<Forget/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Research' element={<Research/>}/>
       </Routes>
    </DeepState>
    </Router>
   
    </>
  )
}

export default Index2