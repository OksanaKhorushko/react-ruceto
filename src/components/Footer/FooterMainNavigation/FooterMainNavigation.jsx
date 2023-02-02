import './FooterMainNavigation.scss';
// import PropTypes from 'prop-types';

const FooterMainNavigation = () => {
  return (
    <nav className="footer__primary-navigation">
      <ul className="footer__primary-navigation-items">
        <li className="footer__primary-navigation-item">
          <a href="#">Home</a>
        </li>
        <li className="footer__primary-navigation-item">
          <a href="#">Research</a>
        </li>
        <li className="footer__primary-navigation-item">
          <a href="#">About Us</a>
        </li>
        <li className="footer__primary-navigation-item">
          <a href="#">Help</a>
        </li>
      </ul>
    </nav>
  );
};

FooterMainNavigation.propTypes = {};

export default FooterMainNavigation;
