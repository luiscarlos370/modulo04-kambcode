import './App.css';
import img from './img.jsx';

function Footer_anime() {
  
  return (
    <>
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
     
    </>
  )
}

export default Footer_anime