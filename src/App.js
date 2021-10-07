

import { useState } from 'react'
import Formulario from './formulario';


function App() {

  const [items, setItems] = useState([
    { titulo: 'Menudo es mi padre', protagonista: 'el fary', imagen: 'https://blogs.lasprovincias.es/elsindromededarrin/wp-content/uploads/sites/21/2016/04/Menudo-es-mi-padre.jpg' },
    { titulo: 'LLeno por favor', protagonista: 'Alfreso Landa', imagen: 'https://cloud10.todocoleccion.online/series-tv-dvd/tc/2019/06/15/11/166217916_156059194959C47391.jpg' }
  ]);

  const nuevaMovie = (nuevaMovie) => {
    setItems([
      ...items,
      nuevaMovie
    ])
  }
  return (
    <div className="App">

      <h1>Series y programas que nunca teniamos que haber perdido</h1>
      <Formulario nuevaSerie={nuevaMovie} />
     

    </div>
  );
}

export default App;
