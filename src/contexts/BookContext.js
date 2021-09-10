import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The Hobbit'},
        {title: 'The Fellowship of the Ring'},
        {title: 'The Two Towers'},
        {title: 'The Return of the King'}
    ])

    const addBook = (title) => {
        setBooks([...books, {title}])
    }

    return (
        <BookContext.Provider value={{books, addBook}}>
            {props.children}
        </BookContext.Provider>
    )
}