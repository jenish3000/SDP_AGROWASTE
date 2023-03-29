import React, { useContext, useState } from 'react'
import "./style.css"
import SignUpCompany from '../SignupPage/SignUpCompany'
import Forget from './Forget'
import Navbar from '../Navbar/Navbar'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DeepContext from '../../context/DeepContext';

const LoginCompany = () => {
  const {showAlert,user,LOGIN}=useContext(DeepContext);

  const navigate = useNavigate()
  
  const [Company,setCompany] = useState({
    email:"", password:""
  })
  
//   const loginCompany = async ({Email,Password})=>{
//     const url = 'http://localhost:5000/api/auth/LoginCompany';
//     await axios.post(url,{Email,Password})
//     .then((res)=>{
//         console.log("Response from login",res);
//     })
//     .catch((err)=>{
//         console.log("Error occured at login ",err);
//     })
// }
// const submit = async function (e){
// e.preventDefault();
// let Email = document.getElementById('email').value;
// let Password = document.getElementById('password').value;
// loginCompany({Email,Password});
// }

  const Companylogin = async (e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:5000/LoginCompany', {
      email: Company.email,
      password: Company.password
    })
    console.log("inside company   ,"+data);
    if(data.data){
      showAlert(data.data.message,'success');
      // <submit/>
      let Cname=data.data.data.name;
      LOGIN(data.data.data.name);
      console.log("hi jenish",user);
      console.log("hiiii",data.data.data.name);
      navigate('/')
    }else{
      showAlert(data.data.message,'danger');
    }
  }

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCompany({...Company, [name]:value})
    e.preventDefault();
  }

  return (
    <>
    {/* <Navbar/> */}
      <div className="center">
      <h1>Login For Company</h1>
      <form  onSubmit={Companylogin} method="post">
        <div className="txt_field">  

          <input type="text" required name='email' value={Company.email} onChange={handleInput}/>
          <label>Companyname</label>
        </div>
        <div className="txt_field"> 

          <input type="password" required name='password' value={Company.password} onChange={handleInput}/>
          <label>Password</label>
        </div>
        <div className="pass"><a href="Forget" >Forget Password?</a></div>

             <input type="submit" value="Login" className="Login" />
        <div className="signup_link">
          Not a member? <a href="SignUpCompany" >Signup</a>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginCompany