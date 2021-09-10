import React, { useState, createContext } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })
    function toggleTheme() {
        const newTheme = {...theme}
        // console.log(newTheme)
        // setTheme({...newTheme})
        setTheme({
            ...newTheme, isLightTheme: !newTheme.isLightTheme
        })
    }
    
    // console.log(theme)

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
