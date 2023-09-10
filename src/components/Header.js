import { NavBar } from "./NavBar";
import LinkedInIcon from '../assets/images/LinkedInIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import InstagramIcon from '../assets/images/InstagramIcon.svg';
import GitHubIcon from '../assets/images/GitHub-Mark.png';

export const Header = ({ activeLink, onUpdateActiveLink }) => {
  return (
    <div className="header">
        <NavBar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
        <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/DonnaThompson7"><img src={GitHubIcon} alt="Donna Thompson GitHub" /></a>
                <a href="https://www.linkedin.com/in/donnathompson22/"><img src={LinkedInIcon} alt="Donna Thompson LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=100023959664534&mibextid=LQQJ4d"><img src={FacebookIcon} alt="Donna Thompson FaceBook" /></a>
                <a href="https://instagram.com/dlthompson7?igshid=OGQ5ZDc2ODk2ZA=="><img src={InstagramIcon} alt="Donna Thompson Instagram" /></a>
              </div>
        </span>
    </div>
  );
}
