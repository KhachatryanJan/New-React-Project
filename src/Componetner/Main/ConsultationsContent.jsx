import { useContext } from "react"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { translet } from "../../utils/translet"
import lightBlue from "../../images/lightBlue.png"
import lightBlue2 from "../../images/lightBlue2.png"
import doctorsPhot from "../../images/depositphotos.png"
import doctorsBody from "../../images/DoctorsBody.png"

function ConsultationsContent() {
    const { lang } = useContext(LanguageContexte)
    return (
        <div className="ConsultationsContent">
            <div>
                <h1 className="consul-h1">{translet("OnlineConsultationsFromSpecialistDoctors", lang)}<br />{translet("OnlineConsultationsFromSpecialistDoctors1", lang)}</h1>
                <div className="Orange-squares"></div>

                <p className="consul-p">{translet("Consult", lang)}<b className="b-col">{translet("Now", lang)}</b><div className="Orange-squares1"></div>
                    {translet("orBy", lang)} <b className="b-col">{translet("pre-registration", lang)}</b><div className="Orange-squares2"></div><br />
                    {translet("fromYourComputerOrUsingOurApplication", lang)},<br />
                    {translet("availableIn", lang)}<span className="blue-sp"> App Store </span>и <span className="blue-sp">Google Play</span></p>


                <div className="butt">
                    <button className="butt-sig">{translet("SignUp", lang)}</button>
                    <button className="butt-sig1">{translet("HowDoesThisWork", lang)}</button>
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