import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../assets/images/logo.png';
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
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
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
