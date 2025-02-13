import { useContext } from "react"
import { translet } from "../../utils/translet"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { Link } from "react-router-dom" 
function MyNotesContent() {
    const {lang}=useContext(LanguageContexte)
    return (
        <div>
            <div className="my-notes"><p className="my-notes-p">{translet("MyEntries", lang)}</p></div>

            <div className="UpcomingPastCanceled">
          <Link to ="Upcoming" ><p className="hov-p">{translet("Upcoming", lang)}</p></Link>
          <Link to ="Past"><p className="hov-p">{translet("Past", lang)}</p></Link>  
           <Link to="Status"> <p className="hov-p">{translet("Canceled", lang)}</p></Link>   
            </div>
        </div>
    )
}

export default MyNotesContent