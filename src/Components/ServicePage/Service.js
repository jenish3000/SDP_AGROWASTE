import React, { useContext, useState } from 'react'
import LoginCompany from '../LoginPage/LoginCompany'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Home from '../HomePage/Home'
import Navbar from '../Navbar/Navbar';
import "./service.css"
import DeepContext from '../../context/DeepContext';
// this is new
const Service = () => {
  const {showAlert}=useContext(DeepContext);

  const navigate = useNavigate()

  const [service, setService] = useState({
    email:"", mobileno:"" ,acre: "", ptype: "", date: "", du1: "", du2: "", type:"", mtype:""
  })

  const Servicefun = async (e) => {
    e.preventDefault();
   
      const data = await axios.post('http://localhost:5000/Service', {
        email:service.email,
        mobileno:service.mobileno,
        acre: service.acre,
        ptype: service.ptype,
        date: service.date,
        du1: service.du1,
        du2: service.du2,
        type: service.type,
        mtype: service.mtype,
       
      })
      console.log(data.data);
      if (data.data.success) {
        showAlert(data.data.msg,'success');
        navigate('/')
      } else {
        showAlert(data.data.msg,'danger');
      }
     
  }


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setService({ ...service, [name]: value })
    e.preventDefault();
  }


  return (
    <>    
      <Navbar style="background-color:#1a4664;">
      </Navbar>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="center">
      <h1>Details</h1>
      <form onSubmit={Servicefun} method="POST" id="myForm">
      <div className="txt_field">
            <input type="text" required name='email' value={service.email} onChange={handleInput} />

            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required name='mobileno' value={service.mobileno} onChange={handleInput} />

            <label>Phone no.</label>
          </div>
        <div className="txt_field">
          <input type="text" name="acre" required value={service.acre} onChange={handleInput}/>
          <span></span>
          <label>How much land you have?<small>(in acers*)</small></label>
        </div>
        <div className="txt_field">
          <input type="text" name="ptype" required value={service.ptype} onChange={handleInput}/>
          <span></span>
          <label>Which crops are planted in your field?</label>
        </div>
        
        <div style="margin: 20px auto;">
          <label for="Date">When did you plant that crop?</label>
<input type="date" id="Date" name="Date" value={service.date} onChange={handleInput}/>
        </div>
        <div style="margin: 20px auto;">
          <label for="Date">Approx duration of harvesting.</label>
<input type="date" id="Date" name="du1" value={service.du1} onChange={handleInput}/>
<label>To</label>
<input type="date" id="Date" name="du2" value={service.du2} onChange={handleInput}/>
        </div>
       
        <div style="margin : 20px auto">
          <fieldset>
            <legend style="text-align: center;">What do you want to give ? </legend>
            <label className="lab">
              <input type="radio" name="type"  value={service.type} onChange={handleInput}/>
              Only Residues
            </label>
            <label className="lab">
              <input type="radio" name="type" value={service.type} onChange={handleInput}/>
              Both Seeds and Residues
            </label>
          </fieldset>
          
        </div>                
        <div style="margin: 20px auto;">
          <label for="faq">Select Machine you need for harvesting</label>
          <select id="faq" name="mtype" value={service.mtype} onChange={handleInput}>
            <option value="answer1">Harvester</option>
            <option value="answer2">Machine2</option>
            <option value="answer3">Machine3</option>
            <option value="answer3">Machine4</option>
          </select>
        </div>
        <div style="margin: auto;" className="cen">
         <input type="submit" value="a1" />
        </div>
        
      </form>
    </div>
    </>
  )
}

export default Service