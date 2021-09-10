import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext';

export const Navbar = () => {
    const {theme} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const {auth, toggleAuth} = useContext(AuthContext)

    const { isLightTheme, light, dark } = theme;

    // console.log(theme)
    // console.log(isLightTheme)
    // console.log(light)
    // console.log(dark)
    const style = isLightTheme ? light : dark;

    return (
        <nav style={{ background: style.ui, color: style.syntax }}>
            <h1>Reading List</h1>
            {books.length ? 
            <h4>Currently you have {books.length} books.</h4> :
            <h4>You have no books in your list.</h4>}
            
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
