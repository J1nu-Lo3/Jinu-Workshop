import './header.css';
import logo from '../../assets/Logo.PNG';
import insta from '../../assets/insta-logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className="logo" alt="Jinu Workshop logo" />
      </div>

      <div className="header-center">
        <div className="line"></div>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>

          <NavLink
            to="/info"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Info
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      <div className="header-right">
        <a
          href="https://www.instagram.com/jinu_studio_04?igsh=NmZkbTZydnE1Yzdt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} className="insta" alt="Instagram link" />
        </a>
      </div>
    </header>
  );
}
