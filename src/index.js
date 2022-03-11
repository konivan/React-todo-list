import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

