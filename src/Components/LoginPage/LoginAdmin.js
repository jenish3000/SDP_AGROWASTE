import React, { useContext,useState } from 'react'
import "./style.css"
import SignUpAdmin from '../SignupPage/SignUpAdmin'
// import Forget from './Forget'
// import Navbar from '../Navbar/Navbar'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DeepContext from '../../context/DeepContext';
const LoginAdmin = () => {
  const {showAlert,LoginA}=useContext(DeepContext);
  const navigate = useNavigate()

  const [Admin,setAdmin] = useState({
    email:"", password:""
  })
  
  const Adminlogin = async (e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:5000/LoginAdmin', {
      email: Admin.email,
      password: Admin.password
    })
    if(data.data){
      showAlert(data.data.message,'success');
      LoginA('true');
      navigate('/')
    }else{
      showAlert(data.data.message,'danger');
    }
  }

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdmin({...Admin, [name]:value})
    e.preventDefault();
  }

  return (
    <>
    {/* <Navbar/> */}
      <div className="center">
      <h1>Login For Admin</h1>
      <form method="post">
        <div className="txt_field">  

          <input type="text" required name='email' value={Admin.email} onChange={handleInput}/>
          <label>Admin name</label>
        </div>
        <div className="txt_field"> 

          <input type="password" required name='password' value={Admin.password} onChange={handleInput}/>
          <label>Password</label>
        </div>
        <div className="pass"><a href="Forget" >Forget Password?</a></div>

             <input type="submit" value="Login" className="Login" onClick={Adminlogin}/>
        <div className="signup_link">
          Not a member? <a href="SignUpAdmin" >Signup</a>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginAdmin