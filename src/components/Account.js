import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "./ui/Loading";

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
    <div className="container backgroung">
    <div className="wrapper  mt-sm-5">
      <h4 className="pb-4 border-bottom white " style={{textAlign:'center'}}>Account settings</h4>
      <div className="d-flex align-items-start py-3 border-bottom" style={{display:'flex' , justifyContent:"center", alignItems:'center'}}>
        
        <img src="https://www.thispersondoesnotexist.com/image"  alt="default" style={{width:"25%", borderRadius:'25px'}} />
        <div className="pl-sm-4 pl-2" id="img-section">
          
       
        </div>
      </div>
      <div className="py-2">
        <div className="row py-2">
          <div className="col-md-6 white">
            
            <label >Name</label>
            <input
              type="text"
              className="bg-light form-control inputStyle"
              placeholder={userInfo.name}
            />
          </div>

          <div className="col-md-6 white">
            
            <label >Address</label>
            <input
              type="text"
              className="bg-light form-control inputStyle"
              placeholder={userInfo.address}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6 white">
            
            <label >Delivery Instructions</label>
            <input onChange={(e)=> setUserInfo({...userInfo, delivery_instructions:e.target.value})}
              type="text"
              className="bg-light form-control inputStyle"
              value={userInfo.delivery_instructions}
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3 white">
            
            <label >Phone Number</label>
            <input
              type="tel"
              className="bg-light form-control inputStyle"
              placeholder = {userInfo.phone}
            />
          </div>
        </div>
        <div className="py-3 pb-4 border-bottom">
          
          <button onClick={saveChanges} className="btn btn-info mr-3">Save Changes</button>
         
        </div>
        <div className="d-sm-flex align-items-center white pt-3" id="deactivate">
          <div>
            
            <b>Sign out of your account</b>
          </div>
          <div className="ml-auto">
            
            <button onClick={signUserOut}className="btn btn-danger">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}else{
  return (<Loading/>
  )
}
}