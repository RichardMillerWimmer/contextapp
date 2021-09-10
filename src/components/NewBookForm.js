import React, {useState} from 'react'

export const NewBookForm = ({addBook}) => {
    const [book, setBook] = useState('')

    // console.log(book)
    
    const handleSubmit = () => {
        addBook(book)
        setBook('')
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
