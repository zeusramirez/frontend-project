import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function Login(props) {
    let history = useHistory()
    const [userInput, setUserInput] = useState("")
    const [newName, setNewName] = useState("") 
    const [newAddress, setNewAddress] = useState("") 
    const [newPhone, setnewPhone] = useState("") 
    const [newInstructions, setnewInstrcuctions] = useState("") 

    function createUser(){
        fetch('http://localhost:9393/user/signup',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newName,
                address: newAddress,
                delivery_instructions: newInstructions,
                phone: newPhone

            })

        }).then(res => res.json()).then(result => {
            props.setUser(result)
            history.push("/account")
        })
    }

    useEffect(() => {
        if (props.user){
            history.push("/account")
        }},[])
    function signIn(){
        fetch('http://localhost:9393/user/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: userInput
            })

        }).then(res => res.json()).then(result => {
            props.setUser(result)
            history.push("/account")
        })
    }


    // <input onChange={(e) => setUserInput(e.target.value)}value={userInput} classNameName="form-control form-group" placeholder="Name" required autofocus />
    //           <button onClick={signIn}classNameName="btn btn-lg btn-primary btn-block btn-signin" type="submit" >
    //             Login
    //           </button>
  return (
    <div className="container-fluid">
		<div className="container">
			<h2 className="text-center" id="title">SIGN IN | SIGN UP</h2>
			 <p className="text-center"></p>
 			<hr/>
			<div className="row">
				<div className="col-md-5">					
							<p className="text-uppercase pull-center"> SIGN UP.</p>	
 							<div className="form-group">
								<input value={newName} onChange={(e) => setNewName(e.target.value)} className="form-control input-lg" placeholder="name"/>
							</div>

							<div className="form-group">
								<input value={newAddress} onChange={(e) => setNewAddress(e.target.value)} className="form-control input-lg" placeholder="Address"/>
							</div>
							<div className="form-group">
								<input value={newPhone} onChange={(e) => setnewPhone(e.target.value)} className="form-control input-lg" placeholder="Phone Number"/>
							</div>
								<div className="form-group">
								<input  value={newInstructions} onChange={(e) => setnewInstrcuctions(e.target.value)} className="form-control input-lg" placeholder="Delivery Instructions"/>
							</div>
							<div className="form-check">
								<label className="form-check-label">
								  <input type="checkbox" className="form-check-input"/>
								  By Clicking register you're agree to our policy & terms to share a portion of your food with the delivery driver.
								</label>
							  </div>
 							<div>
 								<button onClick={createUser} type="submit" className="btn btn-lg btn-primary" >Sign Up </button>
 							</div>
				</div>
				
				<div className="col-md-2">
				</div>
				
				<div className="col-md-5">					
							<p className="text-uppercase"> Login using your account: </p>	
 								
							<div className="form-group">
								<input onChange={(e) => setUserInput(e.target.value)}value={userInput} className="form-control input-lg" placeholder="Name"/>
							</div>
                            <button onClick={signIn} className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Login </button>
				</div>
			</div>
		</div>
	</div>
  );
}
