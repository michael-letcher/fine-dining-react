import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <section className="app__aboutus app__bg">
    <div className="app__aboutus-overlay">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h1 className="app__aboutus-content-title">About Us</h1>
        <img
          className="app__aboutus-content-image"
          src={images.spoon}
          alt="about spoon"
        />
        <p className="app__aboutus-content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>

        <button
          className="app__aboutus-content-cta custom__button"
          type="button"
        >
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="app__aboutus-content-title">Our history</h1>
        <img
          className="app__aboutus-content-image"
          src={images.spoon}
          alt="about spoon"
        />
        <p className="app__aboutus-content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>

        <button
          className="app__aboutus-content-cta custom__button"
          type="button"
        >
          Know More
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
