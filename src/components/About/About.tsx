import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>자기소개 내용~~
        </p>
        <p className={styles.text}>자기소개 내용~~
        </p>
        <p className={styles.text}>자기소개 내용~~
        </p>
      </div>
    </div>
  );
};

export default About;

