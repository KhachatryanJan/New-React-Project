import app from "../images/appointment 1.png"
import mat from "../images/mortarboard 1 (1).png"
import group1 from "../images/Group1.png"
import group2 from "../images/Group2.png"

function NearestEntery(){


    return(
        <div className="nearestEntery">
            <div className="app-p">
                <img src={app} alt="app" className="app"></img>
                <p className="res">Ближайшая запись</p>
            </div>
            <p>Вторник 03 Марта</p>
            <div className="mat-p">
                <img src={mat} alt="mat" className="mat"></img>
                <p className="Educ">Образование</p>
            </div>
            <p>1992 - Российский Государственный Университет</p>
            <p>1994 - Ординатура по специальности «Педиатрия»</p>
            <div className="grop-p">
                <img src={group1} alt="group1" className="gro"></img>
                <p className="Spec">Специализируется на лечении</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="grop-p">
                <img src={group2} alt="group2"className="gro" ></img>
                <p className="Spec">Специализируется на лечении</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    )
}

export default NearestEntery