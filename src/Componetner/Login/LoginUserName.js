import AuthContext from "../../Constext/authConstext";
import { update_me } from "../../services/api/auth";
import { useActionState, useContext} from "react"
import "./LoginUserName.css"
function LoginUserName() {
    const { login: constextLogin } = useContext(AuthContext)
    const [data, action, isPromiss] = useActionState(async (data, state) => {
        const first_name = state.get("first_name")
        const last_name = state.get("last_name")
        if (!first_name || !last_name) {
            return { data: {}, error: "First_name and last_name are required" }
        } else {
            try {
                const data = await update_me(first_name, last_name);
                if (data.status === 200) {
                    constextLogin(data.result)
                    console.log(data);

                }
                return { data, error: null }
            } catch (error) {
                return { data: {}, error: "Something went wrong" }
            }
        }
    })
    return (
        <div className="User_Name">
            <h1 className="UserName-p">First_name/Last_name</h1>
            <form action={action}>
                <>
                    <input type="text" name="first_name" placeholder="Enter your first_name " className="first_name"></input>
                    <input type="text" name="last_name" placeholder="Enter your last_name" className="last_name"></input>
                </>

                <button type="submit" className="submit1">Submit</button>
            </form>
        </div>

    )
}

export default LoginUserName