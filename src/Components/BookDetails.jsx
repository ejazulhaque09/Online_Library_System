import { useParams, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
function BookDetails(){

    const { bookId } = useParams();
    const book = useSelector(state => 
        state.books.books.find(b => b.id === parseInt(bookId))   // fetching the data
    )

    if(!book) {
        return <h2>Book not found</h2>
    }
    return(
        <div className="bookDetails">
            <h1>{book.title}</h1>
            <h2>By {book.author}</h2>
            <p>{book.description}</p>
            <p className='rating'>Rating: {book.rating}</p>
            <Link to='/books'>Back to Browse</Link>
        </div>
    )
}

export default BookDetails;