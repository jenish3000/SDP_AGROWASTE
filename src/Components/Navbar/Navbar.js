import React from 'react';
import './Navbar.css';
import Home from '../HomePage/Home';
import OptionSignup from '../OptionPage/OptionSignup';
import OptionLogin from '../OptionPage/OptionLogin';
function Navbar() {
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

                            <button role="button" className="button-name">
                                <a href="/OptionSignup" className="call">REGISTER</a> </button>
                        </div>
                            <button role="button" className="button-name">
                                <a href="/OptionLogin" className="call">SIGN IN</a> </button>
                        </div>
                    </div>
                
    </>
  )
}

export default Navbar