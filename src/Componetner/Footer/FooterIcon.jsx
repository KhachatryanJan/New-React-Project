import email from "../../images/email.png"
import place from "../../images/place .png"
import clock from "../../images/clock .png"
import call from "../../images/phone-call.png"

function FooterIcon(){
    return(
        <div>
        < div className="box-3">
        <div className="footer-icon2">
          <img src={email} alt="email"></img>
          <img src={place} alt="place"></img>
          <img src={clock} alt="clock"></img>
          <img src={call} alt="call"></img>
        </div>
     
        <div className="footer-icon2-p">
        <p className="footer-icon2-p-tex">allodoc@mail.com</p>
        <p className="footer-icon2-p-tex">г. Москва. ул, Ленина 54, офис 51</p>
        <p className="footer-icon2-p-tex">Пн-Вс с 09:00 до 18:00</p>
        <p className="footer-icon2-p-tex">8 800 555 35 35</p>
      </div>
      </div>
      </div>
    )
}

export default FooterIcon