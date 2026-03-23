import './story.css';
import storyImg from '../../assets/info5401.jpg';

export default function Story() {
  return (
    <section className="story">
      <div className="story-text">
        <h1>The story</h1>

        <p>
          For many years, I have enjoyed discovering hobbies that I could share
          with my friends. Over time, I decided to take it further and share my
          passion with a wider audience through the internet and social
          platforms.
        </p>

        <p>
          Jinu Workshop is a personal project created to showcase my work,
          highlight my progress, and share some of the projects I am the most
          proud of.
        </p>

        <p>
          My main focus is Gunpla — building plastic model kits from the Gundam
          universe. What I love the most is the process itself: assembling each
          piece, taking my time, and seeing the model come to life. It is both
          satisfying and relaxing, almost like a way to disconnect and relieve
          stress.
        </p>

        <p>
          Beyond building, I also enjoy photographing my Gunpla. Whether it’s in
          my room, on my balcony, or even outside in nature, I like creating
          different atmospheres to bring each model to life through photos.
        </p>

        <p>
          It’s a fun and incredible hobby that combines creativity, patience,
          and imagination — and I’m always excited to explore it even more.
        </p>

        <p>Don’t hesitate to contact me.</p>

        <p>
          <b>Hope you’ll enjoy</b>
        </p>
      </div>

      <div className="story-img">
        <img
          src={storyImg}
          alt="Mega Size Gundam and my Insta mascot on its shoulder"
        />
      </div>
    </section>
  );
}
