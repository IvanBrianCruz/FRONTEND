import React from 'react';
import '../assets/css/styledefecto.css';

const BaseView = ({ delay, icon, title, children, btnText, btnHref, btnClass }) => (
  <div className="gradient-bg">
    <div className={`card delay-${delay}`}>
      <div style={{ fontSize: '3rem', marginBottom: '.5rem' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{children}</p>
      <a href={btnHref} className={`btn-custom ${btnClass}`}>{btnText}</a>
    </div>
  </div>
);

export default BaseView;
