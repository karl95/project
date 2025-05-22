import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Veebidisaini Projekt",
      description: "Koolitöö veebidisaini alustest, kus keskendusime HTML ja CSS põhimõtetele.",
      imageUrl: "https://picsum.photos/id/0/800/600",
      tags: ["HTML", "CSS", "Responsive"],
      link: "#"
    },
    {
      id: 2,
      title: "Programmeerimise Põhialused",
      description: "Python programmeerimiskeele põhimõisted ja algoritmid.",
      imageUrl: "https://picsum.photos/id/1/800/600",
      tags: ["Python", "Algorithms"],
      link: "#"
    },
    {
      id: 3,
      title: "Andmebaasi Projekt",
      description: "SQL andmebaasi disain ja päringute kirjutamine.",
      imageUrl: "https://picsum.photos/id/2/800/600",
      tags: ["SQL", "Database Design"],
      link: "#"
    },
    {
      id: 4,
      title: "Mobiilirakenduse Prototüüp",
      description: "Lihtsa mobiilirakenduse prototüübi loomine.",
      imageUrl: "https://picsum.photos/id/3/800/600",
      tags: ["UI/UX", "Figma", "Prototyping"],
      link: "#"
    },
    {
      id: 5,
      title: "Võrgutehnoloogia Ülevaade",
      description: "Võrgutehnoloogia põhiprintsiipide ja -protokollide ülevaade.",
      imageUrl: "https://picsum.photos/id/4/800/600",
      tags: ["Networking", "Protocols"],
      link: "#"
    },
    {
      id: 6,
      title: "JavaScript Rakendus",
      description: "Lihtsa JavaScript rakenduse loomine veebilehitsejale.",
      imageUrl: "https://picsum.photos/id/5/800/600",
      tags: ["JavaScript", "DOM", "Web"],
      link: "#"
    }
  ];

  return (
    <section className="py-5" id="projects">
      <Container>
        <h2 className="section-title mb-5">Minu Projektid</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;