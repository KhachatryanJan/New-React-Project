
import { useTranslation} from "react-i18next"
function ReadMoreFooterP(){
  
    const {t}= useTranslation()
    return(
        <div className="box-2">
        <p className="foot-box-2-p">{t("HowToUse")}</p>
        <p className="foot-box-2-p">{t("answersToquestions")}</p>
        <p className="foot-box-2-p">{t("Fordoctors")}</p>
        <p className="foot-box-2-p">{t("AboutTheService")}</p>
        <p className="foot-box-2-p">{t("Contacts")}</p>
        <p className="foot-box-2-p">{t("UserAgreement")}</p>
      </div>
    )
}

export default ReadMoreFooterP