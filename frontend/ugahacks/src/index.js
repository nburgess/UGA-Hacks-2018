import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import scriptLoader from 'react-async-script-loader';

//scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyAYbtCPuL2LBozcTv1mc2fvKOmAPqy5aqM'])
render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
