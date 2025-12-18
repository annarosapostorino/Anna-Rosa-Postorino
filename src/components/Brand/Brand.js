import React from 'react';
import { navigate } from 'gatsby';

const Brand = () => {
  return (
    <div
      role="presentation"
      onClick={() => navigate('/')}
      style={{
        cursor: 'pointer',            // Hace que salga la manita al pasar el ratón
        fontFamily: 'sans-serif',     // Tipografía moderna y limpia
        fontSize: '18px',             // Tamaño ideal para cabeceras
        fontWeight: '600',            // Un poco de grosor para que se lea bien
        letterSpacing: '2px',         // Espacio entre letras (el toque elegante)
        textTransform: 'uppercase',   // Pone todo en mayúsculas automáticamente
        color: '#000000',             // Color negro
        textAlign: 'center',          // Centrado
        padding: '10px 0'             // Un poco de aire arriba y abajo
      }}
    >
      ANNA ROSA POSTORINO
    </div>
  );
};