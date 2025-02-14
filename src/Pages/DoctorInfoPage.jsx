import "./DoctorInfoPage.css"
import vector2 from "../images/Vector1.png"
import oliga from "../images/oliga.png"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import date from "../DoctorInfrometion/DoctorInfrometion.json"
import NearestEntery from "./NearestEntry"


function DoctorInfoPage() {

    const { id } = useParams();
    const [doc, setDoc] = useState({})


    useEffect(() => {
        const foundDoctor = date.find((doctor) => doctor.id === id)
        if (foundDoctor)
            setDoc(foundDoctor)
    }, [id])

    if (doc === undefined) {
        return <h1>Doctor not Found</h1>
    }
    return (
         <>
        <div className="DoctorProfil">
            <div className="p-icon">
                <p className="p-text">Врачи</p>
                <img src={vector2} alt="vector2" className="Vect"></img>
                <p className="p-text">Педиатр</p>
                <img src={vector2} alt="vector2" className="Vect"></img>
                <p className="p-text">Профиль врача</p>
            </div>
            <div className="doc-info">
                <img src={oliga} alt="oliga" className="doc-oliga"></img>
                <div className="doc-name">
                    <p className="name-doc1">{doc.name} {doc.lastName}</p>
                    <p className="name-prof">{doc.profession}</p>
                    <p className="name-export">{doc.Experience}</p>
                </div>
            </div>

            <div className="time">
                <p className="money">900 / консультация</p>
                <p className="minute">{doc.minute}</p>
            </div>

        </div>
        
                
                
                <NearestEntery/>
                
        </>
    )
}

export default DoctorInfoPage