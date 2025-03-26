import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Recursos</h5>
            <ul className="list-unstyled">
              <li><a href="https://drive.google.com/uc?export=download&id=10Eii3csMFCFRwdSypdOmm_Xs1L6X-ouB" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de JavaScript</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=10HAVsjx9f-YbZAGNCkskF9tcv9cXJm5S" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de HTML</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=104CRTFBhz9oYQi6VlNeYnkc0Yh6PFToh" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de CSS</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Este sitio fue creado como una introducción al mundo del desarrollo web, proporcionando recursos para principiantes.</p>
          </Col>
          <Col md={4}>
            <h5>Contáctanos</h5>
            <p>Email: ivan4912134@gmail.com</p>
            <p>📱Tel: +54 9 388 4211576</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Desarrollado por Ivan Brian Cruz. Casi todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
