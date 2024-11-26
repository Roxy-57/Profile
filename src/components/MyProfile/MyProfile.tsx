import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './MyProfile.module.css';

const MyProfile: React.FC = () => {
  return (
    <div id="profile" className={styles.profileSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image
              src="./images/test.jpg"
              roundedCircle
              alt="Profile"
              className={styles.profileImage}
            />
          </Col>
          <Col md={6}>
            <h2 className={styles.heading}>Contact Me</h2>
            <p className={styles.info}>
              <strong>Birthday:</strong> 1999.11.11
            </p>
            <p className={styles.info}>
              <strong>Email:</strong> 어쩌구@gmail.com
            </p>
            <p className={styles.info}>
              <strong>Phone:</strong> 010-1234-5678
            </p>
            <p className={styles.info}>
              <strong>GitHub: </strong> 
              <a href="https://github.com/Roxy-57" target="_blank" rel="noopener noreferrer"> 
               github.com/Roxy-57
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
