import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({ setCurrentTab }) {
  const logoStyle = {
    width: '150px',
    height: 'auto',
    filter: 'drop-shadow(0 0 15px red)',
    animation: 'cambioColores 5s infinite',
    cursor: 'pointer',
  };

  const menu = {
    padding: '1.5rem 4rem',
  };

  const opfinal = {
    color: 'white',
  };

  const navbarStyle = {
    backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/baner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const keyframes = `
    @keyframes cambioColores {
      0% { filter: drop-shadow(0 0 15px red); }
      25% { filter: drop-shadow(0 0 15px blue); }
      50% { filter: drop-shadow(0 0 15px green); }
      75% { filter: drop-shadow(0 0 15px yellow); }
      100% { filter: drop-shadow(0 0 15px red); }
    }
  `;

  const handleLogoClick = () => {
    window.location.href = 'https://ivanbriancruz.github.io/ATLAS/';
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mokoto:wght@700&display=swap');
          ${keyframes}
        `}
      </style>

      <Navbar expand="lg" style={navbarStyle}>
        <Container>
          <img
            src="https://ivanbriancruz.github.io/CURSO-ATLAS/img/logo2025.png"
            alt="Logo Atlas"
            style={logoStyle}
            onClick={handleLogoClick}
          />
          <div style={menu}>
            <Navbar.Brand
              href="https://ivanbriancruz.github.io/ATLAS/"
              style={{
                color: 'white',
                fontSize: '70px',
                fontFamily: "'Mokoto', sans-serif",
                fontWeight: 'bold',
              }}
            >
              A T L A S
            </Navbar.Brand>


            <br />
            <br />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => setCurrentTab('Home')} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introJS')} className="text-white">
                  Introducción a JavaScript
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introHTML')} className="text-white">
                  Introducción a HTML
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introCSS')} className="text-white">
                  Introducción a CSS
                </Nav.Link>

                <div style={logoStyle}>
                  <NavDropdown title="Complementos" id="basic-nav-dropdown" style={opfinal}>
                    <NavDropdown.Item onClick={() => setCurrentTab('Evaluacion')}>
                      Evaluación
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setCurrentTab('Presentacion')}>
                      Presentación
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setCurrentTab('Herramientas')}>
                      Herramientas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setCurrentTab('Material')}>
                      Material
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
