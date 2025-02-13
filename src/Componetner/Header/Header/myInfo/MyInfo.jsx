import user from "../../../../images/user.png"
import card from "../../../../images/credit-card (3) 1 (1).png"
import help from "../../../../images/help (1) 1 (1).png"
import logut from "../../../../images/logout (1) 1 (1).png"
import "./MyInfo.css"
function MyInfo() {
    return (
        <div className="Myinfo">
            <div className="info-p">
                <img src={user} alt="user"  className="img"></img>
                <p>Мой профиль</p>
            </div>
            <div className="info-p">
                <img src={card} alt="card"className="img" ></img>
                <p>Пополнить баланс</p>
            </div>
            <div className="info-p">
                <img src={help} alt="help" className="img"></img>
                <p>FAQ</p>
            </div>
            <div className="info-p">
                <img src={logut} alt="logout"className="img" ></img>
                <p>Выйти</p>
            </div>
        </div>
    )
}
export default MyInfo