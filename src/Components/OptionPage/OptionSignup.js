import React from 'react';
import Navbar from '../Navbar/Navbar';
import SignUpCompany from '../SignupPage/SignUpCompany';
import SignUpFarmer from '../SignupPage/SignUpFarmer';
import "./Option.css";
const OptionSignup=() =>{
  return (
    <>
    <Navbar/>
    <div className="he"> <button className='Option' id='card1' >
    <div class="container1">
  <div class="card">
   <a href="SignUpFarmer"> Farmer</a>
  
  </div>
</div>
 </button>
 <button className='Option' id='card2'>
 <div class="container1">
  <div class="card">
    <a href="SignUpCompany"> Company</a>
  
  </div>
</div>
 </button></div>

  
    </>
  )
}

export default OptionSignup