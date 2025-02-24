import { createContext, useCallback, useEffect, useState } from "react";
import { getMe } from "../services/api/auth";
import api from "../services/api/api";
  const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login =useCallback( ({user,accessToken}) => {
        localStorage.setItem("accessToken", accessToken)
        setUser(user);
        setIsAuthenticated(true);
        api.defaults.headers.common["Authorization"]=`Bearer ${accessToken}`
    },[])
    
    useEffect(()=>{
        const accessToken=localStorage.getItem("accessToken")
        if(accessToken){
             api.defaults.headers.common["Authorization"]=`Bearer ${accessToken}`
            getMe().then(data=>{
                setUser(data.result)
                console.log(data.result);  
                setIsAuthenticated(true)
            }).catch(error =>{
                console.log(error);  
            })
            
        }
    },[isAuthenticated])

    const logout= useCallback(()=>{
        setUser(null);
        setIsAuthenticated(false)
    },[])
    return <AuthContext.Provider value={{
        user,
        login,
        isAuthenticated,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext