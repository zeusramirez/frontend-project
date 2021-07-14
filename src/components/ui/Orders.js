import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useHistory } from 'react-router'
export default function Orders(props) {
    
    const [existingOrder, setExistingOrder] = useState([])
    const [itemListStatus, setItemListStatus] = useState(false)
    let history = useHistory();
    useEffect(() => {
        if (!props.user){
            history.push("/login")
        }else{
        fetch(`http://localhost:9393/user/${props.user.id}/orders`).then(res => res.json()).then(data => setExistingOrder(data))
    }},[itemListStatus])
    function removeItemHistory(order_id){
        fetch( `http://localhost:9393/user/${props.user.id}/orders/${order_id}`,{
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            }).then(data => {if (data.status === 200){
                setItemListStatus(itemListStatus => !itemListStatus)}}
                    )
            // .then(data => { if (data.status === 200){
            //   window.location.reload(true)}
            // })
      }
      console.log(itemListStatus)
    console.log(existingOrder)
    return (
        <div>
            {existingOrder.map(({status, item, restaurant, order_id}) => <CartItem key={item.id}  order_id={order_id} restaurant={restaurant} status={status} removeItemHistory={removeItemHistory} {...item}/>)}
        </div>
    )
}