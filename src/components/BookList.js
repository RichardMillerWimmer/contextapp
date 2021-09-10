import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const BookList = () => {
    const {theme} = useContext(ThemeContext);
    // console.log(theme)

    const style = theme.isLightTheme ? theme.light : theme.dark;

    return (
        <div className='book-list' style={{ background: style.bg, color: style.syntax}}>
            <ul>
                <li style={{background: style.ui}}>Book 1</li>
                <li style={{background: style.ui}}>Book 2</li>
                <li style={{background: style.ui}}>Book 3</li>
            </ul>
        </div>
    )
}
