import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', title: book.title})}>
            <div>{book.title}</div>
        </li>
    )
};
