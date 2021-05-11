import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // CREA STATE DE CITAS 

    const [cita, actualizarCita] = useState({
        mascota: '',
        proprietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }) 

    // STATE PARA VALIDACIÓN 

    const [error, actualizarError] = useState(false)

    // Función que se ejecuta cuando el usuario escribe en el input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores+

    const {mascota, proprietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agragar cita

    const submitCita = e => {
        e.preventDefault();

        // Validar 

        if (mascota.trim() === '' || proprietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return;
        }

        // Eliminar aviso previo 

        actualizarError(false);

        // Asignar ID

        cita.id = uuidv4();

        console.log(cita)

        // Crear Cita 

        crearCita(cita);
        
        // Reiniciar Cita

        actualizarCita({
            mascota: '',
            proprietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2 className="title">Crear Cita</h2>

            { error ? <p class="alerta-error">Todos los campos son obligatorios</p>  : null  }

            <form
                onSubmit={submitCita}
            >
                <label>Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Mi nombre"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Dueño</label>
                <input 
                    type="text"
                    name="proprietario"
                    className="u-full-width"
                    placeholder="Nombre de mi dueño"
                    onChange={actualizarState}
                    value={proprietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>


     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;