import './Header.scss';
import { Button, Logo } from '../';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo />
        <nav className="header__nav">
          <ul className="header__nav-items">
            <li className="header__nav-item">
              <a href="#">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Research</a>
            </li>
            <li className="header__nav-item">
              <a href="#">About Us</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
        <div className="header__user-menu">
          <ul className="header__user-menu-items">
            <li className="header__user-menu-item">
              <a href="#">Log In</a>
            </li>
            <li className="header__user-menu-item">
              <Button href="#">
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
