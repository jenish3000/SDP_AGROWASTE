import React, { useContext,useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import Home from '../HomePage/Home';

import OptionSignup from '../OptionPage/OptionSignup';
import DeepContext from '../../context/DeepContext';
import OptionLogin from '../OptionPage/OptionLogin';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [user, setUser] = useState("");
    const {loggedinC,LoginC,loggedinF,LoginF,loggedinA,LoginA}=useContext(DeepContext);
    // const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // axios.get('/')
        //     .then(res => setLoggedIn(res.data.loggedIn))
        //     .catch(err => console.log(err));
        const user1=localStorage.getItem("user");
        // console.log(user1);
        setUser(user1);
        console.log("hehehehhe",loggedinF , "dfsd",loggedinA,"dfsd",loggedinC);
    },[loggedinA,loggedinC,loggedinF]);

    const Logout= () => {
        // axios.post('/')
        //     .then(() => setLoggedIn(false))
        //     .catch(err => console.log(err));
        // localStorage.setItem("user",'');
        localStorage.setItem("loginC",false);
        localStorage.setItem("loginA",false);
        localStorage.setItem("loginF",false);
        localStorage.removeItem("user");
        setUser(null);
        LoginC(null,'false');
        LoginA('false');
        LoginF('false');
        navigate('/')
        // console.log("jenish",user);
    };
    

    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('OptionSignup');
        // setIsLoggedIn(false);
    }
    const handleLogin = () => {
        navigate('OptionLogin');
        // setIsLoggedIn(true);
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


                        {/* <button role="button" className="button-name" onClick={handleLogin}>
                            SIGN IN</button> */}
       {              
    (loggedinA === 'true')?
    <>
    <button role="button" className="button-name" onClick={Logout}>Admin</button>    
    </>: 
    <></>
     }
        {              
    (loggedinC === 'true')?
    <>
    <button role="button" className="button-name" onClick={Logout}>Company</button>
    </>: 
    <></>
      }
  {              
    (loggedinF === 'true')?
    <>
    <button role="button" className="button-name" onClick={Logout}>Farmer</button>
    </>:
    <></>
      }
      {
        (loggedinA === 'false' && loggedinC === 'false' && loggedinF === 'false')?
        <>
    
    <button role="button" className="button-name" onClick={handleSignup}>
                            REGISTER</button>
    <button role="button" className="button-name" onClick={handleLogin}>LogIn</button> 

        </>:
    <button role="button" className="button-name" onClick={Logout}>LogOut</button> 
      }
      

                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Navbar