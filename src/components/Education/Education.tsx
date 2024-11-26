import React from 'react';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const education = [
    { school: 'KOSTA 291기', degree: 'JavaScrpit기반 풀스택', year: '2024.07 ~ 2024.12' },
    { school: '고등학교', degree: '졸업', year: '20?? - 20??' },
  ];

  return (
    <div id="education" className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.heading}>Education</h2>
        <ul className={styles.list}>

          {education.map((edu, index) => (

            <li key={index} className={styles.item}>

              <div className={styles.itemDetails}>
                
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <span>{edu.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
