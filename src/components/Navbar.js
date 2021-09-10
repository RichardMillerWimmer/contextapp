import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

export const Navbar = () => {
    const {theme} = useContext(ThemeContext);
    const {auth, toggleAuth} = useContext(AuthContext)

    const { isLightTheme, light, dark } = theme;

    // console.log(theme)
    // console.log(isLightTheme)
    // console.log(light)
    // console.log(dark)
    const style = isLightTheme ? light : dark;

    return (
        <nav style={{ background: style.ui, color: style.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {auth ? 'Logged in' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
