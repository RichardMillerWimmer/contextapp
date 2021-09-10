import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [book, setBook] = useState('');

    // console.log(book)
    
    const handleSubmit = () => {
        dispatch({type: 'ADD_BOOK', payload: {book}})
        setBook('');
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <label>Book Name:</label>
            <input type='text' value={book} required onChange={(e) => {setBook(e.target.value)}}/>
            <input type='submit' value='Add Book'/>
        </form>
    )
}
