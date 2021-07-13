import React from 'react'

export default function MenuItem({name, price , id , restaurant_id, addItemToCart}) {
    return (
        <li className="list-group-item disabled"> 
        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <p><span style={{color:'tomato'}}>Product:</span> {name} 
        <span style={{marginLeft:'15px'}}>Price:</span>{price}</p>
        <button onClick={() => addItemToCart({name, id, price})} type="button" className="btn btn-primary">Add to cart</button>
        </div>
         </li>
    )
}
