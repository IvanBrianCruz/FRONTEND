import React from 'react';
import BaseView from '../../components/BaseView';

const ActivacionExitosa = () => (
  <BaseView
    delay={1}
    icon="✅"
    title="¡Cuenta activada con éxito!"
    btnText="Ir al inicio de sesión"
    btnHref="/login"
    btnClass="btn-success"
  >
    ¡Ya podes iniciar sesión en el sistema del IES N°6!
  </BaseView>
);

export default ActivacionExitosa;
