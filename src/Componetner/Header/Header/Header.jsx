import "./Header.css"
import "../../color.css"
import Logo from "./Logo"
import NavContent from "./NavigationContent"
import SubscribeContent from "./SubscribeContent"
import AvatarNameContent from "./AvatarNameContent"
import Languages  from "./LanguageContent"

function Header(){
    return(
        <div className="Header">
        <Logo/>
        <NavContent/>
        <SubscribeContent/>
        <AvatarNameContent/>
        <Languages/>
        </ div>
    )
}

export default Header