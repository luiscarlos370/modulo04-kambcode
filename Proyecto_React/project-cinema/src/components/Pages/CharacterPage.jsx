import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  { useState, useEffect} from 'react';
import CardComponente from '../CardComponente.jsx';
import '../../App.css'
import Footer_anime from '../../Footer_anime.jsx';
import Paginacion from '../Pagination/Paginacion.jsx';
import Search from '../Search/Search.jsx';

function CharacterPage() {
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
    
    <Search setPageNumber={setPageNumber}setSearch={setSearch} setStatus={setStatus} setGenreFilter={setGenreFilter}/>
            
    <div className='container'>
      {APIpersonajes.length !== 0 && APIpersonajes.map((APIpersona) =>(
               <CardComponente key={APIpersona.id} title= {APIpersona.name} gender={APIpersona.gender } status={APIpersona.status} image={APIpersona.image}/>
          )) }
    </div>
         
     <Paginacion pageNumber={pageNumber} info={info} setPageNumber={setPageNumber} pagina={pagina} setPagina={setPagina} />
             
    </>
  )

  // Copia todo el contenido que tienes en App.jsx para hacer que esta pagina renderice el listado de personajes paginado
}
export default CharacterPage;