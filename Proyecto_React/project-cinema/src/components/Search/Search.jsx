import React from "react";
import './Search.css';
import styles from "./Search.jsx";

const Search = () => {
    return <form action="" className="">
        <div className="container_search">
            <input placeholder="Buscar Personaje" type="text" className="search" />
            <button className="btn_search">Buscar</button>
        </div>
        
    </form>;
};

export default Search;