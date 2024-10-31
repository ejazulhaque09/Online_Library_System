  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import Home from './Components/Home';
  import BrowseBooks from './Components/BrowseBooks';
  import BookDetails from './Components/BookDetails';
  import AddBook from './Components/AddBook';
  import NotFound from './Components/NotFound';
  import {Link} from 'react-router-dom';
  import './App.css'

  function App(){
    return(
      <Router>
        <div className="bg">
        <nav>
          <h1>Book Library</h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/books'>Browse Books</Link>
            </li>
            <li>
              <Link to='/add-books'>Add Books</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/books' element={<BrowseBooks/>}></Route>
          <Route path='/books/:category' element={<BrowseBooks/>}></Route>
          <Route path='/books/details/:bookId' element={<BookDetails/>}></Route>
          <Route path='/add-books' element={<AddBook/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        </div>
      </Router>
    )
  }

  export default App;