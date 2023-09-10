import { NavBar } from "./NavBar";
import logo from '../logo.svg';

import LinkedInIcon from '../assets/images/LinkedInIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import InstagramIcon from '../assets/images/InstagramIcon.svg';
import GitHubIcon from '../assets/images/GitHub-Mark.png';

export const Header = ({ activeLink, onUpdateActiveLink }) => {
  return (
    <div className="header">
        <NavBar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
        <div className='header-name'>
          <p >Donna Thompson</p>
          {/* <h6>Full Stack Developer</h6> */}
        </div>
        <img className="header-name-img" src={logo} alt="Logo" />
    </div>
  );
}
