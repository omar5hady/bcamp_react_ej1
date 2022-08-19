import React from 'react'
import { Contacto } from '../models/contacto.class'
import ComponenteB from './ComponenteB'

export const ComponenteA = () => {
    const contacto = new Contacto('Omar', 'Ramos', 'omar.ramosvzq@gmail.com',false);
  return (
    <div>
        <h1>Contacto: </h1>
        <ComponenteB contacto={contacto}></ComponenteB>
    </div>
  )
}
