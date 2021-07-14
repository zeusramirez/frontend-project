import React, {useEffect, useState} from "react";


export default function CartItem(props) {
  const [foodImg, setFoodImg] = useState("");
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyCjV1nYGvDaMuK1f679Uq1Y2rgPTmDSlHE&cx=f41a4840ed901c6d0&searchType=image&num=1&q=${props.name}`
    )
      .then((res) => res.json())
      .then((result) => result.items ? setFoodImg(result.items[0].image.thumbnailLink) : setFoodImg("https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"));
  }, []);

  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 mt-4 px-3 rounded" style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", }}>
      <div className="mr-1">
        <img className="rounded" src={foodImg} width="70" alt={props.name}/>
      </div>
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold">{props.name}</span>
        <div className="d-flex flex-row product-desc">
          <div className="color">
            <span className="text-grey">Restaurant:</span>
            <span className="font-weight-bold">{props.restaurant}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center qty">
        <h5 className="text-grey mt-1 mr-1 ml-1">1</h5>
      </div>
      <div>
        <h5 className="text-grey">${props.price}</h5>
      </div>
      <div className="d-flex align-items-center">
          {props.status ? (<div className="color">
            <span className="text-grey">{props.status}</span>
          </div>):<i className="fa fa-trash mb-1 text-danger"></i>}
      </div>
      <div className="d-flex align-items-center">
          {props.order_id ? (<button onClick={() => props.removeItemHistory(props.order_id)} type="button" className="btn btn-outline-danger">Remove from History</button>):null}
      </div>

    </div>
  );
}