import { useContext } from "react"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { translet } from "../../utils/translet"

function ReadMoreFooterP(){
    const {lang}=useContext(LanguageContexte)
    return(
        <div className="box-2">
        <p className="foot-box-2-p">{translet("HowToUse",lang)}</p>
        <p className="foot-box-2-p">{translet("answersToquestions",lang)}</p>
        <p className="foot-box-2-p">{translet("Fordoctors",lang)}</p>
        <p className="foot-box-2-p">{translet("AboutTheService",lang)}</p>
        <p className="foot-box-2-p">{translet("Contacts",lang)}</p>
        <p className="foot-box-2-p">{translet("UserAgreement",lang)}</p>
      </div>
    )
}

export default ReadMoreFooterP