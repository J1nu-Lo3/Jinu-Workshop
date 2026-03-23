import './about.css';
import aboutImg from '../../assets/home3366.jpg';

export default function About() {
  return (
    <section className="about">
      <img src={aboutImg} className="about-img" alt="Gunpla model showcase" />

      <div className="about-text">
        <h1>Hello</h1>

        <h2>Welcome to Jinu Workshop</h2>

        <p>
          This is my personal vlog where I share my passion: building plastic
          model kits from the Gundam series, also known as <b>Gunpla</b>.
        </p>

        <h3>What am I showing here?</h3>

        <p>
          Here you’ll find the Gunpla I’ve built, including custom-painted
          models, as well as photos I’ve taken of my builds to showcase them.
        </p>

        <p>
          I also share some vehicle models from the same universe that I’ve
          worked on.
        </p>

        <p>
          I’ll do my best to regularly share my projects (and hopefully not
          forget to upload them here).
        </p>

        <p>
          Feel free to explore my page as new content will be added over time.
          It’s a pleasure to have you visit my workshop — I hope you enjoy
          discovering my work!
        </p>
      </div>
    </section>
  );
}
