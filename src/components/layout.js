import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../assets/images/ct-logo-v4-no-image.png';
import '../layouts/index.scss';
import '../assets/sass/main.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faSoundcloud, faItunes } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faSoundcloud, faItunes);

export default ({ children }) => (
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
    <div>{children}</div>
  </div>
);