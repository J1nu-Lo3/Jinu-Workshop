import './footer.css';
import logo from '../../assets/Logo.PNG';
import footerbanner from '../../assets/loho6431.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-banner">
        <img src={footerbanner} alt="Workstation scene banner" />
      </div>

      <div className="footer-content">
        <img
          src={logo}
          className="logo"
          alt="Jinu Workshop logo"
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
        />

        <p>Jinu.Workshop. &nbsp;&nbsp; 4years in this Hobby</p>
      </div>
    </footer>
  );
}
