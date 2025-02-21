import calendar from "../../images/calendar.png"
import clock from "../../images/clock .png"
import video from "../../images/video-camera .png"
import oliga from "../../images/oliga.png"
import { useState } from "react"

import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
function DoctorInfromationContent(doc) {
 
    const {t}=useTranslation();

    const [status, setStatus] = useState(true)


    return (
        <div className="DoctorInfromationContent">
            <div className="cal-clock-vid">
                <img src={calendar} alt="calendar" className="calendar"></img>
                <p className="p">{doc.date}</p>
                <img src={clock} alt="clock" className="clock"></img>
                <p className="p">{doc.hour}</p>
                <img src={video} className="video" alt="video"></img>
                <p className="video-p">{t("VideoCommunication")}</p>
            </div>

            <div>
                <img src={oliga} alt="oliga" />
                <div className="doc-name-experience">
                    <h3 className="name">{doc.name}</h3>
                    <p className="Pediatrician">{doc.profession}</p>
                    <p className="experience">{doc.Experience}</p>
                </div>
            </div>

            <div className="Butt-Planned-ViewEntry-ViewTheResolution">
                <button className={`but3 ${doc.status === status ? "but-3" : ""}`}><p className="Planned">{t("Planned")}</p></button>
                <Link to={`/Doctor/${doc.id}`}><button className="but4"><p className="ViewEntry">{t("ViewTheRecording")}</p></button></Link>
                <button className="but5"><p className="ViewTheResolution">{t("ViewTheDecree")}</p></button>
            </div>
        </div>

    )
}


export default DoctorInfromationContent