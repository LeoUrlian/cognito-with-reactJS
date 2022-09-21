import React from 'react';

import { Account } from './Account';
import Login from './Login';
import Settings from './Settings';
import SignUp from './SignUp';
import Status from './Status';

import "./App.css"

const App = () => {
  return (
    <Account>
      <Status />
      <br />
      <SignUp />
      <br />
      <Login />
      <br />
      <Settings />
    </Account>
  )
}

export default App;
