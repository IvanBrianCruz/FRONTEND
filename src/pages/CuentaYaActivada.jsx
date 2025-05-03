import React from 'react';
import BaseView from './BaseView';

const CuentaYaActivada = () => (
  <BaseView
    delay={2}
    icon="ℹ️"
    title="La cuenta ya estaba activada"
    btnText="Iniciar sesión"
    btnHref="/login"
    btnClass="btn-info"
  >
    Podés ingresar con tu usuario y contraseña.
  </BaseView>
);

export default CuentaYaActivada;
