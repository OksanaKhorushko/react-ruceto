import './Subscribe.scss';
import { Button } from '..';
// import PropTypes from 'prop-types';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <input placeholder="Email address"></input>
      <Button href="#">
        Subscribe
      </Button>
    </div>
  );
};

Subscribe.propTypes = {};

export default Subscribe;
