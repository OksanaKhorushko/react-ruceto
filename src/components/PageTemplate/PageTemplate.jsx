import { Header, Footer } from '../';
import Home from '../../pages/Home/Home';

const PageTemplate = () => {
  return <div className="main-wrapper">
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </div>;
};

PageTemplate.propTypes = {};

export default PageTemplate;
