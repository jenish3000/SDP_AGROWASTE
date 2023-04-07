import React, { useEffect, useState,useContext } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './AdminHome.css';
import axios from 'axios';
import ShowAuction from './ShowAuctionDetails/ShowAuction';
import CompleteRequest from './FulfillRequestForm/CompleteRequest'
// import Carousel2 from './Carousel2';
import DeepContext from '../../../context/DeepContext';
const AdminHome = () => {

  const {showAlert}=useContext(DeepContext);

  const navigate = useNavigate()

  const showForm = () => {
    navigate('/CreateRoom');
  }

  const [room, setRoom] = useState();
  const [service, setService] = useState();

  const getData = async () => {
    const data = await axios.post("http://localhost:5000/AdminHome")

    if (data?.data?.room && data?.data?.service) {
      setRoom(data?.data?.room);
      setService(data?.data?.service);
    } else {
      alert(data?.data?.message);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    console.log("Room->", room)
    console.log("Service->", service)
  }, [room || service])
const handleDeleteRequest=()=>{
  // localStorage.setItem("request",request);
  navigate('/CompleteRequest');
  
}
const handleAuctionResult=()=>{
  navigate('/ShowAuction');

}
let request;
  return (
    <>
    <div className="center">
      {/* <div className="center"> */}
      <div className="list-container">
      <ul className="list">
        {
          room ?

            room.map((ele) => {
              // request=ele;
              // return <ShowAuction data={ele}/>
              // return <button onClick={handleDeleteRequest}><li>{ele.Name}</li></button>
            })

            :<></>
        }
       </ul>
    {/* </div> */}
    </div>
    {/* <div className="center"> */}
      <div className="list-container">
      <ul className="list">
        {
          service ?

            service.map((ele => {
              // return <CompleteRequest data={ele}/>
              // return <button onClick={handleAuctionResult}><li>{ele.email}</li></button>
            }))

            :<></>
        }
       </ul>
       </div>
       {/* </div> */}

        <button className='CreateRoom' onClick={showForm}>CreateRoom</button>
        </div>
    </>
  );
}

export default AdminHome;
