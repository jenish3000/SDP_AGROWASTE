import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './AdminHome.css';
import axios from 'axios';
// import DeepContext from '../../context/DeepContext';
const AdminHome = () => {

  // const {showAlert}=useContext(DeepContext);

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

  return (
    <>
      <div className="center">

        {
          room ?

            room.map((ele) => {
              return <h1>{ele.Name}</h1>
            })

            :<></>
        }

        {
          service ?

            service.map((ele => {
              return <h2>{ele.email}</h2>
            }))

            :<></>
        }

        <button className='CreateRoom' onClick={showForm}>CreateRoom</button>
      </div>
    </>
  );
}

export default AdminHome;
