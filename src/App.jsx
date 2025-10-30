import React from 'react'

function App() {
  
    // State values
    const [ updateText, setUpdateText ] = React.useState("")
    const [ currentPokemon, setCurrentPokemon ] = React.useState()
    const [ loading, setLoading ] = React.useState(false)

    function getData(){
        setLoading(true)
        const randomNumber = Math.floor(Math.random() * 149)

        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            .then(res => res.json())
            .then(data => {
                setUpdateText(`A wild ${data.name} has appeared!`)
                setCurrentPokemon(data)
                console.log(currentPokemon)
            })
            .finally(setLoading(false))
        }, 1000)
    }

    return (
        <>
            <div id="pokedex-body">
                <img src="/src/assets/Artboard.png" />
                <div id="pokedex-left-screen">
                    {loading && <p>Scanning area...</p>}
                    {currentPokemon && !loading ? <img className="pokemon-img" src={currentPokemon.sprites.front_default} /> : null}
                </div>
                <div id="blue-circle"></div>
                <div id="circle-lights">
                    <div className="small-led"></div>
                    <div className="small-led"></div>
                    <div className="small-led"></div>
                </div>
                <button onClick={getData} id="scan-btn"></button>
                <div id="update-text-container">
                    {updateText}
                </div>

                <div id="pokedex-right-screen"></div>
            </div>
        </>
    )
}

export default App
