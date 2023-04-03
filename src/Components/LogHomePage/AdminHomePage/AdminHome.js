import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './AdminHome.css';
// import DeepContext from '../../context/DeepContext';
const AdminHome = ()=>{

  // const {showAlert}=useContext(DeepContext);

  const navigate = useNavigate()

const showForm=()=>{
  navigate('/CreateRoom');
}

  return (
    <>
      <div className="center">
        
<button className='CreateRoom' onClick={showForm}>CreateRoom</button>
      </div>
    </>
  );
}

export default AdminHome;
