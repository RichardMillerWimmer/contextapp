import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // console.log(book)
    
    const handleSubmit = () => {
        dispatch({type: 'ADD_BOOK', payload: {title: title, author: author}})
        setBook('');
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <label>Titel:</label>
            <input type='text' value={book} required onChange={(e) => {setTitle(e.target.value)}}/>
            <br/>
            <label>Verfasser:</label>
            <input type='text' value={book} required onChange={(e) => {setAuthor(e.target.value)}}/>
            <input type='submit' value='Hinzufügen'/>
        </form>
    )
}

