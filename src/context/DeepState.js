
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import DeepContext from "./DeepContext";
import axios from "axios";
const DeepState = (props)=>{
  const [user,setUser]=useState('');
    const [alert, setalert] = useState(null);
    
    const navigate = useNavigate();
 
    // const BaseUrl = 'http://localhost:5000'
    useEffect(()=>console.log("hellos"),[alert]);
const LOGIN=(value)=>{
  setUser(value)
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
        <DeepContext.Provider value={{showAlert,alert,user,LOGIN}}>
               {props.children}
        </DeepContext.Provider>
    )
}
}
export default DeepState;
