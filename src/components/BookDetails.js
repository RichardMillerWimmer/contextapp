import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ACTION } from '../reducers/bookReducer';

export const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (
        <li onClick={() => dispatch({type: ACTION.REMOVE_BOOK, payload: book})}>
            <div>
                <h5>{book.title}</h5>
                <h6>{book.author}</h6>
            </div>
        </li>
    );
};
