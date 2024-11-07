import React, { useState } from 'react'
import Card from './Card';

const Form = () => {
    const [artista, setArtista] = useState({
        nombre: "",
        cancionFavorita: "",
    });

    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [error, setError] = useState(false);
    console.log(artista);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(
            artista.nombre.trim().length >= 3 &&
            artista.nombre[0] !== " " &&
            artista.cancionFavorita.trim().length >= 6
        ) {
            setMostrarMensaje(true);
            setError(false);
        } else {
            setMostrarMensaje(false)
            setError(true);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input 
                    type="text" 
                    value={artista.nombre} 
                    onChange={(event) => 
                        setArtista({...artista, nombre: event.target.value})
                    } />
                    <label>Canción Favorita:</label>
                    <input 
                    type="text"
                    value={artista.cancionFavorita}
                    onChange={(event) => 
                        setArtista({...artista, cancionFavorita: event.target.value})
                    }
                    />
                    <button>Enviar</button>
                    {error ? (
                        <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
                    ) : null
                    }
                </form>
                {mostrarMensaje && <Card nombre={artista.nombre} cancionFavorita={artista.cancionFavorita}/>}
        </div>
    );
};

export default Form;