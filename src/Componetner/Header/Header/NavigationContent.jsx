import { useContext } from "react"
import { LanguageContexte } from "../../../Constext/LanguageConstext"
import { translet } from "../../../utils/translet"


function NavContent(){
   const {lang}=useContext(LanguageContexte)
   return(
    <div className="navContent">
     <p className="nav-p">{translet("HowToUse",lang)}</p>
     <p className="nav-p">{translet("MyEntries", lang)}</p>
     <p className="nav-p">{translet("MakeAnAppointmentWithADoctor", lang) }</p>
    </div>
   )
}

export default NavContent