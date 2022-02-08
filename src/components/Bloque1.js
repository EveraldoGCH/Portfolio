import React from 'react';
import fotocv from '../images/FOTOCVAjustada.png'
import "./css/bloque1.css";

export default function Bloque1() {
  return (
   <div className='bloque1back' id='inicio'>{/*Bloque para que el color este detras del header y que se vea por detras*/}
     <div className='bloque1front'>{/*aca se escribe*/}
      <div><h1 className='tituloBloque1'>¿Quién soy?</h1></div>
      <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ultrices nisl, at aliquam ex. Pellentesque mollis nibh nec eros elementum posuere. Maecenas in nibh elit. Praesent blandit turpis vel nunc feugiat laoreet. Donec et pulvinar tortor. Suspendisse commodo accumsan rutrum. Nulla condimentum rhoncus turpis, at mattis arcu convallis sed. Morbi volutpat mi sit amet aliquet cursus. Proin rutrum augue vel sodales tempus.</p>
      </div>
      <div className='imgContainer'>
        <img src={fotocv} alt='FotoCV' className='fotoCV' />
      </div>
     </div>
   </div>
  );
}
