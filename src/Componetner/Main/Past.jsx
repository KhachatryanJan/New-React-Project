import { useSelector } from "react-redux"

import DoctorInfromationContent from "./DoctorsInfromationContent"

import { doctorSelectors } from "../../store/selectors"

function Past(){
    const doctor =useSelector(doctorSelectors.getDoctor)
    return doctor.filter(d=>d.hour < "12:00").map((doc)=>(
        <DoctorInfromationContent id={doc.id} {...doc}/>
    ))
}

export default Past