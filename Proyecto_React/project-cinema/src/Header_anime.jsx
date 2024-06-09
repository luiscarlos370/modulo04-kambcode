import React from 'react';
import img from './img';
import './App.css';

const Header_anime = () =>{

    return <div className="imglogo">
                <img className="imglogo" src={img.logo}  alt=""/>    
                <img className="imglogo" src={img.hamburger}  alt=""/>
          </div>

    }

export default Header_anime