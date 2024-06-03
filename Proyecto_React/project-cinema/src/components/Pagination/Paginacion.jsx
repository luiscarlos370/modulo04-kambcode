import React from 'react';
import  {useEffect} from 'react';
import './Paginacion.css';

const Paginacion = ({pageNumber, info, setPageNumber, pagina, setPagina}) => {

            useEffect(() =>{
                const url = new URL(window.location)
                const params = new URLSearchParams(url.search)
                const page = params.get('page')
                setPagina(page)
            },[])
    
            const addQueryParams = () =>{
                    
                if (pagina < info) {
                const url = new URL(window.location)
                url.searchParams.set('page', pagina + 1)
                window.history.replaceState({}, '', url)
                setPagina(pagina + 1)
                }    
            }

            const atrasPagina = () =>{
                const url = new URL(window.location)
                if (pagina > 1) {
                url.searchParams.set('page', pagina - 1)
                window.history.replaceState({}, '', url)
                setPagina(pagina - 1)
                }  
            }

            const finalPagina = () =>{
                const url = new URL(window.location)
                url.searchParams.set('page', info)
                window.history.replaceState({}, '', url)
                setPagina(info) 
            }

            const inicialPagina = () =>{
                const url = new URL(window.location)
                url.searchParams.set('page', 1)
                window.history.replaceState({}, '', url)
                setPagina(1)
            }

            const inicialPagina2 = () =>{
                const url = new URL(window.location)
                url.searchParams.set('page', 2)
                window.history.replaceState({}, '', url)
                setPagina(2)
            }
            
            const paginaPaginas = () =>{
                if (pagina > 1) {
                setPagina(pagina - 1)
                }  
            }
            
            let next1 = () => {
                if (pageNumber > 42) return
                setPageNumber((x) => x + 1)
            };

        return(
        <>

        <div className='btn_container'>
            <button className='btn_paginacion' onClick={addQueryParams} >Siguiente</button>
            <button className='btn_paginacion' onClick={finalPagina} >Final</button> 
            <button className='btn_paginacion' onClick={inicialPagina2} >{pagina - 1}</button> 
            <button className='btn_paginacion' onClick={paginaPaginas} >{pagina}</button> 
            <button className='btn_paginacion' onClick={next1}>{ pagina > pagina ? 0 : pagina + 1}</button>
            <button className='btn_paginacion' onClick={inicialPagina} >Inicial</button> 
            <button className='btn_paginacion' onClick={atrasPagina} >Atras</button>
        </div>
        </>
        )
        }

        export default Paginacion