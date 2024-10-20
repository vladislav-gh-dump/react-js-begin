/* eslint-disable react/prop-types */

import { createContext, useState } from "react"


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogin: false,
        username: ''
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
