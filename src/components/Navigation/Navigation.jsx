// import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-items">
        <li className="navigation-item">
          <a href="#">Home</a>
        </li>
        <li className="navigation-item">
          <a href="#">Research</a>
        </li>
        <li className="navigation-item">
          <a href="#">About Us</a>
        </li>
        <li className="navigation-item">
          <a href="#">Help</a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
