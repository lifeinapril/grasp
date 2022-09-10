import React from 'react';
import HeadBar from './components/Bars/HeadBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Foot from './components/Bars/Foot';
import WebFont from 'webfontloader';
import json from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif','/Quicksand']
  }
});


class App extends React.Component {
  constructor(props) {
    super();
  this.state = json;

  }
  render() {
    return (
  <Router>
      <HeadBar dark={false} name={this.state.name} icon={this.state.icon} 
      contacts={this.state.contacts}/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      <Foot 
        bg="bg-light dark"
        name={this.state.name}
        icon={this.state.icon}
        slogan={this.state.slogan}
        contacts={this.state.contacts}
        />
  </Router>
);
    }
}

export default App;
