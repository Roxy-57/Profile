import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import NaviBar from './components/NaviBar/NaviBar';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
// 화면이 렌더링 된후 50개까지의 눈송이를 생성하면서 50개이상 넘어가지 않도록 조율
  useEffect(() => {
    const numSnowflakes = 50; // 눈송이 갯수
    // Array.from을 사용해 length까지의 길이의 배열을 생성
    const snowflakesArray = Array.from({ length: numSnowflakes }, (_, index) => index);
    setSnowflakes(snowflakesArray);
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.snowflakes}>
        {snowflakes.map((index) => {
          const x = Math.random(); // 가로 위치
          const scale = Math.random() * 0.5 + 0.5; // 크기
          const speed = Math.random() * 5 + 3; // 속도

          return (
            <div
              key={index}
              className={styles.snowflake}
              style={{
                '--x': x,
                '--scale': scale,
                '--speed': `${speed}s`,
              } as React.CSSProperties} // CSS 변수 설정
            >
              ❄️
            </div>
          );
        })}
      </div>
      <NaviBar />
      <MyProfile />
      <About />
      <Skill />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
