import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './helpers/apiKeys';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
