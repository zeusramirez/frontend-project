import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar({user, setUser, totalItems}) {
    return (
        <nav style={{display: "flex", justifyContent: 'space-around'}} className="navbar navbar-expand-lg  shadow background" >
         <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <img src="https://instructure-uploads.s3.amazonaws.com/account_158020000000000001/attachments/43747/logo-primary.svg" />
          <Link className="navbar-brand fontColor" to="/" >FlatDash</Link>
          </div>
          <div  style={{display: 'flex', alignContent: 'end'}}>
        {
          user ?
                  <><ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                <Link className="nav-link white" to="/cart" >Cart {totalItems > 0 ? <span class="badge badge-pill badge-danger">{totalItems} </span>: null}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link white" to="/orders">Order History</Link>
                </li>
                  </ul><Link className="navbar-brand white" to="/account"  aria-disabled="true">
              <img src="https://www.thispersondoesnotexist.com/image" width="30" height="30" class="d-inline-block align-top" alt=""/>{user.name}
              </Link><Link  onClick= {() => setUser()} className="btn btn-outline-danger " to="/"  aria-disabled="true">LogOut</Link>
              </>: <Link  to="/login" className="btn btn-outline-info "  >Login </Link>
}
</div>
      </nav>
    )
}
