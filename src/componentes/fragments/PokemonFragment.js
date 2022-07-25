import React, {useState,useEffect} from 'react'
const PokemonFragment = ({imagen,titulo,textoDescripcion,especie}) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textoDescripcion}</p>
                    <h6 className="card-text">{especie}</h6>


                </div>
            </div>
        </>
    )
}
export default PokemonFragment