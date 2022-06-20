import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: [],
      classData: [],
      deckData: []
    };
    this.getUser = this.getUser.bind(this);
    this.getClassData = this.getClassData.bind(this);
    this.getDeckData = this.getDeckData.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getClassData();
    window.addEventListener('hashchange', e => {
      e.preventDefault();
      this.setState({ route: parseRoute(window.location.hash) });
    });

  }

  getUser() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => data.map(user => this.state.user.push(user)));
  }

  getClassData() {
    fetch('api/classes')
      .then(res => res.json())
      .then(data => data.map(Class => this.state.classData.push(Class)));
  }

  getDeckData() {
    fetch('/api/decks')
      .then(res => res.json())
      .then(data => data.map(deck => this.state.deckData.push(deck)));
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home
      user={this.state.user}
      classData={this.state.classData}
      />;
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
