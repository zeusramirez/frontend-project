import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useHistory } from 'react-router'
import Modal from './Modal'
export default function Orders(props) {
    
    const [existingOrder, setExistingOrder] = useState([])
    const [itemListStatus, setItemListStatus] = useState(false)
  const [showModal, setShowModal] = useState(false)
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
                setShowModal(true)
            // .then(data => { if (data.status === 200){
            //   window.location.reload(true)}
            // })
      }
    return (
        <div className="container">  
      <br />
      <br />
      <br />
        <h2 className="text-center white">Order History</h2>
        {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} title={"Order Deleted."}/>: null}
            {existingOrder.map(({status, item, restaurant, order_id, quantity}) => <CartItem key={item.id}  order_id={order_id} restaurant_name={restaurant} status={status} quantity={quantity} removeItemHistory={removeItemHistory} {...item}/>)}
        </div>
    )
}