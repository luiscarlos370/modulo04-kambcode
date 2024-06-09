import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../../src/App.css'
const Home = (props) =>{

    return (
        <div>
          <h1> Bienvenido a la pagina de rick and morty</h1>

            <div className="banner">
            <div>
                <div className="title1">SERIE ANIMADA</div>
                    <h1 className='title'>RICK AND MORTY</h1>
                </div>
            </div> 
          <div className='link_rapidos'>

                <h3> Enlaces rápidos </h3>

                <Link to="/characters">
                  Ir a personajes
                </Link>
                <Link to="/episodios">
                  Ir a episodios
                </Link>
                
          </div>
        </div>
       
      );
}

export default Home