import  { useState, useEffect} from 'react';
import CardComponente from './components/CardComponente.jsx';
import CardSearch from './components/Search/Search.jsx';
import './App.css';
import Footer_anime from './Footer_anime.jsx';
import img from './img.jsx';

function App() {
    const [contador, SetContador] = useState(0)
    const [APIpersonajes, setAPIpersonajes] = useState([])
    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
         .then((response) => response.json())
         .then((data)=> setAPIpersonajes(data.results))
    }, [])
    console.log(APIpersonajes)
    
    const incrementaContador = () => {
      SetContador(contador + 1)
    }
  return (
    <>

<div className="imglogo">
            <img className="imglogo" src={img.logo}  alt=""/>
            
            <img className="imglogo" src={img.hamburger}  alt=""/>
    </div>
     <div className="banner">
            <div>
               <div className="title1">SERIE ANIMADA</div>
               <h1 className='title'>RICK AND MORTY</h1>
             </div>
    </div> 

    {/* <CardSearch /> buscador en construcción*/}

    <div className='container'>
      {APIpersonajes.length !== 0 && APIpersonajes.map((APIpersona) =>(
               <CardComponente key={APIpersona.id} title= {APIpersona.name} gender={APIpersona.gender } status={APIpersona.status} image={APIpersona.image}/>
          )) }
    </div>
     
      <button onClick={incrementaContador} >Incrementar Contador</button>
    
    <footer>
      <Footer_anime/>
    </footer>
         
    </>
  )
}

export default App
