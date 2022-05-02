import React from 'react';
import './App.scss';
import Card from './components/Card/Card';
import InputForm from './components/InputForm/InputForm';
import BtnContainer from './components/BtnContainer/BtnContainer';

const App = () => (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="box">
            <Card />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="box">
            <InputForm />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="box">
            <BtnContainer />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="box" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
