import  { useState, useEffect} from 'react';
import CardComponente from './components/CardComponente.jsx';
import './App.css';
import Footer_anime from './Footer_anime.jsx';
import Paginacion from './components/Pagination/Paginacion.jsx';
import Search from './components/Search/Search.jsx';
import NavMenu from './components/Nav/NavMenu.jsx';
import Header_anime from './Header_anime.jsx';

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
    
  return (
    <>

        {/* <Header_anime /> */}
     
        <NavMenu/>
            
    <footer>
      <Footer_anime/>
    </footer>       
    </>
  )
}

export default App
