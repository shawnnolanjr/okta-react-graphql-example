import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ImplicitCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Points from './Points';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
	      <Security issuer='https://dev-742873.oktapreview.com/oauth2/default'
	                client_id='0oafh6daewbSxTSvp0h7'
	                redirect_uri={'http://localhost:3000/implicit/callback'}
	                onAuthRequired={onAuthRequired}>
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/points' component={Points}/>
          <Route path='/login' render={() => <Login baseUrl='https://dev-669532.oktapreview.com'/>}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;