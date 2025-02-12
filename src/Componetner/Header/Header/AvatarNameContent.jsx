import { useState } from "react"
import victorImg from "../../../images/Vector (2).png"
import MyInfo from "./myInfo/MyInfo"

function AvatarNameContent() {
    const [avatar, setAvatar] = useState("A")
    const [userInfo, setUserinfo] = useState(false)
    return (
        <div>
            <div className="AvatarNameContent">
                <div className="Avatar"><span className="avat">{avatar}</span></div>
                <p className="AvatarName">Артем Свиридов</p>
                <img src={victorImg} alt="victor" className="Victor" onClick={() => {
                    console.log(userInfo);
                    
                    setUserinfo(!userInfo)
                }}></img>
            </div>
           
        </div>
    )
}

export default AvatarNameContent