
import { useTranslation } from "react-i18next";

function NavContent(){
  
   const {t}=useTranslation();
   return(
    <div className="navContent">
     <p className="nav-p">{t("HowToUse")}</p>
     <p className="nav-p">{t("MyEntries")}</p>
     <p className="nav-p">{t("MakeAnAppointmentWithADoctor") }</p>
    </div>
   )
}

export default NavContent