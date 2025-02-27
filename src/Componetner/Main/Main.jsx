import "./Main.css"
import ConsultationsContent from "./ConsultationsContent"
import SingUpContent from "./SignUpContent"
import MyNotesContent from "./MyNotesContent"
import Header from "../Header/Header/Header"
import Footer from "../Footer/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getDrow } from "../../store/selectors/doctorSelectors"
import { useEffect } from "react"
function Main(){
    const {id}=useSelector(getDrow)
    const r=useNavigate()
    useEffect(()=>{
        if(id) r(`/Doctor/${id}`)
    },[id])
    

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