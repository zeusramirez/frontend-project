import React, {useEffect} from 'react'
import CartItem from './CartItem'
import {useHistory } from "react-router-dom"


export default function Cart(props) {
    let history = useHistory();
    useEffect(() => {
        if (!props.user){
            history.push("/login")
        }
      }, []); 
    function placeOrder() {
        const newOrder = props.cartItems.map(item => ({user_id:props.user.id, menu_id: item.id, status:"Ordered"}))
        const orders = {orders:newOrder}
        fetch('http://localhost:9393/create_order',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(orders)

        }).then(props.clearCart())
    }
    return (
    <div className="container mt-5 mb-5 ">
        <div className="d-flex justify-content-center row " >
            <div className="col-md-8">
                <div className="p-2 white">
                    <h4>Shopping cart</h4>
                    <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down"></i></div>
                </div>
                {props.cartItems.map(cart => <CartItem key={cart.id} {...cart}/>)}
                <button onClick={placeOrder}className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Place Order</button>
            </div>
           

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    )
}