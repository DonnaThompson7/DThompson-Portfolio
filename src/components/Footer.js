import { Container, Row, Col } from "react-bootstrap";
import logo from '../logo.svg';
import LinkedInIcon from '../assets/images/LinkedInIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import InstagramIcon from '../assets/images/InstagramIcon.svg';
import GitHubIcon from '../assets/images/github3.png';


export const Footer = () => {
  return (
    <footer className="footer">
      {/* <Container> */}
        {/* <Row className="align-items-center"> */}
            <img src={logo} alt="Logo" />
            <div>
            <h2 >Donna Thompson</h2>
            <h4>Full Stack Developer</h4>
            </div>
            <div className="footer-social-icon">
                <h4>Let's Connect:</h4>
                <a href="https://github.com/DonnaThompson7"><img src={GitHubIcon} alt="Donna Thompson GitHub" /></a>
                <a href="https://www.linkedin.com/in/donnathompson22/"><img src={LinkedInIcon} alt="Donna Thompson LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=100023959664534&mibextid=LQQJ4d"><img src={FacebookIcon} alt="Donna Thompson FaceBook" /></a>
                <a href="https://instagram.com/dlthompson7?igshid=OGQ5ZDc2ODk2ZA=="><img src={InstagramIcon} alt="Donna Thompson Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
        {/* </Row> */}
      {/* </Container> */}
    </footer>
  )
}