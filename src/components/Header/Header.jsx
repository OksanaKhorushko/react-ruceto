import './Header.scss';
import { Logo, Navigation, UserNavigation } from '../';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo />
        <Navigation />
        <UserNavigation />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
