import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Code, Briefcase, User, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <Navbar 
        expand="lg" 
        className={`navbar py-3 fixed-top ${isScrolled ? 'bg-white' : 'bg-transparent'}`} 
        variant={isScrolled ? 'light' : 'dark'}
      >
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <Code className="me-2" size={24} />
            <span className="fw-bold">Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="d-flex align-items-center mx-2">
                <Home size={18} className="me-1" /> Avaleht
              </Nav.Link>
              <Nav.Link href="#projects" className="d-flex align-items-center mx-2">
                <Briefcase size={18} className="me-1" /> Projektid
              </Nav.Link>
              <Nav.Link href="#about" className="d-flex align-items-center mx-2">
                <User size={18} className="me-1" /> Minust
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="hero-section d-flex align-items-center text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-4 fade-in">Kooli Projektid</h1>
          <p className="lead mb-5 fade-in">
            Tere tulemast minu projektide portfooliosse. Siin leiad kõik minu koolitööd.
          </p>
          <a href="#projects" className="btn btn-custom btn-lg fade-in">
            Vaata Projekte
          </a>
        </Container>
      </div>
    </header>
  );
};

export default Header;