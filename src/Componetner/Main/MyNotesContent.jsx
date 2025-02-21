
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { Link } from "react-router-dom" 
import { useTranslation} from "react-i18next"
function MyNotesContent() {
    
    const {t}=useTranslation()
    
    return (
        <div>
            <div className="my-notes"><p className="my-notes-p">{t("MyEntries")}</p></div>

            <div className="UpcomingPastCanceled">
          <Link to ="Upcoming" ><p className="hov-p">{t("Upcoming")}</p></Link>
          <Link to ="Past"><p className="hov-p">{t("Past")}</p></Link>  
           <Link to="Status"> <p className="hov-p">{t("Canceled")}</p> </Link>   
            </div>
        </div>
    )
}

export default MyNotesContent