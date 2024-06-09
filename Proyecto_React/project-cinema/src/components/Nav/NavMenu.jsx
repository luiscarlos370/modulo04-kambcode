import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavMenu.css'
import Home from '../Pages/Home.jsx';
import Contact from '../Pages/Contac.jsx';
import About from '../Pages/About.jsx';
import Services from '../Pages/Services.jsx';
import CharacterPage from '../Pages/CharacterPage.jsx';
import Episodes from '../Pages/Episodes.jsx';

const NavMenu = () =>{

    return  <Router>
      <div className='menu_body'>
        <nav>
          <ul>
            <li> 
            <Link to='/'>inicio 🏠</Link>
              <Link to='/servicios'>Servicios</Link>
              <Link to='/characters'>Characters</Link>
              <Link to='/episodios'>episodes</Link>
              <Link to='/contactenos'>Contactenos</Link>
              <div className="animation start-home"></div>
            </li>
          </ul>
        </nav>
       
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactenos" element={<Contact/>} />
        <Route path="/characters" element={<CharacterPage/>} />
        <Route path="/episodios" element={<Episodes/>} />
        <Route path="/servicios" element={<Services/>} />
      </Routes>
    </Router>

    }

export default NavMenu



