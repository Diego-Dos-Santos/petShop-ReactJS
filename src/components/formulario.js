import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // CREA STATE DE CITAS 

    const [cita, actualizarCita] = useState({
        mascota: '',
        proprietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }) 

    // Función que se ejecuta cuando el usuario escribe en el input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores+

    const {mascota, proprietario, fecha, hora, sintomas} = cita;

    return (
        <Fragment>
            <h2 className="title">Crear Cita</h2>

            <form>
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
 
export default Formulario;