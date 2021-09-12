import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    // console.log(toggleTheme)

    return (
        <div>
            <button onClick={toggleTheme}>Thema Umschalten</button>
        </div>
    );
};
