import "./Main.css"
import ConsultationsContent from "./ConsultationsContent"
import SingUpContent from "./SignUpContent"
import MyNotesContent from "./MyNotesContent"
import Header from "../Header/Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
function Main(){
    return(
            <>
            <Header />
            <ConsultationsContent/>
            <SingUpContent/>
            <MyNotesContent/>
            <Outlet/>
            <Footer/>
            </>
    )
}

export default Main