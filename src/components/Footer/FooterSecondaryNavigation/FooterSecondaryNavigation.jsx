import './FooterSecondaryNavigation.scss';
// import PropTypes from 'prop-types';

const FooterSecondaryNavigation = () => {
  return (
    <div className="footer__secondary-navigation">
      <ul className="footer__secondary-navigation-items">
        <li className="footer__secondary-navigation-item">
          <a href="#">Subscription Terms</a>
        </li>
        <li className="footer__secondary-navigation-item">
          <a href="#">Copyright Notice</a>
        </li>
        <li className="footer__secondary-navigation-item">
          <a href="#">Terms of Use</a>
        </li>
        <li className="footer__secondary-navigation-item">
          <a href="#">Legal & Privacy</a>
        </li>
      </ul>
    </div>
  );
};

FooterSecondaryNavigation.propTypes = {};

export default FooterSecondaryNavigation;
