import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ href, children, classes, type }) => {
  const typeClass = type ? `btn--${type}` : 'btn--primary';
  const computedClasses = classNames('btn', typeClass, classes);

  return href ? (
    <a href={href} className={computedClasses}>{children}</a>
  ) : (
    <button className={computedClasses}>{children}</button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired]),
  classes: PropTypes.string,
  type: PropTypes.oneOf(['transparent', 'primary']),
};
