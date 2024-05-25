import './App.css';
import img from './img.jsx';

function App() {
  
  return (
    <>
      <div>
         <div className="imglogo">
            <img className="imglogo" src={img.logo1}  alt=""/>
            <img className="imglogo" src={img.hamburger}  alt=""/>
         </div>
         <div className="banner">
            <div >
               <div className="title1">EXPLORE LAS</div>
               <div className="title2">PELICULAS</div>
            </div>
         </div>
         <div>
               <div>
                  <div className="title3">CATEGORÍA</div>
                  <div className="title4">ACCIÓN</div>
               </div>
            <div className="contenimg">
               <div className="imagetamano">EX MACHINA
                  <img className="imagetamano" src={img.pelicula01}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">JUNG_E
                  <img className="imagetamano" src={img.pelicula02}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">MEJORES QUE NOSOTROS
                  <img className="imagetamano" src={img.pelicula03}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">CIUDAD FUTURO
                  <img className="imagetamano" src={img.pelicula04}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
            </div>
         </div>
      
         <div >
            <div>
                  <div className="title3">CATEGORÍA</div>
                  <div className="title4">DRAMA</div>
            </div>
           
            <div className="contenimg">
               <div className="imagetamano">MADRID
                  <img className="imagetamano" src={img.pelicula05}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">BERLIN
                  <img className="imagetamano" src={img.pelicula06}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">EGIPTO
                  <img className="imagetamano" src={img.pelicula07}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div>
               <div className="imagetamano">MAQUINA
                  <img className="imagetamano" src={img.pelicula08}  alt=""/>
                  <button className='btn'>LA QUIERO</button>
                  <hr/>
               </div> 
            </div>
         </div>

      <div className='linea'>
         
      </div>

         <div >
            <div className="contenimg">
                  <img className="imgredes" src={img.facebook} alt=""/>
                  <img className="imgredes" src={img.instagram} alt=""/>
                  <img className="imgredes" src={img.twitter} alt=""/>
                  <img className="imgredes" src={img.youtube} alt=""/>
            </div>
         </div>
         <div>
            <div className="title5">2024 LUIS CARLOS | © COPYRIGHT</div>
         </div>
     </div>
    </>
  )
}

export default App
