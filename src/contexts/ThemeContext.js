import React, { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })
    function toggleTheme() {
        const newTheme = {...theme}
        
        console.log(newTheme)
        setTheme({...newTheme})
        console.log(theme)
    }

    useEffect(() => {
        toggleTheme()
    }, [])
    

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}
