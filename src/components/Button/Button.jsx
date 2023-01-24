import './Button.scss';
import PropTypes from 'prop-types';

export const Button = ({ href, children, classes }) => {
  return href ? (
    <a href={href} className={`btn ${classes}`}>{children}</a>
  ) : (
    <button className={`btn ${classes}`}>{children}</button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired]),
  classes: PropTypes.string,
};
