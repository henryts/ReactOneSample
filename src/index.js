import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="app">
     <div className='app-header'>
        <span className='header-title'>ReactOne</span>
        <span>Home</span>
        <span>Usage</span>
        <span>Settings</span>
        <span>Logout</span>
     </div>
     <div className='app-body'>
        <div className='app-list'>
          <div className='list-item'>
            <hr />
            <div className='list-title'>
              <h4>My title One</h4>
            </div>
            <div className='list-descr'>
              This is long
            </div>
            <div className='list-label'>
              <span>Label 1</span>
              <span>Label 2</span>
              <span>Label 3</span>
              
            </div>
            <hr />
          </div>

        </div>
     </div>

     <div className='app-footer'>Copyright ReactOne by Henry. All Rights Reserved </div>

  </div>
);

