import React, {useEffect, useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Pokemon from "./componentes/Pokemon"
import Recomendaciones from "./componentes/Recomendaciones"



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/pokedex" element={<Pokemon/>} />
            <Route path="/recomenda" element={<Recomendaciones/>} />
        </Routes>
    )
}

export default App;
