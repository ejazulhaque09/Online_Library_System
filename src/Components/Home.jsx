
import {Link} from 'react-router-dom';
function Home(){
    const categories = ['Fiction','Classic Literature','Historical Fiction','Fantasy','Historical Fiction','Horror','Romance','Science']
    return(
        <div className="home">
            <h2>Book Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/books/${category.toLowerCase()}`}>{category}</Link> 
                    </li>
                ))}
            </ul>

            <h2 className='popular-books'>Popular Books</h2>
            <ul>
                <li> <Link to='/books/details/1'>Book 1</Link> </li>
                <li> <Link to='/books/details/2'>Book 2</Link> </li>
                <li> <Link to='/books/details/3'>Book 3</Link> </li>
            </ul>
        </div>
    )
}

export default Home;