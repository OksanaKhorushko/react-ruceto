import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../../components';
import Home from '../../pages/Home/Home';

const PageTemplate = props => {
  return <>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </>
}

PageTemplate.propTypes = {}

export default PageTemplate
