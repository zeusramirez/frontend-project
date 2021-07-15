import React, { useEffect, useState } from "react";
import Card from "./ui/Card";
import Banner from "./Banner";
import Loading from "./ui/Loading";

export default function Restaurants() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9393/")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (data.length > 0) {
    return (
      <div className="container background">
      <Banner />
        <div className="row">
          {data.map((restaurant) => (
            <div className="col-6 col-md-4" style={{ marginBottom: "25px" }}>
              <Card key={restaurant.name} {...restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <Loading/>;
  }
}
