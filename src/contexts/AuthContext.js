import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false)

    const toggleAuth = () => {
        setAuth(!auth)
    }

    return (
        <AuthContext.Provider value={{auth, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}