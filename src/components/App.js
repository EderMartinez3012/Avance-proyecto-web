import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page3" component={Page3} />
              <Route path="/page4" component={Page4} />
            </Switch>
          </>
        ) : (
          <Login onLogin={setIsAuthenticated} />
        )}
      </div>
    </Router>
  );
};

export default App;
