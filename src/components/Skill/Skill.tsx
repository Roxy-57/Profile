import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Skill.module.css';
import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiReact, SiTypescript, SiBootstrap, SiDocker, SiHeroku, SiGit, SiGithub, SiVim, SiFigma, SiPython, SiCsharp, SiCplusplus, SiC, SiMongodb, SiNodedotjs, SiJquery } from 'react-icons/si';

const Skill: React.FC = () => {
  //객체 별로 사용하기 편안하게 선언
const skills = {
  Language: [
    { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name:'Python',icon:<SiPython color="#3776AB" />},
    { name:'C#',icon:<SiCsharp color="#239120" />},
    { name:'C++',icon:<SiCplusplus color="#00599C" />},
    { name:'C언어',icon:<SiC color="#A8B9CC" />},
  ],
  Database: [
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  ],
  'Framework & Library': [
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'jQuery', icon: <SiJquery color="#0769AD" /> },
    
  ],
  Deployment: [
    { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    { name: 'Heroku', icon: <SiHeroku color="#430098" /> },
  ],
  'Tools & Collaborations': [
    { name: 'Git', icon: <SiGit color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub color="#181717" /> },
  ],
  ETC: [
    { name: 'Vim', icon: <SiVim color="#019733" /> },
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  ],
};


  return (
    //가장위 스타일 선언
    <div id="skills" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>My Skills</h2>
        {/* 키값으로 스킬객체의 각 카테고리를 받아와 카테고리마다 순회해 출력 */}
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-5">
            <h3 className={styles.subheading}>{category}</h3>
            <Row className="justify-content-center">
              {skills[category as keyof typeof skills].map((skill, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card className={styles.skillItem}>
                    <Card.Body className="text-center">
                      <Card.Title className={styles.icon}>{skill.icon}</Card.Title>
                      <Card.Text className={styles.skillName}>{skill.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Skill;
