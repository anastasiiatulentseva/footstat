import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Matches from "./components/matches";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Matches />,
  document.getElementById('matches_index')
);
