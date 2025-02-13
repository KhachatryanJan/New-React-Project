import date from "../../DoctorInfrometion/DoctorInfrometion.json"
import DoctorInfromationContent from "./DoctorsInfromationContent"

function Past(){
    return date.filter(d=>d.hour < "12:00").map((doc)=>(
        <DoctorInfromationContent id={doc.id} {...doc}/>
    ))
}

export default Past