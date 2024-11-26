import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    { title: '프로젝트 이름1', description: '프로젝트 설명1', link: '#' },
    { title: '프로젝트 이름2', description: '프로젝트 설명2', link: '#' },
    { title: '프로젝트 이름3', description: '프로젝트 설명3', link: '#' },
  ];

  return (
    <div id="projects" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.link} variant="light">프로젝트 보러가기</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
