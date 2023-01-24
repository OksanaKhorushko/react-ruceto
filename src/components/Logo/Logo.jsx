import Image from '../Image/Image';
import LogoImg from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo__link">
        <Image src={LogoImg} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
