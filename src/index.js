import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzNMhZXnm_ILxwEtSgn71NbaBCcXXaU_M",
  authDomain: "cart-61e50.firebaseapp.com",
  databaseURL: "https://cart-61e50.firebaseio.com",
  projectId: "cart-61e50",
  storageBucket: "cart-61e50.appspot.com",
  messagingSenderId: "590190684781",
  appId: "1:590190684781:web:8bed069f1d11f0bb59ed64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA