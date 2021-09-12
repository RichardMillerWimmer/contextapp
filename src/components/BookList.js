import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext'
import { NewBookForm } from './NewBookForm';
import { BookDetails } from './BookDetails';

export const BookList = () => {
    const {theme} = useContext(ThemeContext);
    const {books} = useContext(BookContext);

    const style = theme.isLightTheme ? theme.light : theme.dark;

    // console.log(books)
    
    
    return (
        <div className='book-list' style={{ background: style.bg, color: style.syntax}}>
            <ul>
                {books.map(book => {
                    return(
                        <BookDetails style={{background: style.ui}} key={book} book={book} />
                    )
                })}
            </ul>
            <NewBookForm />
        </div>
    );
};
