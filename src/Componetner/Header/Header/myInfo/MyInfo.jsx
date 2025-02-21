import user from "../../../../images/user.png"
import card from "../../../../images/credit-card (3) 1 (1).png"
import help from "../../../../images/help (1) 1 (1).png"
import logut from "../../../../images/logout (1) 1 (1).png"
import "./MyInfo.css"


import { useTranslation } from "react-i18next"
function MyInfo() {
    const {t}=useTranslation()

    return (
        <div className="Myinfo">
            <div className="info-p">
                <img src={user} alt="user"  className="img"></img>
                <p>{t("MyProfile")}</p>
            </div>
            <div className="info-p">
                <img src={card} alt="card"className="img" ></img>
                <p>{t("TopUpBalance")}</p>
            </div>
            <div className="info-p">
                <img src={help} alt="help" className="img"></img>
                <p>FAQ</p>
            </div>
            <div className="info-p">
                <img src={logut} alt="logout"className="img" ></img>
                <p>{t("LogOut")}</p>
            </div>
        </div>
    )
}
export default MyInfo