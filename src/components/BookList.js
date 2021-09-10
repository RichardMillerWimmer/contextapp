import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext'
import { NewBookForm } from './NewBookForm';

export const BookList = () => {
    const {theme} = useContext(ThemeContext);
    const {books, addBook} = useContext(BookContext)

    const style = theme.isLightTheme ? theme.light : theme.dark;

    
    
    return (
        <div className='book-list' style={{ background: style.bg, color: style.syntax}}>
            <ul>
                {books.map(book => {
                    return(
                        <li style={{background: style.ui}} key={book.title}>{book.title}</li>
                    )
                })}
            </ul>
            <NewBookForm addBook={addBook}/>
        </div>
    )
}
