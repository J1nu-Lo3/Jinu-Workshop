import './coninfo.css';
import qrCode from '../../assets/insta6424.jpg';

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">How to contact me?</h1>

      <div className="contact-box">
        <div className="contact-left">
          <h2>Via mail:</h2>

          <form
            action="mailto:jinuworkshop@gmail.com"
            method="POST"
            encType="text/plain"
            onSubmit={(e) => {
              setTimeout(() => {
                e.target.reset();
              }, 100);
            }}
          >
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="your name..."
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="your message..."
              required
            />

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-right">
          <h2>Follow me on Insta:</h2>

          <img src={qrCode} className="qr-code" alt="Instagram QR code" />
        </div>
      </div>
    </section>
  );
}
