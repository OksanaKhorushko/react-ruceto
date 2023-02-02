import './Sabscribe.scss';
import { Button } from '../';
// import PropTypes from 'prop-types';

const Sabscribe = () => {
  return (
    <div className="sabscribe">
      <input placeholder="Email address"></input>
      <Button href="#">
        Sabscribe
      </Button>
    </div>
  );
};

Sabscribe.propTypes = {};

export default Sabscribe;
