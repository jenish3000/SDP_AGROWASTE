import React, { useState, useEffect } from "react";
import "./Profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import DeepContext from "../../context/DeepContext";
const Profile = ({ userId }) => {
    // const {user}=useContext(DeepContext);
  const [user, setUser] = useState({});

   
  useEffect(() => {
    const user1=localStorage.getItem("user");
    setUser("user1");
    // fetch user data from backend API
    
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1>{user.name}</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <p>{user.phone}</p>
              </div>
              <div className="form-group">
                <label>Address:</label>
                <p>{user.address}</p>
              </div>
              <div className="form-group">
                <label>Company:</label>
                <p>{user.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
