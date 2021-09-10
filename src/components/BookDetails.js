import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);

    return (
        <li onClick={() => removeBook(book.title)}>
            <div>{book.title}</div>
        </li>
    )
};
