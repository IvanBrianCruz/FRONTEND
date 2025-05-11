import React from 'react';
import BaseView from '../../components/BaseView';

const TokenInvalido = () => (
  <BaseView
    delay={3}
    icon="❌"
    title="Token inválido o expirado"
    btnText="Solicitar nuevo enlace"
    btnHref="/registroExitoso"
    btnClass="btn-warning"
  >
    El enlace no es válido. Solicitá uno nuevo si lo necesitás.
  </BaseView>
);

export default TokenInvalido;
