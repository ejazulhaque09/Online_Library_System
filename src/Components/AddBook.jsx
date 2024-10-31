import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addBook} from '../redux/booksSlice'
import {useNavigate} from 'react-router-dom'
function AddBook (){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(!title || !author || !description || !category || !rating){  // validating all fields
            alert("Please fill in all fields");
            return;
        }
        const newBook = {
            id: Math.floor(Math.random()*1000),  // generating random number for id
            title,
            author,
            description,
            category,
            rating,
        }
        dispatch(addBook(newBook));   // dispatching to reducer
        navigate('/books');
        alert("Book Added Successfully!");
    }

    return(
        <div className="AddBook">
            <h1>Add new Book</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}/>
                <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)}/>
                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="number" placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)}/>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook;