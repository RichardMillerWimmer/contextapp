import React, { useState, createContext } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = () => {
    const [theme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    return (
        <ThemeContext.Provider value={{...theme}}>
            
        </ThemeContext.Provider>
    )
}
