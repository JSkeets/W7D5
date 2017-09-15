import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
