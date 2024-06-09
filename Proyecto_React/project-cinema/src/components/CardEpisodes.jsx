import React from "react";
const CardEpisodes = (props) => {
    const {title, gender, image, status, episodes} = props

    return(
       <>     
   <div className='container'>

       <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img_Episodes">
                <img src={image} alt=""/>
                <h3>{title}</h3>
            </div>
        </div>

        <div className="description_Episodes">
            <h4>{episodes}</h4>
            <h3>Animes</h3>
        </div>

        <div className="contact">
            <h3 >{status} </h3>
        </div>
    </div>
</div>
       </>
    )
 }

export default CardEpisodes