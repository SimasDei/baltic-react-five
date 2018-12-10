import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row bg-dark">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
