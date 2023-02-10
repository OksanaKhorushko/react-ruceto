import PropTypes from 'prop-types';
import * as iconList from './iconList.js';

const Icon = ({ iconName, altText }) => {
  return (
    <img src={iconList[iconName]} alt={altText} />
  );
};

Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'InstagramIcon',
    'TwitterIcon',
    'TelegramIcon',
    'LinkedinIcon',
    'DiscordIcon',
    'MenuIcon',
    'ClosingIcon',
  ]).isRequired,
  altText: PropTypes.string.isRequired,
};

export default Icon;

