
import yelloCir from "../../images/yelloCicle.png"

import doctor from "../../images/docimg.png"
import { useTranslation} from "react-i18next"
function SingUpContent(){
 
    const {t}=useTranslation()
    return(
        <div className="SingUpContent">
        <div className="MakeAnAppointmentWithADoctor">
            <img src={doctor} className="doctor" alt="doctor"></img>
            <div className="MakeAnAppointmentWithADoctor-info">
                <h1 className="MakeAnAppointmentWithADoctor-info-h1">{t("MakeAnAppointmentWithADoctor")} <div className="oranjLin3"></div></h1>
                <p className="MakeAnAppointmentWithADoctor-info-p1">{t("doctorsSpecializations")}</p>
                <div className="YellowCircle-inf">
                    <div className="YellowCircle">
                        <img src={yelloCir} alt="yelloCir"></img>
                        <img src={yelloCir} alt="yelloCir"></img>
                        <img src={yelloCir} alt="yelloCir"></img>
                    </div>
                    <div className="p-text3">
                        <p>{t("timeConvenient")}</p>
                        <p>{t("experiencedDoctors")}</p>
                        <p>{t("clearExplanation")}</p>
                    </div>

                </div>
                <p className="MakeAnAppointmentWithADoctor-info-p2">{t("SignUp")}</p>
            </div>
        </div>
        </div>
    )
}

export default SingUpContent