// import 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// imported browserRouter to change view with url 
import { BrowserRouter } from 'react-router-dom';
// imported store because the provider need
import { store } from './components/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // the provider make the store global for the application and the browserRouter to change the view and url
  <Provider store={store}>
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
