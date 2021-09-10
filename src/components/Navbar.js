import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const Navbar = () => {
    const [theme] = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    
    // console.log(theme)
    // console.log(isLightTheme)
    // console.log(light)
    // console.log(dark)
    const style = isLightTheme ? light : dark;

    return (
        <div>
            <nav style={{ background: style.ui, color: style.sytax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
