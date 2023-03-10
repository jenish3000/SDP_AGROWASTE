import React from 'react';
import './Navbar.css';
// import Home from '../HomePage/Home';
import OptionSignup from '../OptionPage/OptionSignup';
import OptionLogin from '../OptionPage/OptionLogin';
import {useNavigate} from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate('OptionSignup');
    }
    const handleLogin=()=>{
        navigate('OptionLogin');
    }
  return (
    <>
<div className="navbar-container">
                    <div className="navbar-logo">
                        <img src="../images/v914-ning-21a.jpg" className="company-logo" alt="" />
                        <strong className="Companyname">
                            AgroWaste
                        </strong>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-options">
                            <span className="navbar-options-btn">
                                <a href='/'>Home</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#about">About</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#">Survey</a>
                            </span>
                            <span className="navbar-options-btn">
                                <a href="#contact">Contact</a>
                            </span>
                        </div>
                        <div className="signin btn" id="log-btn">

                            <button role="button" className="button-name" onClick={handleSignup}>
                                REGISTER</button>
                        </div>
                            <button role="button" className="button-name" onClick={handleLogin}>
                                SIGN IN</button>
                        </div>
                    </div>
                
    </>
  )
}

export default Navbar