import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DeepContext from '../../../context/DeepContext';
const Roomform=()=> {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
const {showAlert}=useContext(DeepContext);

const navigate = useNavigate()

const [Room, setRoom] = useState({
  Name: "",description:"", Code: "", startDate: "", endDate: ""
})

 

  const handleSubmit = async(event) => {
    event.preventDefault();
    
  const data= await axios.post('http://localhost:5000/CreateRoom', {
      Name:Room.Name,
      description:Room.description,
      Code:Room.Code,
      startDate:Room.startDate,
      endDate : Room.endDate
    })
   console.log("deep",data);
    if (data.data.success) {
      showAlert(data.data.msg,'success');
      navigate('/AdminHome')
    } else {
      showAlert(data.data.msg,'danger');
    }
      
  };
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRoom({ ...Room, [name]: value })
    e.preventDefault();
  }

  return (
    <div>
      <h1>Create a new auction room</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name='Name' value={Room.Name} onChange={handleInput} />
        </label>
        <br/>
        <label>
          Description:
          <input type="text" name='description' value={Room.description} onChange={handleInput} />
        </label>
        <br />
        <label>
          Unique Code:
          <input type="text" name='Code' value={Room.Code} onChange={handleInput} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="datetime-local" name='startDate' value={Room.startDate} onChange={handleInput} />
        </label>
        <br />
        <label>
          End Date:
          <input type="datetime-local" name='endDate' value={Room.endDate} onChange={handleInput} />
        </label>
        <br />
        <button type="submit">Create Room</button>
      </form>
    </div>
  );
}

export default Roomform;
