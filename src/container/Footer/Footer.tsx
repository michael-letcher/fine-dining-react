import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app__footer app__bg">
      <div className="app__footer-content">
        <div className="app__footer-contact">
          <h4 className="">Contact Us</h4>

          <span>22 Main St, Melbourne 3000, VIC Australia</span>
          <a href="tel:+64 400 000 000">+64 400 000 000</a>
          <a href="tel:+64 400 000 000">+64 400 000 000</a>
        </div>
        <div className="app__footer-socials">
          <img
            className="app__footer-socials__logo"
            src={images.gericht}
            alt="logo"
          />

          <div>
            <p className="app__footer-socials-quote">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>

            <img
              className="app__subheading-img"
              src={images.spoon}
              alt="spoon"
            />
          </div>

          <div className="app__footer-socials__list">
            <FiFacebook />
            <FiYoutube />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-openingHours">
          <h4 className="">Opening Hours</h4>

          <div className="app__footer-openingHours-hours">
            <span>Monday-Friday:</span>
            <span> 08:00 am -12:00 am</span>
          </div>

          <div className="app__footer-openingHours-hours">
            <span>Saturday-Sunday: </span>
            <span>07:00am -11:00 pm</span>
          </div>
        </div>
      </div>
      <div className="app__footer-copyright">
        <span>{year} Gerícht. All Rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
