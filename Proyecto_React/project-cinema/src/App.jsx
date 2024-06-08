import  { useState, useEffect} from 'react';
import CardComponente from './components/CardComponente.jsx';
import './App.css';
import Footer_anime from './Footer_anime.jsx';
import img from './img.jsx';
import './components/Pagination/Paginacion.jsx'
import Paginacion from './components/Pagination/Paginacion.jsx';
import Search from './components/Search/Search.jsx';

function App() {
 const [pagina, setPagina] = useState(1)
 const [info, setInfo] = useState({})
 let [pageNumber, setPageNumber] = useState(1)
 const [status, setStatus] = useState('')
 const [search, setSearch] = useState('')
 const [genreFilter, setGenreFilter] = useState('')

    const [APIpersonajes, setAPIpersonajes] = useState([])
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${search}&status=${status}&gender=${genreFilter}`)
         .then((response) => response.json())
         .then((data)=>{
          setInfo(data.info.pages)
          setAPIpersonajes(data.results)
        })
    }, [pagina, search, status, genreFilter])
    
    console.log(genreFilter)
    
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
              <Search setPageNumber={setPageNumber}setSearch={setSearch} setStatus={setStatus} setGenreFilter={setGenreFilter}/>
            
    <div className='container'>
      {APIpersonajes.length !== 0 && APIpersonajes.map((APIpersona) =>(
               <CardComponente key={APIpersona.id} title= {APIpersona.name} gender={APIpersona.gender } status={APIpersona.status} image={APIpersona.image}/>
          )) }
    </div>
         
     <Paginacion pageNumber={pageNumber} info={info} setPageNumber={setPageNumber} pagina={pagina} setPagina={setPagina} />
       
    <footer>
      <Footer_anime/>
    </footer>       
    </>
  )
}

export default App
