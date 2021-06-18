import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const [error, guardarError] = useState(false)

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda

    // funcion que selecciona el usuario y coloca los elementos en el state
    const handleChange = e => {
        // Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario da Submit al form
    const handleSubmit = e => {
        e.preventDefault()

        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        guardarConsultar(true)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    valu={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un Pais --</option>
                    <option value="DE">Alemania</option>
                    <option value="AR">Argentina</option>
                    <option value="AU">Australia</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="IE">Irlanda</option>
                    <option value="IT">Italia</option>
                    <option value="MX">México</option>
                    <option value="NZ">Nueva Zelanda</option>
                    <option value="PE">Perú</option>
                    <option value="UY">Uruguay</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
export default Formulario
