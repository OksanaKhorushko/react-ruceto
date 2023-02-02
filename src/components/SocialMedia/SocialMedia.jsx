import './SocialMedia.scss';
// import PropTypes from 'prop-types';

import { Icon } from '../';
const SocialMedia = () => {
  return (
    <div className="social__media">
      <ul className="social__media-items">
        <li className="social__media-item">
          <a href="#">
            <Icon iconName="InstagramIcon" altText="Instagram" />
          </a>
        </li>
        <li className="social__media-item">
          <a href="#">
            <Icon iconName="TwitterIcon" altText="Twitter" />
          </a>
        </li>
        <li className="social__media-item">
          <a href="#">
            <Icon iconName="TelegramIcon" altText="Telegram" />
          </a>
        </li>
        <li className="social__media-item">
          <a href="#">
            <Icon iconName="LinkedinIcon" altText="Linkedin" />
          </a>
        </li>
        <li className="social__media-item">
          <a href="#">
            <Icon iconName="DiscordIcon" altText="Discord" />
          </a>
        </li>
      </ul>
    </div>
  );
};

SocialMedia.propTypes = {};

export default SocialMedia;
