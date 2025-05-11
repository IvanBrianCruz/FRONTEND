import React from 'react';
import BaseView from '../../components/BaseView';

const UsuarioNoEncontrado = () => (
  <BaseView
    delay={4}
    icon="🔍"
    title="Usuario no encontrado"
    btnText="Volver al inicio"
    btnHref="/"
    btnClass="btn-secondary"
  >
    Puede que el enlace esté mal o el usuario no exista.
  </BaseView>
);

export default UsuarioNoEncontrado;
