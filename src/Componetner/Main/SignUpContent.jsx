import { useContext } from "react"
import yelloCir from "../../images/yelloCicle.png"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { translet } from "../../utils/translet"
import doctor from "../../images/docimg.png"

function SingUpContent(){
    const {lang}=useContext(LanguageContexte)
    return(
        <div className="SingUpContent">
        <div className="MakeAnAppointmentWithADoctor">
            <img src={doctor} className="doctor" alt="doctor"></img>
            <div className="MakeAnAppointmentWithADoctor-info">
                <h1 className="MakeAnAppointmentWithADoctor-info-h1">{translet("MakeAnAppointmentWithADoctor",lang)} <div className="oranjLin3"></div></h1>
                <p className="MakeAnAppointmentWithADoctor-info-p1">{translet("doctorsSpecializations",lang)}</p>
                <div className="YellowCircle-inf">
                    <div className="YellowCircle">
                        <img src={yelloCir} alt="yelloCir"></img>
                        <img src={yelloCir} alt="yelloCir"></img>
                        <img src={yelloCir} alt="yelloCir"></img>
                    </div>
                    <div className="p-text3">
                        <p>{translet("timeConvenient",lang)}</p>
                        <p>{translet("experiencedDoctors",lang)}</p>
                        <p>{translet("clearExplanation",lang)}</p>
                    </div>

                </div>
                <p className="MakeAnAppointmentWithADoctor-info-p2">{translet("SignUp",lang)}</p>
            </div>
        </div>
        </div>
    )
}

export default SingUpContent