import React from "react";
import {Link} from 'react-router-dom'
export default function Card({ image, name, address, phone, id }) {
  return (
    <div className="card borderEffect shadow" style={{overflow:'hidden', color:'white'}}>
    
      <img className="card-img-top" src={image} alt={name} />
     
      <div className="card-body background">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{address}</p>
        <p className="card-text">{phone} </p>
        <Link to={`/menu/${id}`} className="btn btn-info">
        See Menu
        </Link>
      </div>
    </div>
  );
}
