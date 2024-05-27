const NuevoComponente = (props) => {
    const {mensaje, imagen, descripcion} = props
    return(
       <>
          <div>
             <img className="imagetamano" src={imagen} />
             <h2 className='title4'>{mensaje} </h2>
             <p className='title3'>{descripcion} </p>
          </div>
       </>
    )
 }

export default NuevoComponente