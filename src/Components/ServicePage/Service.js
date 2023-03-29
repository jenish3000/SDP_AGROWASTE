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
  const { showAlert } = useContext(DeepContext);

  const navigate = useNavigate()

  const [service, setService] = useState({
    email: "", mobileno: "", acre: "", ptype: "", date: "", du1: "", du2: "", type: "", mtype: ""
  })

  const Servicefun = async (e) => {
    e.preventDefault();

    const data = await axios.post('http://localhost:5000/Service', {
      email: service.email,
      mobileno: service.mobileno,
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
      showAlert(data.data.msg, 'success');
      navigate('/')
    } else {
      showAlert(data.data.msg, 'danger');
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
      {/* <Navbar>
      </Navbar> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      {/* <div className="space"></div> */}
      <div className="center JB">
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
            <input type="text" name="acre" required value={service.acre} onChange={handleInput} />
            <span></span>
            <label>How much land you have?<small>(in acers*)</small></label>
          </div>
          <div className="txt_field">
            <input type="text" name="ptype" required value={service.ptype} onChange={handleInput} />
            <span></span>
            <label>Which crops are planted in your field?</label>
          </div>
          <span></span>
          <div className="txt_field"  >

            <input type="date" id="Date" name="Date1" value={service.date} onChange={handleInput} />
            <label for="Date">When did you plant that crop?</label>
            {/* <span></span> */}
          </div>
          <div >

            <div className="txt_field">
              <input type="date" id="Date" name="du1" value={service.du1} onChange={handleInput} />
              <label for="Date">Approx duration of harvesting.</label>
              {/* <span></span> */}
            </div>

            <div className="txt_field">
              <input type="date" id="Date" name="du2" value={service.du2} onChange={handleInput} />
              <label>To</label>
              {/* <span></span> */}
            </div>  </div>

          <div className='jb' >

            <label>What do you want to give ? </label>
            <span></span>
          </div>
          <div className="radio-inputs jb1">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="name">Only Residue</span>

            </label>
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="name">Both Residue & Grains</span>
            </label>
          <span></span>

          </div>
<span></span>

          <div className='jb' >

            <label for="faq">Select Machine you need for harvesting</label>
            <span></span>
          </div>
          <div >
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Harvester</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 1</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 2</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 3</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 4</label>
            </div>
          
            {/* <select id="faq" name="mtype" value={service.mtype} onChange={handleInput}>
              <option value="answer1">Harvester</option>
              <option value="answer2">Machine2</option>
              <option value="answer3">Machine3</option>
              <option value="answer3">Machine4</option>
            </select> */}

          </div>
          <div className="cen">
            <input type="submit" value="Request" />
          </div>
        </form>
        {/* <div className="space"></div> */}

        {/* <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form> */}
      </div>
      <div className="space"></div>
    </>
  )
}

export default Service