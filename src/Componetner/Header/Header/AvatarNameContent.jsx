import { useContext, useState } from "react"
import victorImg from "../../../images/Vector (2).png"
import MyInfo from "./myInfo/MyInfo"
import AuthContext  from "../../../Constext/authConstext"
function AvatarNameContent() {
    const {user}=useContext(AuthContext)
    const [avatar, setAvatar] = useState("A")
    const [userInfo, setUserinfo] = useState(false)
    return (
        <div>
            <div className="AvatarNameContent">
                <div className="Avatar"><span className="avat">{avatar}</span></div>
                <p className="AvatarName"></p>
                <img src={victorImg} alt="victor" className="Victor" onClick={() => {  
                    setUserinfo(!userInfo)
                }}></img>
            </div>
            {userInfo && (<div className="activ-info">
                <MyInfo />
            </div>)}
        </div>
    )
}

export default AvatarNameContent