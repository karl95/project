import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  link
}) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body className="project-card-body d-flex flex-column">
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-muted mb-3">{description}</Card.Text>
        <div className="mt-auto">
          <div className="mb-3">
            {tags.map((tag, index) => (
              <Badge 
                bg="light" 
                text="dark" 
                className="me-2 mb-1" 
                key={`${id}-tag-${index}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <a 
            href={link} 
            className="btn btn-outline-primary d-flex align-items-center justify-content-center"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="me-1">Vaata projekti</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;