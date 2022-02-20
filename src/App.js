import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Marketplace from './Pages/Marketplace'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marketplace" component={Marketplace} />
      </Switch>

    </Router>

  );
}

export default App;
