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
  // const [start, inputStart] = useState("");
  // const [end, inputEnd] = useState(""); 
  // const [errorStartEmpty, isErrorStartEmpty] = useState(true);
  // const [errorEndEmpty, isErrorEndEmpty] = useState(true);
  const navigate = useNavigate()

  const [service, setService] = useState({
    email: "", mobileno: "", acre: "", ptype: "", date1: "", du1: "", du2: "", type: "", mtype: ""
  })

  // const dateValidate = () => {
  //   if (service.du1 > service.du2) {
  //     console.log("Start > end");
  //     // console.log(service.du1.valueAsNumber);
  //     // console.log(service.du2.valueAsNumber);
  //   } 
  //   // else {  
  //     // console.log("Ok");
  //     // console.log(service.du1.valueAsNumber);
  //     // console.log(service.du2.valueAsNumber);
  //   // }
  // };
  const Servicefun = async (e) => {
    e.preventDefault();
    const ele=document.getElementById("myRadio").value;
    let i;
    for(i = 0;i < ele.length;i++){
      // if(ele[i].checked)
      console.log("element",ele[i].value);
      // document.getElementById("result").innerHTML
      //         = "choice: "+ele[i].value;
  }
    // console.log("radio1 value",radio1);
    const data = await axios.post('http://localhost:5000/Service', {
      email: service.email,
      mobileno: service.mobileno,
      acre: service.acre,
      ptype: service.ptype,
      date1: service.date1,
      du1: service.du1,
      du2: service.du2,
      type: service.type,
      mtype: service.mtype,

    })
    console.log("data of service :::",data.data);
    if (data.data.success) {
      showAlert(data.data.msg, 'success');
      navigate('/SuccessPage')
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
        <form id="myForm" onSubmit={Servicefun} method="POST">
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
          <div className="txt_field">

            <input type="date" id="Date1" name="date1" value={service.date1} onChange={handleInput} />
            <label >When did you plant that crop?</label>
            {/* <span></span> */}
          </div>
          <div >

            <div className="txt_field">
              <input type="date" id="Date1" name="du1" value={service.du1} onChange={handleInput} />
              <label for="Date1">Approx duration of harvesting.</label>
              {/* <span></span> */}
            </div>

            <div className="txt_field">
              <input type="date" id="Date2" name="du2" value={service.du2} onChange={handleInput} />
              <label>To</label>
              {/* <span></span> */}
            </div>  </div>

          <div className='jb' >

            <label>What do you want to give ? </label>
            <span></span>
          </div>
          <div className="radio-inputs jb1">
            <label className="radio">
              <input type="radio" id="myRadio" name="radio" value={service.type} />
              <div className="name">Only Residue</div>

            </label>
            <label className="radio">
              <input type="radio" id="myRadio" name="radio" value={service.type} />
              <div className="name">Both Residue & Grains</div>
            </label>
          </div>
{/* kar have  ubhi re join tham
*/}

          <div className='jb' >

            <label for="faq">Select Machine you need for harvesting</label>
            <span></span>
          </div>
          <div >
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" value={service.mtype}  />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Harvester</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" value={service.mtype}  />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 1</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" value={service.mtype}   />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 2</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" value={service.mtype}  />
              <div class="checkmark"></div>
            </label>
            <label className='jb3'>Machine 3</label>
            </div>
            <div className="jb2">
            <label class="conta">
              <input  type="checkbox" value={service.mtype}   />
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