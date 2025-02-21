
import logo2 from "../../images/log2.png"

import insta from "../../images/instagram 1.png"
import face from "../../images/facebook 1.png"
import youtube from "../../images/youtube 3.png"
import appDow from "../../images/AppDow.jpg"
import google from "../../images/googlePL.png"
import { useTranslation} from "react-i18next"
function FooterContent() {
 
    const {t}=useTranslation()
    return (
        <footer className="foter-info">
            <img src={logo2} className="footer-log"></img>
            <div className="footer-p">
                <p className="footer-p-tex">{t("OnlineConsultations1")} <br /> {t("OnlineConsultations2")} <br /></p>
                <p className="p-marg"> {t("OnlineConsultations3")}<br /> {t("OnlineConsultations4")}<br />{t("OnlineConsultations5")}</p>
            </div>
            <div className="footer-icon">
                <img src={insta} alt="insta"></img>
                <img src={face} alt="face"></img>
                <img src={youtube} alt="youtube"></img>
            </div>

            <div className="App-Goog">
            <img src={appDow}  alt="appDow"className="app"></img>
            <img src={google} alt="google"></img>
        </div>
        </footer>
    )
}

export default FooterContent