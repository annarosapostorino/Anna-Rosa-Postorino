import React from 'react';
import { navigate } from 'gatsby';

const Brand = () => {
  return (
    <div
      role="presentation"
      onClick={() => navigate('/')}
      style={{
        cursor: 'pointer',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#000000',
        textAlign: 'center',
        padding: '10px 0'
      }}
    >
      ANNA ROSA POSTORINO
    </div>
  );
};

export default Brand;