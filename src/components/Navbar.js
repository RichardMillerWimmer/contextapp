import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext';

export const Navbar = () => {
    const {theme} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const {auth, toggleAuth} = useContext(AuthContext);

    const { isLightTheme, light, dark } = theme;

    // console.log(theme)
    // console.log(isLightTheme)
    // console.log(light)
    // console.log(dark)
    const style = isLightTheme ? light : dark;

    return (
        <nav style={{ background: style.ui, color: style.syntax }}>
            <h1>Bücheriste</h1>
            {books.length ? 
            <h4>Aktuall hast du {books.length} Bücher zu lesen.</h4> :
            <h4>Du hast keine Bücher auf deiner Liste.</h4>}
            
            <div onClick={toggleAuth}>
                {auth ? 'Eingeloggt' : 'Abgemendet'}
            </div>
            <ul>
                <li>Heimat</li>
                <li>Über</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
};
