import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <div className="d-flex align-items-center mb-3">
              <Code size={24} className="me-2" />
              <h5 className="mb-0">Kooli Projektid</h5>
            </div>
            <p className="text-muted">
              Siin leiad minu kõige huvitavamad ja väljakutsuvamad projektid, 
              mis on loodud õpingute käigus.
            </p>
          </Col>
          
          <Col md={4} className="ms-auto">
            <h5 className="mb-3">Kontakt</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white d-flex align-items-center">
                  <Mail size={18} className="me-2" />
                  <span>email@example.com</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white d-flex align-items-center">
                  <Github size={18} className="me-2" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white d-flex align-items-center">
                  <Linkedin size={18} className="me-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="mt-4 mb-4" />
        
        <div className="text-center">
          <p className="mb-0">© {currentYear} Kõik õigused kaitstud</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;