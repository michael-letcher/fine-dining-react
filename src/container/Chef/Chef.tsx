import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.scss';

const Chef = () => (
  <section className="app__chef app__bg">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__chef-info app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
          </p>
        </div>

        <p>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="app__chef-sign">
        <div className="app__chef-sign_name">Kevin Luo</div>
        <div className="app__chef-sign_title">Chef & Founder</div>

        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </section>
);

export default Chef;
