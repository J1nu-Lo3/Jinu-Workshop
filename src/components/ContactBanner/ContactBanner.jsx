import './contactBanner.css';

export default function ContactBanner({ image }) {
  return (
    <div className="contact-banner">
      <img src={image} alt="Contact page banner" />
    </div>
  );
}
