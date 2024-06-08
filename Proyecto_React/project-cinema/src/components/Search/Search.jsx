import React from "react";
import './Search.css';

const Search = ({setSearch,setPageNumber, setStatus, setGenreFilter }) => {

    const changeCard = (e) =>{
        setPageNumber(1)
        setSearch(e.target.value)
    }

    const SelectStado = (e) =>{
            setStatus(e.target.value)
    }

    const SelectGenre = (e) =>{
        setGenreFilter(e.target.value)
    }

    const btnSearch = (e) =>{
        e.preventDefault()
    }

    return <form action="" className="">
        <div className="container_search">
            <input placeholder="Buscar Personaje" type="text" className="search" onChange={changeCard}/>

            <select className="selector_search" onChange={SelectStado}>
                    <option value=''>Seleccione Estado</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='Unknown'>Unknown</option>
            </select>

            <select className="selector_search" onChange={SelectGenre}>
                    <option value=''>Seleccione Genero</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderlesso'>Genderlesso</option>
                    <option value='Unknown'>Unknown</option>
            </select>

            <button className="btn_search" onClick={btnSearch} >Buscar</button>
        </div>        
    </form>;
    // }
};

export default Search