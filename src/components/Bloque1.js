import React from 'react';
import "./css/bloque1.css"

export default function Bloque1() {
  return (
   <div className='bloque1back' id='inicio'>{/*Bloque para que el color este detras del header y que se vea por detras*/}
     <div className='bloque1front'>{/*aca se escribe*/}
      <h1 className='tituloBloque1'>Everaldo Guevara</h1>
     </div>
   </div>
  );
}
