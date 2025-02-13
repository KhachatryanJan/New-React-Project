import date from "../../DoctorInfrometion/DoctorInfrometion.json"
import DoctorInfromationContent from "./DoctorsInfromationContent"

function Upcoming(){
 
    return date.filter(d=>d.hour > "16:00" ).map((doc)=>(
        <DoctorInfromationContent id={doc.id} {...doc}/>
    ))
}

export default Upcoming