import React, {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { NewBookForm } from './NewBookForm';

export const BookList = () => {
    const {theme} = useContext(ThemeContext);
    const [books, setBooks] = useState([
        {title: 'The Hobbit'},
        {title: 'The Fellowship of the Ring'},
        {title: 'The Two Towers'},
        {title: 'The Return of the King'}
    ])

    const style = theme.isLightTheme ? theme.light : theme.dark;

    const addBook = (title) => {
        setBooks([...books, {title}])
        console.log(books)
    }

    return (
        <div className='book-list' style={{ background: style.bg, color: style.syntax}}>
            <ul>
                {books.map(book => {
                    return(
                        <li key={book.title}>{book.title}</li>
                    )
                })}
            </ul>
            <NewBookForm addBook={addBook}/>
        </div>
    )
}
