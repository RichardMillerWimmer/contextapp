import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ACTION } from '../reducers/bookReducer';

export const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // console.log(book)
    
    const handleSubmit = () => {
        dispatch({type: ACTION.ADD_BOOK, payload: {title: title, author: author}})
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <label>Titel:</label>
            <input type='text' value={title} required onChange={(e) => {setTitle(e.target.value)}}/>
            <br/>
            <label>Verfasser:</label>
            <input type='text' value={author} required onChange={(e) => {setAuthor(e.target.value)}}/>
            <br/>
            <input type='submit' value='Hinzufügen'/>
        </form>
    )
}

