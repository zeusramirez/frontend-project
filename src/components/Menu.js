import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./ui/MenuItem";
export default function Menu() {
  const { id } = useParams();
  const url = `http://localhost:9393/restaurant/${id}`;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(result => setMenu(result));
  }, [url]);

  if (menu.length > 0) {
    return (
      <div class="container">
        <ul class="list-group">
          {menu.map(item => <MenuItem key={item.id} {...item}/>)}
        </ul>
      </div>
    );
  } else {
    return <div>Loading....!!</div>;
  }
}
