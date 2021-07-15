import React, { useEffect } from "react";

export default function Modal(props) {
 useEffect(()=> {
     setTimeout(()=>{
         props.setShowModal(false)
     }, 1000)
 },[])
 return (
<div className="modal fade show " id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{display: "block"}}>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" style={{background:"#72d95b"}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
            </div>
        </div>
        </div>
        </div>
  );
}
