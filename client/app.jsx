import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      userId: []
    };
    this.getUserId = this.getUserId.bind(this);
    this.getUserId();
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      e.preventDefault();
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  getUserId() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => data.map(user => this.state.userId.push(user.userId)));
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home userId={this.state.userId} />;
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
