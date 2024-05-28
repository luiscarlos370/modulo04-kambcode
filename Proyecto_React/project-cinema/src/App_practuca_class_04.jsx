import React, {Component, useState, useEffect} from 'react';
import CardComponente from './components/CardComponente.jsx';
import './App.css';
import Footer_anime from './Footer_anime.jsx';
import img from './img.jsx';



const data=[
    {
       mensaje:     'Rick Sanchez',
       imagen:      img.anime01,
       descripcion: 'Rick es un científico brillante que con sus tendencias escépticas y anarquistas personifica en pleno la filosofía nihilista de la serie',
       genero:      'Masculino',
       status:      'alived'
    },
 
    {
       mensaje:     'Noob Noob',
       imagen:       img.anime02,
       descripcion: 'Base del Vindicador estos es una descripción',
       genero:      'Masculino',
       status:      'Deceased'
    },
 
    {
       mensaje:     'Pincesa Ponieta',
       imagen:       img.anime03,
       descripcion: 'estos es una descripción ierra (Dimensión de reemplazo',
       genero:      'Femenino',
       status:      'alived'
    },

    {
        mensaje:     'Glockenspiel Jerry',
        imagen:       img.anime04,
        descripcion: 'Glockenspiel Jerry Base del Vindicador estos es una descripción',
        genero:      'Masculino',
        status:      'Deceased'
     },

     {
        mensaje:     'Robot Morty',
        imagen:       img.anime05,
        descripcion: 'Ciudadela de Ricks estos es una descripción',
        genero:      'Masculino',
        status:      'alived'
     },
  
 
    {
       mensaje:     'esto es un mensaje',
       imagen:      'https://www.terra.com/u/fotografias/m/2023/6/4/f1280x720-17937_149612_5050.jpg',
       descripcion: 'estos es una descripción',
       genero:      'Masculino',
       status:      'alive'
    }
 ]

function App() {
    const [contador, SetContador] = useState(0)
    useEffect(()=>{
      console.log('el componente cambió', contador)
    }, [contador])
    
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

     <div className='container'>
         {data.map((elm) =>(
            <CardComponente key={elm.descripcion} descripcion={elm.descripcion} imagen={elm.imagen} mensaje={elm.mensaje} genero={elm.genero} status={elm.status} />
         ))}

      </div>

      <button onClick={incrementaContador} >Incrementar Contador</button>
    
    <footer>
      <Footer_anime/>
    </footer>
         
    </>
  )
}

export default App
