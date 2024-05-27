const NuevoComponente = (props) => {
    const {mensaje, imagen, descripcion, genero, status} = props
    return(
       <>
       
   <div className='container'>

       <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
                <img src={imagen} alt=""/>
            </div>
        </div>

        <div className="description">
            <h3>{mensaje}</h3>
            <h4>{genero}</h4>
            <p>{descripcion}</p>
        </div>

        <div className="contact">
            <a href="#">{status}</a>
        </div>
    </div>
</div>
       </>
    )
 }

export default NuevoComponente