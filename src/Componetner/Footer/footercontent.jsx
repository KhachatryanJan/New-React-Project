import { useContext } from "react"
import logo2 from "../../images/log2.png"
import { translet } from "../../utils/translet"
import { LanguageContexte } from "../../Constext/LanguageConstext"
import insta from "../../images/instagram 1.png"
import face from "../../images/facebook 1.png"
import youtube from "../../images/youtube 3.png"
import appDow from "../../images/AppDow.jpg"
import google from "../../images/googlePL.png"
function FooterContent() {
    const { lang } = useContext(LanguageContexte)
    return (
        <footer className="foter-info">
            <img src={logo2} className="footer-log"></img>
            <div className="footer-p">
                <p className="footer-p-tex">{translet("OnlineConsultations1", lang)} <br /> {translet("OnlineConsultations2", lang)} <br /></p>
                <p className="p-marg"> {translet("OnlineConsultations3", lang)}<br /> {translet("OnlineConsultations4", lang)}<br />{translet("OnlineConsultations5", lang)}</p>
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