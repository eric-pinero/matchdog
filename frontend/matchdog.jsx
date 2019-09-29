import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () =>{
   
    let store;
      
    store = configureStore();
   
    const root = document.getElementById('root');


    //for testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.logout = logout;
    //for testing 
    ReactDOM.render(<Root store={store}/>, root);
});