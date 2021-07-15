import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./ui/MenuItem";
import Modal from "./ui/Modal";
import Loading from "./ui/Loading";
export default function Menu(props) {
  const { id } = useParams();
  const url = `http://localhost:9393/restaurant/${id}`;
  const [menu, setMenu] = useState({menu:[]});
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(result => setMenu(result));
  }, [url]);
  console.log(menu.menu)
  if (menu.menu.length > 0) {
    return (
      <div className="container" >
      <br />
      <br />
      <br />
      <br />
      <br />
        <h2 className="text-center white">Menu from {menu.restaurant_name}</h2>
        {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} title={"Item added to cart."}/>: null}
        <ul className="list-group">
          {menu.menu.map(item => <MenuItem user={props.user} setShowModal={setShowModal} restaurant_name={menu.restaurant_name}addItemToCart={props.addItemToCart} key={item.id} {...item}/>)}
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  } else {
    return <Loading/>;
  }
}
