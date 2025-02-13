import status from "../../DoctorInfrometion/DoctorInfrometion.json"
import DoctorInfromationContent from "./DoctorsInfromationContent"
function Status(){
    return status.filter(d=>d.status === "true").map((doc)=>(
        <DoctorInfromationContent id={doc.id} {...doc}/>
    ))
}

export default Status