import React, {useEffect, useState} from 'react'
import Card from './ui/Card'

export default function Restaurants() {
    const [data, setData] = useState([]) 
 useEffect(() => {
    fetch('http://localhost:9393/')
    .then(res => res.json())
    .then(result => setData(result))
 }, [])


 if (data.length > 0){
    return (
        <div class="container">
  <div class="row">
       {data.map( restaurant => <div class="col-6 col-md-4" style={{marginBottom:'25px'}}><Card  key={restaurant.id} {...restaurant}/></div>)}
       </div>
       </div>
    )
} else{
 return (
        <div>
            Loading.....!!
        </div>
    )
}
}

