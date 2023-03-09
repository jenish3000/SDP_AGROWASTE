import React from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import LoginFarmer from './LoginPage/LoginFarmer';
import LoginCompany from './LoginPage/LoginCompany';
import SignUpFarmer from './SignupPage/SignUpFarmer';
import SignUpCompany from './SignupPage/SignUpCompany';
import Home from './HomePage/Home';
import Forget from './LoginPage/Forget';
import Service from './ServicePage/Service';
import OptionSignup from './OptionPage/OptionSignup';
import OptionLogin from './OptionPage/OptionLogin';
import DeepState from '../context/DeepState';
import Alert from './Alert';
const Index2 = () => {
  return (
    <>
       <Router>
    <DeepState>
      <Alert/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OptionSignup' element={<OptionSignup/>}/>
        <Route path='/OptionLogin' element={<OptionLogin/>}/>
        
        <Route path='/LoginFarmer' element={<LoginFarmer/>}/>
        
        <Route path='/LoginCompany' element={<LoginCompany/>}/>
        
        <Route path='/SignUpFarmer' element={<SignUpFarmer/>}/>

        <Route path='/SignUpCompany' element={<SignUpCompany/>}/>
        
        <Route path='/Forget' element={<Forget/>}/>

        <Route path='/Service' element={<Service/>}/>
       </Routes>

    </DeepState>
    </Router>
   
    </>
  )
}

export default Index2