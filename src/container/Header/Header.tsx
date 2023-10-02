import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <header className="app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="app__header-subtext">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="app__header-cta">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </header>
);

export default Header;
