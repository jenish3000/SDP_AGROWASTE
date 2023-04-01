
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import DeepContext from "./DeepContext";
import axios from "axios";
const DeepState = (props)=>{
  const setlogin=localStorage.getItem('loggedin');
  const [user,setUser]=useState('');
    const [alert, setalert] = useState(null);
    const [loggedin, setLoggedin] = useState(setlogin);
    
    const navigate = useNavigate();
 
    // const BaseUrl = 'http://localhost:5000'
    // useEffect(()=>console.log("hello"),[alert]);
const LOGIN=(value,state)=>{
  localStorage.setItem("loggedin",state);
  console.log("hiiiii",value,state);
  setUser(value);
  setLoggedin(state);

}

  {  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    console.log("hello alert");
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  

  //To login into Student Account
  

    return(
        <DeepContext.Provider value={{showAlert,alert,user,LOGIN,loggedin}}>
               {props.children}
        </DeepContext.Provider>
    )
}
}
export default DeepState;
