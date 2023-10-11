import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.scss';

const SpecialMenu = () => (
  <section id="menu" className="app_specialMenu">
    <div className="app_specialMenu-title">
      <SubHeading title="Menu that fits your palate"></SubHeading>
      <h1 className="headtext__cormorant">Today's Specials</h1>
    </div>

    <div className="app_specialMenu-menu">
      <div className="app_specialMenu-menu_wine">
        <p className="app_specialMenu-menu_heading">Wine & Beer</p>
        <div className="app_specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            ></MenuItem>
          ))}
        </div>
      </div>
      <div className="app_specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app_specialMenu-menu_cocktail">
        <p className="app_specialMenu-menu_heading">Cocktails</p>
        <div className="app_specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            ></MenuItem>
          ))}
        </div>
      </div>
    </div>

    <div className="app_specialMenu-actions">
      <button type="button" className="custom__button">
        View Menu
      </button>
    </div>
  </section>
);

export default SpecialMenu;
