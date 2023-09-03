import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../logo.svg';
import LinkedInIcon from '../assets/images/LinkedInIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import InstagramIcon from '../assets/images/InstagramIcon.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
 
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="nabvar-toggler-icon"></span></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
          <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#"><img src={LinkedInIcon} alt="" /></a>
            <a href="#"><img src={FacebookIcon} alt="" /></a>
            <a href="#"><img src={InstagramIcon} alt="" /></a>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
