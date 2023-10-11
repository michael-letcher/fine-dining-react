import './MenuItem.scss';

interface MenuItemProps {
  title: string;
  price: string;
  tags: string;
}

const MenuItem = ({ title, price, tags }: MenuItemProps) => (
  <div className="app_menuItem">
    <div className="app_menuItem-title-wrapper">
      <div className="app_menuItem-title">{title}</div>
      <div className="app_menuItem-separator"></div>
      <div className="app_menuItem-price">{price}</div>
    </div>
    <div className="app_menuItem-tags">{tags}</div>
  </div>
);

export default MenuItem;
