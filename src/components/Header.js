import { NavBar } from "./NavBar";
import logo from '../logo.svg';

export const Header = ({ activeLink, onUpdateActiveLink }) => {
  return (
    <div className="header">
        <NavBar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
        <div className='header-name'>
          <p >Donna Thompson</p>
        </div>
        <img className="header-name-img" src={logo} alt="Logo" />
    </div>
  );
}
