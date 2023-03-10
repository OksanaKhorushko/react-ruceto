import './Footer.scss';
import { Copyright, FooterMainNavigation, FooterSecondaryNavigation, Logo, Subscribe, SocialMedia } from '../';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__primary">
          <div className="footer__col">
            <Logo />
            <SocialMedia />
          </div>
          <div className="footer__col">
            <FooterMainNavigation />
            <Subscribe />
          </div>
        </div>
        <hr />
        <div className="footer__secondary">
          <Copyright />
          <FooterSecondaryNavigation />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
