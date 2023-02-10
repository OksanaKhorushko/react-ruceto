import './HeaderMobileMenu.scss';
import { Button } from '../../';

const HeaderMobileMenu = () => {
  return (
    <div className="header__mobile-menu">
      <nav className="header__mobile-menu-navigation">
        <ul className="header__mobile-menu-navigation-items">
          <li className="header__mobile-menu-navigation-item">
            <a href="#">Home</a>
          </li>
          <li className="header__mobile-menu-navigation-item">
            <a href="#">Research</a>
          </li>
          <li className="header__mobile-menu-navigation-item">
            <a href="#">About Us</a>
          </li>
          <li className="header__mobile-menu-navigation-item">
            <a href="#">Help</a>
          </li>
          <li className="header__mobile-menu-navigation-item">
            <Button href="#">
              Sign Up
            </Button>
          </li>
          <li className="header__mobile-menu-navigation-item">
            <a href="#">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

HeaderMobileMenu.propTypes = {};

export default HeaderMobileMenu;
