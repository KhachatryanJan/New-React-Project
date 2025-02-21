import { useContext } from "react"
import { LanguageContexte } from "../../../Constext/LanguageConstext"
import i18n from '../../../i18n'; 

function Languages() {
  const {lang, setLang} = useContext(LanguageContexte)
  
  const handleeSubmit=(e)=>{
    i18n.changeLanguage(e)
    setLang(e)
  }
  return (
    < div className="Languages">
      <div
        className={`ru ${lang === "ru" ? "activ" : ""}`}
        onClick={() => handleeSubmit("ru")}
      >
        RU
      </div>
      <div
        className={`en ${lang === "en" ? "activ" : ""}`}
        onClick={() => handleeSubmit("en")}
      >
        EN
      </div>
    </div>
  )
}

export default Languages