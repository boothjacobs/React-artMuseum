import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { SortingProvider } from './context/SortContext';

const Root = () => {
  return (
    <BrowserRouter>
      <SortingProvider>
        <App />
      </SortingProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
