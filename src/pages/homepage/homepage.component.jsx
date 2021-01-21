import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.style.scss'

const HomePage = ({title, imageurl}) => (
  <div className="homepage">
    <Directory/>
  </div>
);
export default HomePage;