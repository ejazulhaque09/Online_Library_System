import {Link} from 'react-router-dom';
function NotFound() {
    return(
        <div className='notfound'>
            <h1>404 - Page Not Found</h1>
            <Link to='/'>Go back to Home</Link>
        </div>
    )
}

export default NotFound;