import { useContext } from "react"
import { LanguageContexte } from "../../../Constext/LanguageConstext"

function Languages() {
  const {lang, setLang} = useContext(LanguageContexte)
  return (
    < div className="Languages">
      <div
        className={`ru ${lang === "ru" ? "activ" : ""}`}
        onClick={() => setLang("ru")}
      >
        RU
      </div>
      <div
        className={`en ${lang === "en" ? "activ" : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </div>
    </div>
  )
}

export default Languages