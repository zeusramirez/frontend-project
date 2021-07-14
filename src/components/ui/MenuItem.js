import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function MenuItem({user, name, price, id, restaurant_id, addItemToCart,}) {
  const apiKey = process.env.REACT_APP_KEY

  const [foodImg, setFoodImg] = useState("");
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=f41a4840ed901c6d0&searchType=image&num=1&q=${name}`
    )
      .then((res) => res.json())
      .then((result) => result.items ? setFoodImg(result.items[0].image.thumbnailLink) : setFoodImg("https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"))
  }, []);
  return (
    <li className="list-group-item background menuItem white">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems:'center'
        }}
      >
        <div className="mr-1">
          <img
            className="rounded"
            src={foodImg}
            width="70"
            alt={name}
          />
        </div>
        <p>
          <span style={{ color: "tomato" }}>Product:</span> {name}
          <span style={{ marginLeft: "15px" }}>Price:</span>
          {price}
        </p>
       { user ? <button onClick={() => addItemToCart({ name, id, price })} type="button" className="btn btn-info">
          Add to cart
        </button>:<Link to='/login' type="button" className="btn btn-info">
          Login to Add
        </Link>
        }
      </div>
    </li>
  );
}
