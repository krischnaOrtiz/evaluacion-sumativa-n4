import React, {useState,useEffect} from 'react'
import RecomendacionFragment from "./fragments/RecomendacionFragment";
import Mascarilla from '../assets/images/Mascarilla.png'
const Recomendaciones = () => {
    return(
        <div className ="container">
                <div className="col-12">
                    <div className= "row">
                        <h1>Recomendaciones</h1>
                    </div>
                </div>
            <div className= "row">
                <div className="col-6">
                    <RecomendacionFragment
                        titulo="Titulo 1"
                        tipoAlerta="alert-danger">
                        contenido 1
                    </RecomendacionFragment>

                </div>
                <div className= "row">
                <div className="col-6">
                    <RecomendacionFragment
                        titulo="Titulo 2"
                        tipoAlerta="alert-success">
                        contenido 2
                        <br/>
                        <img src={Mascarilla} alt="Mascarilla "/>
                    </RecomendacionFragment>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Recomendaciones