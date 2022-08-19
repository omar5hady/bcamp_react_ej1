import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ComponenteB = ({contacto}) => {

    const [estado, setEstado] = useState(contacto.conectado);

    const cambiarEstado = () => {
        setEstado(!estado)
    }

    return (
        <div>
            <h4>Nombre: {contacto.nombre}</h4>
            <h4>Apellidos: {contacto.apellidos}</h4>
            <h3>Email: {contacto.email} </h3>
            <h5> { estado ? 'Contacto en Linea' : 'Contacto No Disponible' }</h5>
            <button onClick={cambiarEstado}> Cambiar estado </button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
