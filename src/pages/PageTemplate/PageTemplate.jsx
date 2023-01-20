import { Header, Footer } from '../../components';
import Home from '../../pages/Home/Home';

const PageTemplate = () => {
  return <>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </>;
};

PageTemplate.propTypes = {};

export default PageTemplate;
