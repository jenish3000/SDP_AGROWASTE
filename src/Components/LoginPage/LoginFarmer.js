import React, { useContext,useState } from 'react'
import "./style.css"
import SignUpFarmer from '../SignupPage/SignUpFarmer'
import Forget from './Forget'
import Navbar from '../Navbar/Navbar'; 
// import Home from '../HomePage/Home'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DeepContext from '../../context/DeepContext';
const LoginFarmer = () => {
  const {showAlert,LoginF}=useContext(DeepContext);
  const navigate = useNavigate()

  const [user,setuser] = useState({
    email:"", password:""
  })
  
  const userlogin = async (e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:5000/LoginFarmer', {
      email: user.email,
      password: user.password
    })
    console.log(data);
    if(data.data){
      showAlert(data.data.message,'success');
      LoginF('true');
      navigate('/')
    }else{
      showAlert(data.data.message,'danger');
    }
  }

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({...user, [name]:value})
    e.preventDefault();
  }

  return (
    <>
    {/* <Navbar/> */}
      <div className="center">
      <h1>Login for Farmer</h1>
      <form onSubmit={userlogin} method="post">
        <div className="txt_field">  

          <input type="text" required name='email' value={user.email} onChange={handleInput}/>
          <label>Username</label>
        </div>
        <div className="txt_field"> 

          <input type="password" required name='password' value={user.password} onChange={handleInput}/>
          <label>Password</label>
        </div>
        <div className="pass"><a href="Forget" >Forget Password?</a></div>

             <input type="submit" value="Login" className="Login" />
        <div className="signup_link">
          Not a member? <a href="SignUpFarmer" >Signup</a>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginFarmer