import { Link } from 'react-router-dom';

import Logo from '../avenger.png'
import "../styles/NavBar.css"
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="logo" height={40} />
        </Link>
        <Link to="/movies/now_playing" style={{textDecoration: "none"}}><span>Now_Playing</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top_Rated</span></Link>
        
      </div>
      <div className="headerRight">
        <SearchBar />
      </div>
    </div>
  )
}

export default NavBar