import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";



function AddBook () {
    const [book, setBook] = useState({})
    let navigate = useNavigate

    const changeInputs = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        fetch('http://localhost:4200/new-book', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                // go to the home screen App component 
                navigate('/')
            }
        })
    }

    return (
        <div>
            <div>
                <label>Book Title: </label>
                <input type="text" onChange={changeInputs} name="title" />
            </div>
            <div>
                <label>Year published: </label>
                <input type="text" onChange={changeInputs} name="year" />
            </div>
            <div>
                <label>Book Publisher: </label>
                <input type="text" onChange={changeInputs} name="publisher" />
            </div>
            <div>
                <label>Book Genre: </label>
                <input type="text" onChange={changeInputs} name="genre" />
            </div>
            <div>
                <label>Book Image URL: </label>
                <input type="text" onChange={changeInputs} name="imageURL" />
            </div>
            <button onClick={handleSave}>Add Book</button>
        </div>
    )
}

export default AddBook;