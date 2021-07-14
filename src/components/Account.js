import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Account(props) {
  let history = useHistory();
    const [userInfo, setUserInfo] = useState(props.user)
    function signUserOut(){
      props.setUser(null)
      history.push("/login")
    }
    useEffect(() => {
      if (!props.user){
        history.push("/login")
    }}, []);
    console.log(userInfo)
    function saveChanges() {
        fetch(`http://localhost:9393/user/${userInfo.id}/account`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({delivery_instructions: userInfo.delivery_instructions})

        }).then(console.log)
    }
  if (userInfo){return (
    <div className="container">
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account settings</h4>
      <div className="d-flex align-items-start py-3 border-bottom">
        
        <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=6&m=1214428300&s=170667a&w=0&h=hMQs-822xLWFz66z3Xfd8vPog333rNFHU6Q_kc9Sues=" className="img" alt="default" />
        <div className="pl-sm-4 pl-2" id="img-section">
          
          <b>Profile Photo</b>
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
            
            <b>Sign out of your account</b>
          </div>
          <div className="ml-auto">
            
            <button onClick={signUserOut}className="btn danger">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}else{
  return (
    <div>
      <h2>loading...</h2>
    </div>
  )
}
}