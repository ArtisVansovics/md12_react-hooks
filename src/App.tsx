import React from 'react';
import './App.scss';
import Card from './components/Card/Card';

const App = () => (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <Card />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
