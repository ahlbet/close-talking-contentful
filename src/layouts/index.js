import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';
import '../assets/sass/main.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Close Talking"
      meta={[
        {
          name: 'description',
          content: 'Close Talking | Poetry Podcast'
        },
        { name: 'keywords', content: 'web, developer' }
      ]}
    />
    {/* <Header /> */}
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
