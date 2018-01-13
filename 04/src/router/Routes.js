import React from 'react';
import App from '../client/components/App';
import About from '../client/components/About';

export default [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/about',
    component: About
  }
];
