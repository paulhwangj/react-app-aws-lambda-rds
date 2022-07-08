import logo from './logo.svg';
import './App.css';

import React from 'react';
import axios from 'axios';

import GetData from './components/GetData.js';
import InsertData from './components/InsertData';

function App() {
  return (
    <div id="container">
      <GetData/>
      <InsertData/>
    </div>
  );
}
export default App;
