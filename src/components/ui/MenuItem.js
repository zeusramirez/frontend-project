import React from 'react'

export default function MenuItem({name, price , id , restaurant_id}) {
    return (
        <li class="list-group-item disabled"> 
        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <p><span style={{color:'tomato'}}>Product:</span> {name} 
        <span style={{marginLeft:'15px'}}>Price:</span>{price}</p>
        <button type="button" class="btn btn-primary">Add to card</button>
        </div>
         </li>
    )
}
