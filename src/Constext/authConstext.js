import { createContext, useCallback, useState } from "react";

  const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login =useCallback( ({user,accessToken}) => {
        setUser(user);
        setIsAuthenticated(true)
    },[])
    
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