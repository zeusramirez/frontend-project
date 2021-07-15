import React from 'react'
import "./Loading.scss"
export default function Loading() {
    return (
        <div className="loading">
        <div className="pencil">
  <div className="pencil__ball-point"></div>
  <div className="pencil__cap"></div>
  <div className="pencil__cap-base"></div>
  <div className="pencil__middle"></div>
  <div className="pencil__eraser"></div>
</div>
<div className="line"></div>
<h2 className="loadingTitle">Page Loading...Please Wait</h2>
</div>
    )
}
