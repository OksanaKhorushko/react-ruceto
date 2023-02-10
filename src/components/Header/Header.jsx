import './Header.scss';
import { Button, HeaderMobileMenu, Icon, Logo, Navigation, UserNavigation } from '../';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo />
        <Navigation />
        <UserNavigation />
        <div className="header__mobile-menu-btn-wrapper">
          <Button type="transparent" classes="header__mobile-menu-btn">
            <Icon iconName="MenuIcon" altText="Menu icon" />
            {/* <Icon iconName="ClosingIcon" altText="Closing icon" /> */}
          </Button>
        </div>
      </div>
      <HeaderMobileMenu />
    </header>
  );
};

Header.propTypes = {};

export default Header;
