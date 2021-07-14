import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar({user, setUser}) {
    return (
        <nav className="navbar navbar-expand-lg  shadow background" >
        <div className="container " >
         <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <img src="https://instructure-uploads.s3.amazonaws.com/account_158020000000000001/attachments/43747/logo-primary.svg" />
          <Link className="navbar-brand fontColor" to="/" >FlatDash</Link>
</div>
          <div className="collapse navbar-collapse" id="navbarScroll" style={{marginLeft:'55%'}}>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
              <Link className="nav-link white" to="/cart" >Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link white" to="/orders">Order History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link white" to="/account"  aria-disabled="true">Account</Link>
              </li>
              {
                user ? <li className="nav-item">
                <Link className="nav-link white " to="/login"  aria-disabled="true">LogOut</Link>
              </li>:  <Link  to="/login" className="btn btn-outline-info "  >Login </Link>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    )
}
