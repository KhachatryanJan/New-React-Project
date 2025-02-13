import "./Main.css"
import ConsultationsContent from "./ConsultationsContent"
import SingUpContent from "./SignUpContent"
import MyNotesContent from "./MyNotesContent"

import { Outlet } from "react-router-dom"
function Main(){
    return(
            <>
            <ConsultationsContent/>
            <SingUpContent/>
            <MyNotesContent/>
            <Outlet/>
            </>
    )
}

export default Main