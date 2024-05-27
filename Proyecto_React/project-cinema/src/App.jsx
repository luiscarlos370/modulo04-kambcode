import './App.css';
import App3 from './App3.jsx';
import NuevoComponente from './components/new_components.jsx';
import img from './img.jsx';
import React, {Component} from 'react';


const data=[
    {
       mensaje:     'Rick_Sanchez',
       imagen:      img.anime01,
       descripcion: 'Rick es un científico brillante que con sus tendencias escépticas y anarquistas personifica en pleno la filosofía nihilista de la serie',
       genero:      'Masculino',
       status:      'alived'
    },
 
    {
       mensaje:     'Noob_Noob',
       imagen:       img.anime02,
       descripcion: 'Base del Vindicador estos es una descripción',
       genero:      'Masculino',
       status:      'Deceased'
    },
 
    {
       mensaje:     'Pincesa_Ponieta',
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
   // const [series] = useState('RICK AND MORTY')
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
            <NuevoComponente key={elm.descripcion} descripcion={elm.descripcion} imagen={elm.imagen} mensaje={elm.mensaje} genero={elm.genero} status={elm.status} />
         ))}

      </div>
    
    <footer>
      <App3/>
    </footer>
         
    </>
  )
}

export default App
