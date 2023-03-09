import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginCompany from '../LoginPage/LoginCompany';
import LoginFarmer from '../LoginPage/LoginFarmer';
import "./Option.css";
const OptionLogin=() =>{
  return (
    <>
    <Navbar/>
    <div className="he"> <button className='Option' id='card1' >
    <div class="container1">
  <div class="card">
   <a href="LoginFarmer"> Farmer</a>
  
  </div>
</div>
 </button>
 <button className='Option' id='card2'>
 <div class="container1">
  <div class="card">
    <a href="LoginCompany"> Company</a>
  
  </div>
</div>
 </button></div>

  
    </>
  )
}

export default OptionLogin