import calendar from "../../images/calendar.png"
import clock from "../../images/clock .png"
import video from "../../images/video-camera .png"
import oliga from "../../images/oliga.png"
import { useContext, useState } from "react"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import { translet } from "../../utils/translet"

function DoctorInfromationContent(doc) {
    const { lang } = useContext(LanguageContexte)

   const [status,setStatus]=useState(doc.status)
 
    return (
        <div className="DoctorInfromationContent">
            <div className="cal-clock-vid">
                <img src={calendar} alt="calendar" className="calendar"></img>
                <p className="p">{doc.date}</p>
                <img src={clock} alt="clock" className="clock"></img>
                <p  className="p">{doc.hour}</p>
                <img src={video} className="video" alt="video"></img>
                <p className="video-p">{translet("VideoCommunication", lang)}</p>
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
                <button className={`but3 ${ status === "but3" ? "red-but" :"" }`}
                onClick={() => setStatus((prev) => !prev)}>
                    <p className="Planned">{translet("Planned", lang)}</p></button>
                <button className="but4"><p className="ViewEntry">{translet("ViewTheRecording", lang)}</p></button>
                <button className="but5"><p className="ViewTheResolution">{translet("ViewTheDecree", lang)}</p></button>
            </div>
        </div>

    )
}


export default DoctorInfromationContent