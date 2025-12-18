import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css'; // Importamos las reglas que acabas de crear

const Brand = () => {
  return (
    <div
      role="presentation"
      onClick={() => navigate('/')}
      className={styles.root} // Aquí está la magia: usa la clase .root del CSS
    >
      ANNA ROSA POSTORINO
    </div>
  );
};

export default Brand;