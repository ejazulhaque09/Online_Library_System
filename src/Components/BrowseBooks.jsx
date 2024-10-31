import { useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { useSelector } from "react-redux";

function BrowseBooks(){
    const {books} = useSelector(state => state.books)
    const { category } = useParams();
    const [search, setSearch] = useState('');

    

    const filteredBooks = books.filter((book) => {    //filtering category of the books
        return(
            (category ? book.category === category : true) && 
            (book.title.toLowerCase().includes(search.toLowerCase()) || 
            book.author.toLocaleLowerCase().includes(search.toLowerCase()))
        )
    })
    return(
        <div className="browse">
            <h1>
                Browse Books{' '}
                {category ? `in ${category.charAt(0).toUpperCase() + category.slice(1)}` : ''}  
            </h1>

            <input type="text" placeholder="Search by title or author" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <ul>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <li key={book.id}> <Link to={`/books/details/${book.id}`}>{book.title}</Link> By {' '} {book.author}</li>
                    ))
                ): (
                    <h3 className="no-books">No books found in this category.</h3>
                )}
            </ul>
        </div>
    )
}

export default BrowseBooks;