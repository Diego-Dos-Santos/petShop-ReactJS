import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en Local Storage 

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // ARREGLO DE CITAS

  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para realizar operaciones cuando el STATE cambia (USE EFFECT SIEMPRE SERÁ UN ARROW FUNCTION)

    useEffect( () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas))
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
  }, [citas] );

  // Función que pille las citas actuales y agregue una nueva

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  // Función que eleimina las citas por su id 

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

   // Mensaje condicional
   const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>New PetShop</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
