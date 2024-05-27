import './App.css';
import App2 from './App2.jsx';
import NuevoComponente from './components/new_components.jsx';
import img from './img.jsx';
import React, {Component, useState} from 'react';

const data=[
   {
      mensaje:     'esto es un mensaje',
      imagen:      img.pelicula01,
      descripcion: 'estos es una descripción'
   },

   {
      mensaje:     'esto es un mensaje',
      imagen:      img.pelicula02,
      descripcion: 'estos es una descripción'
   },

   {
      mensaje:     'esto es un mensaje',
      imagen:      'https://www.terra.com/u/fotografias/m/2023/5/31/f1280x720-17755_149430_5130.jpg',
      descripcion: 'estos es una descripción'
   },

   {
      mensaje:     'esto es un mensaje',
      imagen:      'https://www.terra.com/u/fotografias/m/2023/6/4/f1280x720-17937_149612_5050.jpg',
      descripcion: 'estos es una descripción'
   }
]

function App() {
    const [saludo] = useState('Hola a Todos')
  return (
    <>
      <div className='container'>
         <h1>{saludo}</h1>
         {data.map((elm) =>(
            <NuevoComponente key={elm.descripcion} descripcion={elm.descripcion} imagen={elm.imagen} mensaje={elm.mensaje} />
         ))}
         <NuevoComponente descripcion= 'esto es una descripcion' imagen={img.pelicula01}  mensaje= 'esto es un mensaje'/>
         <NuevoComponente descripcion= 'esto es una descripcion' imagen={img.pelicula02}  mensaje= 'esto es un mensaje'/>
         <NuevoComponente descripcion= 'esto es una descripcion' imagen={img.pelicula03}  mensaje= 'esto es un mensaje'/>
      </div>

      <div>
         <App2/>
      </div>
    </>
  )
}

export default App
