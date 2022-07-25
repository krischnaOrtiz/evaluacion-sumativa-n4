import React, {useState,useEffect} from 'react'
import Articuno from '../assets/images/pokemon1_articuno.jpg'
import Kabutops from '../assets/images/pokemon2_kabutops.jpg'
import Wartortle from '../assets/images/pokemon3_wartortle.jpg'
import PokemonFragment from "./fragments/PokemonFragment"


const Pokemon = () => {
    return(
        <>
            <div className="container">
                <div className= "row">
                    <div className = "col-12">
                        <h1> pokedex!</h1>
                    </div>
                </div>
                <div className= "row">
                    <div className="col-4">
                    <PokemonFragment
                        textoDescripcion="A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains"
                        imagen = {Articuno}
                        titulo = "Articuno "
                        especie= "Freeze Pokémon"
                        />
                    </div>

                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
                            imagen={Kabutops}
                            titulo="Kabuto"
                            especie= "Shellfish Pokémon"

                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion = "often hides in water stalk unwary prey.For swimming fast,it moves its ears to maintain balance"
                            imagen={Wartortle}
                            titulo="Wartortle"
                            especie = "Turtle pokémon"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pokemon