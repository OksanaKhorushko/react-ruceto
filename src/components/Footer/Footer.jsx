import './Footer.scss';
import { Button, DiscordImg, Image, InstagramImg, LinkedinImg, Logo, TelegramImg, TwitterImg } from '../';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__primary">
          <div className="footer__col">
            <Logo />
            <div className="social__media">
              <ul className="social__media-items">
                <li className="social__media-item">
                  <a>
                    <Image src={InstagramImg} alt="Instagram" />
                  </a>
                </li>
                <li className="social__media-item">
                  <a>
                    <Image src={TwitterImg} alt="Twitter" />
                  </a>
                </li>
                <li className="social__media-item">
                  <a>
                    <Image src={TelegramImg} alt="Telegram" />
                  </a>
                </li>
                <li className="social__media-item">
                  <a>
                    <Image src={LinkedinImg} alt="Linkedin" />
                  </a>
                </li>
                <li className="social__media-item">
                  <a>
                    <Image src={DiscordImg} alt="Discord" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <nav className="footer__primary-navigation">
              <ul className="footer__primary-navigation-items">
                <li className="footer__primary-navigation-item">
                  <a href="#">Home</a>
                </li>
                <li className="footer__primary-navigation-item">
                  <a href="#">Research</a>
                </li>
                <li className="footer__primary-navigation-item">
                  <a href="#">About Us</a>
                </li>
                <li className="footer__primary-navigation-item">
                  <a href="#">Help</a>
                </li>
              </ul>
            </nav>
            <div className="sabscribe">
              <input placeholder="Email address"></input>
              <Button>
                Sabscribe
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__secondary">
          <div className="footer__copyright">
            <p>2022 All rights reserved.</p>
          </div>
          <div className="footer__secondary-navigation">
            <ul className="footer__secondary-navigation-items">
              <li className="footer__secondary-navigation-item">
                <a>Subscription Terms</a>
              </li>
              <li className="footer__secondary-navigation-item">
                <a>Copyright Notice</a>
              </li>
              <li className="footer__secondary-navigation-item">
                <a>Terms of Use</a>
              </li>
              <li className="footer__secondary-navigation-item">
                <a>Legal & Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
