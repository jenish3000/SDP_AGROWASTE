import React, { useContext, useState, useEffect } from 'react';
import "./Profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import DeepContext from "../../context/DeepContext";
const Profile = () => {
    const {user,setUser}=useContext(DeepContext);
  // const [user1, setUser1] = useState({});

  useEffect(() => {
    let u = JSON.parse(localStorage.getItem("userLogin"));
    u ? setUser(u) : setUser(null)
}, [])

  return (
    <div className="container12">
          <div className="card12">
            <div className="card-header12">
              <h1>{user.name}</h1>
            </div>
            <div className="card-body12">
             <div className="form-group12">
                <label>Phone:</label>
                <p>{user.mobileno}</p>
              </div> 
              <div className="form-group12">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              
              {/* <div className="form-group">
                <label>Address:</label>
                <p>{user.address}</p>
              </div>
              <div className="form-group">
                <label>Company:</label>
                <p>{user.company}</p> */}
              {/* </div> */}
            
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
