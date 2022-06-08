import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import parseRoute from './lib/parse-route';

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

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'login') {
      return <Login />;
    }
  }

  render() {

    return (
      <>
      {this.renderPage()}
      </>
    );
  }
}
