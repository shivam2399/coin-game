import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import GamePlayScreen from './GamePlayScreen';
import LostScreen from './LostScreen';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginScreen setUser={setUser} />
          </Route>
          <Route path="/gameplay">
            <GamePlayScreen />
          </Route>
          <Route path="/lost">
            <LostScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
