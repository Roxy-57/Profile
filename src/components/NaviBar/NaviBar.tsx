import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styles from './NaviBar.module.css';

const NaviBar: React.FC = () => {
  return (
    /*expand를 사용해 large이상일때 토글로 변환 fixed를 통해 네비게이션 바 위에 고정 */
    // sm: 작은 장치 (모바일 장치)md: 중간 크기 화면 (태블릿 등)lg: 큰 화면 (데스크탑 등) 부트스트랩에서 제공하는 크기에 맟춰 조절
    <Navbar className={styles.navbar} expand="md" fixed="top">
      <Container>

        <Navbar.Brand href="#" className={styles.navBrand}>
          🎄 My Profile 🎄
        </Navbar.Brand>
        {/* 토글 컨트롤 시 필요한 id를 받아와 컨트롤 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Toggle에서 조작하기 위해 필요한 id */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 네비게이션 요소 오른쪽 정렬margin-start auto */}
          <Nav className="ms-auto">
            <Nav.Link className={styles.navLink}>
              {/* 네비게이션 바가 섹션과 겹칠수 있어 설정offset={-70} */}
              <Link to="about" smooth={true} duration={500} offset={-70}>
                 <strong>About</strong>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.navLink}>
              <Link to="skills" smooth={true} duration={500} offset={-70}>
                 <strong>Skills</strong>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.navLink}>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                 <strong>Projects</strong>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.navLink}>
              <Link to="education" smooth={true} duration={500} offset={-70}>
                <strong>Education</strong>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
