import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import parseRoute from './lib/parse-route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      e.preventDefault();
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  // renderPage() {}

  render() {
    return (
     <Router>
       <div>
         <Switch>
           <Route path="/login">
              <Login />
           </Route>
            <Route path="/home">
              <Home />
            </Route>
         </Switch>
       </div>
     </Router>
    );
  }
}
// <div>
//   <Home />
//   <Login />
// </div>
