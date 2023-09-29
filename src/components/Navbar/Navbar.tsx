import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.scss';

interface LinksProps {
  mobile?: boolean;
}

const Links = ({ mobile }: LinksProps) => {
  const className = mobile ? 'mobile-list' : 'list';

  return (
    <ul className={`app__navbar-${className}`}>
      <li className={`app__navbar-${className}__item`}>
        <a href="#">Home</a>
      </li>
      <li className={`app__navbar-${className}__item`}>
        <a href="#">Pages</a>
      </li>
      <li className={`app__navbar-${className}__item`}>
        <a href="#">Contact Us</a>
      </li>
      <li className={`app__navbar-${className}__item`}>
        <a href="#">Blog</a>
      </li>
      <li className={`app__navbar-${className}__item`}>
        <a href="#">Landing</a>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const iconSize = 27;

  return (
    <nav className="app__navbar">
      <div className="app__navbar-title">Gerícht</div>

      <Links />

      <div className="app__navbar-sign">
        <a href="#">Log in / Registration</a>
        <div className="app__navbar-sign_divider"></div>
        <a href="#">Book Table</a>
      </div>

      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          className="app__navbar-mobile-icon"
          fontSize={iconSize}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-mobile_overlay">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              fontSize={iconSize}
              onClick={() => setToggleMenu(false)}
            />
            <div className="slide-bottom" onClick={() => setToggleMenu(false)}>
              <Links mobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
