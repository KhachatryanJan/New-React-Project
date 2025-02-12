import { useState } from "react"
import SubscribeImg from "../../../images/subscribe.png"

function SubscribeContent(){
    const [number,setNumber]=useState(3)
    return(
       <div className="subcontent1">
        <div className="cricleOrange"><span className="number">{number}</span></div>
        <img src={SubscribeImg} alt="subscribe" className="subscribe"></img>
       </div>
    )
}

export default SubscribeContent