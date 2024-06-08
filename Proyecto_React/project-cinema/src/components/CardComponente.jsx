import React from "react";
const CardComponente = (props) => {
    const {title, gender, image, status} = props

    return(
       <>     
   <div className='container'>

       <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
                <img src={image} alt=""/>
            </div>
        </div>

        <div className="description">
            <h3>{title}</h3>
            <h4>{gender}</h4>
            <p>Animes</p>
        </div>

        <div className="contact">
            <a >{status} </a>
        </div>
    </div>
</div>
       </>
    )
 }

export default CardComponente