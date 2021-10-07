import { useState } from "react";



function Formulario() {
   
    

    const [movie, setMovie] = useState({});
    const creaMovie = (event) => {
      console.log(movie);
        event.preventDefault();
      

    }


    const changeField = (event) => {
        /* console.log(event.target.value, event.target.name); */
        /*  const serieCopia = { ...serie };
         serieCopia[event.target.name] = event.target.value;
         setSerie(serieCopia); */
        setMovie({

            ...movie,
            [event.target.name]: event.target.value

        })

    }

   


    return <div className="formulario">
        <div>
            <p>{movie.titulo}</p>
            <p>{movie.imagen}</p>
        </div>
        <form onSubmit={creaMovie} >
            <div className="form-group">
                <label>Título</label>
                <input type="text" name="titulo" className="form-control" onChange={(event) => changeField(event, 'titulo')} />
            </div>
          
            <div className="form-group">
                <label>Imagen</label>
                <input type="text" name="imagen" className="form-control" onChange={changeField} />
            </div>
            <button className=" btn btn-primary">Enviar</button>
        </form>
    </div>

}

export default Formulario;