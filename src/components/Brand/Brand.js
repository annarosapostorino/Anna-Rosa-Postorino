import React from 'react';
import { navigate } from 'gatsby';

const Brand = () => {
  return (
    <div
      role="presentation"
      onClick={() => navigate('/')}
      style={{
        cursor: 'pointer',
        // Aquí está el cambio: Century y si no la tiene, usa una elegante similar
        fontFamily: 'Century, "Century Schoolbook", serif', 
        fontSize: '22px',             // La he subido un poco porque Century es fina
        fontWeight: '400',            // Normal (no negrita) queda más elegante en esta fuente
        letterSpacing: '1px',         // Un poco de aire entre letras
        textTransform: 'uppercase',   // Mayúsculas
        color: '#000000',             // Negro
        textAlign: 'center',
        padding: '10px 0'
      }}
    >
      POSTORINO
    </div>
  );
};

export default Brand;