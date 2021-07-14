import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  " style={{background:'#030415', color:'white',boxShadow: "1px 1px 10px 1px gray"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FlatDash</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
              <Link className="dropdown-item" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Order History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/account"  aria-disabled="true">Account</Link>
              </li><li className="nav-item">
                <Link className="nav-link disabled" to="/login"  aria-disabled="true">LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
