

import lightBlue from "../../images/lightBlue.png"
import lightBlue2 from "../../images/lightBlue2.png"
import doctorsPhot from "../../images/depositphotos.png"
import doctorsBody from "../../images/DoctorsBody.png"
import { useTranslation } from "react-i18next"
function ConsultationsContent() {
  
    const {t}=useTranslation()
    return (
        <div className="ConsultationsContent">
            <div>
                <h1 className="consul-h1">{t("OnlineConsultationsFromSpecialistDoctors")}<br />{t("OnlineConsultationsFromSpecialistDoctors1")}</h1>
                <div className="Orange-squares"></div>

                <p className="consul-p">{t("Consult")}<b className="b-col"> {t("Now")}</b><div className="Orange-squares1"></div>
                    {t("orBy")} <b className="b-col"> {t("pre-registration")}</b><div className="Orange-squares2"></div><br />
                    {t("fromYourComputerOrUsingOurApplication")},<br />
                    {t("availableIn")}<span className="blue-sp"> App Store </span>и <span className="blue-sp">Google Play</span></p>


                <div className="butt">
                    <button className="butt-sig">{t("SignUp")}</button>
                    <button className="butt-sig1">{t("HowDoesThisWork")}</button>
                </div>
            </div>

            <div className="big-photos">


                <img src={lightBlue} alt="lightBlue" className="lightBlue"></img>
                <img src={doctorsPhot} alt="doctorsPhot" className="doctorsPhot"></img>
                <img src={lightBlue2} alt="lightBlue2" className="lightBlue2"></img>


                <img src={doctorsBody} alt="doctorsBody" className="doctorsBody"></img>

            </div>
        </div>
    )
}

export default ConsultationsContent