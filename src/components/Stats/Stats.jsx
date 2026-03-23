import './stats.css';
import chart from '../../assets/chart.jpg';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-img">
        <img src={chart} alt="Gunpla purchase statistics chart" />
      </div>

      <div className="stats-text">
        <h2>Rough estimation of gunpla kits bought each year</h2>

        <p>
          I started this hobby in 2022, when I discovered a local gunpla shop in
          Paris. Since then, I’ve been constantly building, as I quickly
          realized how relaxing, satisfying, and enjoyable it is.
        </p>

        <p>
          Each year, I’ve been buying more and more kits — to the point where my
          collection now exceeds <b>100+ Gunpla kits</b>. And honestly, this is
          just the beginning. This hobby is far from stopping anytime soon.
        </p>

        <h3>Where do I buy my kits</h3>

        <p>
          I mostly buy my kits in local hobby shops in Paris, such as
          <b> Rise of Gunpla </b> and <b> Manga Hobby Store </b>. I also
          sometimes order from Amazon when I find good deals.
        </p>

        <p>
          Traveling to Japan was an incredible opportunity — almost a blessing —
          to experience this hobby at its source. Being in the country where
          Gunpla was created allowed me to access exclusive, rare, and often
          cheaper kits.
        </p>

        <p>
          It’s an experience that every Gunpla fan should live at least once.
        </p>
      </div>
    </section>
  );
}
