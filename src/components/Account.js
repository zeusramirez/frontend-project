import React, { useEffect, useState } from "react";

export default function Account() {
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        fetch("http://localhost:9393/user/1/account")
        .then((res) => res.json())
        .then((data) => setUserInfo(data));
    }, []);
    console.log(userInfo)
    function saveChanges() {
        fetch('http://localhost:9393/user/1/account',{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({delivery_instructions: userInfo.delivery_instructions})

        }).then(console.log)
    }
  return (
    <div className="container">
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account settings</h4>
      <div className="d-flex align-items-start py-3 border-bottom">
        
        <img
          src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img"
          alt="default"
        />
        <div className="pl-sm-4 pl-2" id="img-section">
          
          <b>Profile Photo</b>
          <p>Accepted file type .png. Less than 1MB</p>
          <button className="btn button border">
            <b>Upload</b>
          </button>
        </div>
      </div>
      <div className="py-2">
        <div className="row py-2">
          <div className="col-md-6">
            
            <label >Name</label>
            <input
              type="text"
              className="bg-light form-control"
              placeholder={userInfo.name}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            
            <label >Delivery Instructions</label>
            <input onChange={(e)=> setUserInfo({...userInfo, delivery_instructions:e.target.value})}
              type="text"
              className="bg-light form-control"
              value={userInfo.delivery_instructions}
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            
            <label >Phone Number</label>
            <input
              type="tel"
              className="bg-light form-control"
              placeholder = {userInfo.phone}
            />
          </div>
        </div>
        <div className="py-3 pb-4 border-bottom">
          
          <button onClick={saveChanges} className="btn btn-primary mr-3">Save Changes</button>
          <button className="btn border button">Cancel</button>
        </div>
        <div className="d-sm-flex align-items-center pt-3" id="deactivate">
          <div>
            
            <b>Deactivate your account</b>
          </div>
          <div className="ml-auto">
            
            <button className="btn danger">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
