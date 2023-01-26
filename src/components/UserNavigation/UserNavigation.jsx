// import PropTypes from 'prop-types';
import './UserNavigation.scss';
import { Button } from '../';

const UserNavigation = () => {
  return (
    <div className="user-navigation">
      <ul className="user-navigation__items">
        <li className="user-navigation__item">
          <a href="#">Log In</a>
        </li>
        <li className="user-navigation__item">
          <Button href="#">
            Sign Up
          </Button>
        </li>
      </ul>
    </div>
  );
};

UserNavigation.propTypes = {};

export default UserNavigation;
