import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Code, Monitor, Database, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Programmeerimine",
      description: "HTML, CSS, JavaScript, Python ja muud keeled"
    },
    {
      icon: <Monitor size={24} />,
      title: "Veebidisain",
      description: "Kasutajaliideste kujundamine ja kasutajakogemuse parandamine"
    },
    {
      icon: <Database size={24} />,
      title: "Andmebaasid",
      description: "SQL ja relatsiooniliste andmebaaside haldamine"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Õppimine",
      description: "Pidev enesetäiendamine ja uute tehnoloogiate õppimine"
    }
  ];

  return (
    <section className="py-5 bg-light" id="about">
      <Container>
        <h2 className="section-title mb-5">Minust</h2>
        <Row className="mb-5">
          <Col lg={6}>
            <h3 className="mb-4">Tere! Olen tulevane IT-spetsialist</h3>
            <p className="mb-4">
              Õpin praegu infotehnoloogia erialal ja keskendun peamiselt veebiarendusele ja programmeerimisele.
              Mulle meeldib luua kasutajasõbralikke lahendusi ja õppida uusi tehnoloogiaid.
            </p>
            <p>
              Siin portfolios leiate minu kooliga seotud projektid, mis näitavad minu oskusi erinevates 
              valdkondades alates veebidisainist kuni andmebaasideni.
            </p>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="mb-4">Oskused</h4>
              <div className="d-flex flex-column gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="d-flex">
                    <div className="me-3 text-primary">{skill.icon}</div>
                    <div>
                      <h5 className="mb-1">{skill.title}</h5>
                      <p className="text-muted mb-0">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;