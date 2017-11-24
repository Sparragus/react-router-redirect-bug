import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

function Users () {
  return (
    <div>
      <h1>Users</h1>

      <ul>
        <li>
          <Link to='/users/sparragus'>
            See @sparragus profile
          </Link>
        </li>

        <li>
          <Link to='/profile/horse_js'>
            See @horse_js profile (should redirect from /profile/horse_js to /users/horse_js)
          </Link>
        </li>
      </ul>
    </div>
  )
}

function Profile ({ match }) {
  return (
    <div>
      <h1>
        Profile of {match.params.username}
      </h1>

      <p>
        Go back to the list of <Link to='/users'>users</Link>.
      </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect from='/profile/:username' to='/users/:username' />
            <Route path='/users/:username' component={Profile} />
            <Route path='/users' component={Users} />
            <Redirect from='/' to='/users' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
