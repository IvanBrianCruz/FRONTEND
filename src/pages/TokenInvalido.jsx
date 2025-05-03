import React from 'react';
import BaseView from './BaseView';

const TokenInvalido = () => (
  <BaseView
    delay={3}
    icon="❌"
    title="Token inválido o expirado"
    btnText="Solicitar nuevo enlace"
    btnHref="/reenviar-activacion"
    btnClass="btn-warning"
  >
    El enlace no es válido. Solicitá uno nuevo si lo necesitás.
  </BaseView>
);

export default TokenInvalido;
