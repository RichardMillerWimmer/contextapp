import React, {useState} from 'react'

export const NewBookForm = ({addBook}) => {
    const [book, setBook] = useState('')

    console.log(book)
    
    const handleSubmit = (e) => {
        console('handle hit')
        e.preventDeafult()
        addBook(book)
        setBook('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Book Name:</label>
            <input type='text' value={book} required onChange={(e) => {setBook(e.target.value)}}/>
            <button type='submit'>Add Book</button>
        </form>
    )
}
