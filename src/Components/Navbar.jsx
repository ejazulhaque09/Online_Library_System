import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <>
        <h1>Hello</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <ul>
                <li><Link to='/books'>Browse Books</Link></li>
            </ul>
            <ul>
                <li><Link to='/add-book'>Add Book</Link></li>
            </ul> 
        </nav>
        </>
    )
}

export default Navbar