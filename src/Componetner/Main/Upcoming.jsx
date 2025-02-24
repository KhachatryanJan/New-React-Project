import { useSelector } from "react-redux"

import DoctorInfromationContent from "./DoctorsInfromationContent"
import { getDoctor } from "../../store/selectors/doctorSelectors";
import { doctorSelectors } from "../../store/selectors";

function Upcoming(){
    const doctor = useSelector(doctorSelectors.getDoctor);
   
    
    return doctor .filter(d=>d.hour > "16:00" ).map((doc)=>(
        <DoctorInfromationContent id={doc.id} {...doc}/>
    ))
}

export default Upcoming