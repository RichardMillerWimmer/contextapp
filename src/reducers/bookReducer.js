import {v1 as uuid} from 'uuid';

export const bookReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {title: action.payload.title, author: action.payload.author, id: uuid()}]
        case 'REMOVE_BOOK':
            return state.filter(book => book.title !== action.payload.title)
        default:
            return state
    }
}