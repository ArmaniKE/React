import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHouse, faMagnifyingGlass, faMusic} from '@fortawesome/free-solid-svg-icons'
import './App.css';
  
const Home = () => (
  <div className="home">
    {/* <h2 className="title">Spotify-Clone App</h2> */}
    <div className="sidebar">
      <h3 style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faMusic} /> Sounds</h3><br></br>
      <h3><Link to="/" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faHouse} /> Home</Link></h3>
      <Link to="/search" style={{textDecoration:"none"}}><h3><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</h3></Link>  
      <Link to="/library" style={{textDecoration:"none"}}><h3><FontAwesomeIcon icon={faBook} /> Library</h3></Link>
    </div>
  </div>
);

const Search = () => (
  <div className="search">
    <h2>Search</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const Library = () => (
  <div className="library">
    <h2>Library</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router> 
  );
};
 
export default App;
