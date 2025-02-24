import { useActionState, useContext, useState } from "react"
import { login, verify } from "../../services/api/auth";
import "./LoginForm.css"
import AuthContext from "../../Constext/authConstext";

import { useNavigate } from "react-router-dom";




function LoginForm() {
    const { login: constextLogin } = useContext(AuthContext)
    const [isShow, setShow] = useState(false)
    const navigate=useNavigate()
    const [data, action, isPromiss] = useActionState(async (data, state) => {
        const email = state.get("email")
        const otp = state.get("otp")
     
        if (otp) {
            
       
            if (!otp || !email) {
                return { data: {}, error: "Email and OPT are required" }
            } else {
                try {
                    const data = await verify(email, otp);
                    if (data.status === 200) {
                        constextLogin(data.result)
                        console.log(data);
                      
                        navigate("/Login/UserName")
                      
                    }
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Something went wrong" }
                }
            }
        } else {
            if (!email) {
                return { data: {}, error: "Email is required" }
            } else {
                try {
                    const data = await login(email);
                    console.log(data);
                    if (data.status === 200) {
                        setShow(data)
                    }
                } catch (error) {
                    return { data: {}, error: "Somthing went wrong" }
                }
            }
        }



    }, { data: {}, error: null });
    return (
        <div className="Login">
            <h1 className="Login-p">Login</h1>
            <form action={action}>
                <input type="email" placeholder="email" name="email" className="email" />
                {isShow && <input type="text" placeholder="OTP" name="otp" className="otp"></input>}
             
                <button type="submit" className="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm