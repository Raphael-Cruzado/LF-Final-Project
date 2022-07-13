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
      deckData: [],
      cardData: []
    };
    this.getUser = this.getUser.bind(this);
    this.getClassData = this.getClassData.bind(this);
    this.getDeckData = this.getDeckData.bind(this);
    this.getCardData = this.getCardData.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getClassData();
    this.getDeckData();
    this.getCardData();
    window.addEventListener('hashchange', e => {
      e.preventDefault();
      this.setState({ route: parseRoute(window.location.hash) });
    });

  }

  getUser() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => this.setState({ user: data }));
  }

  getClassData() {
    fetch('api/classes')
      .then(res => res.json())
      .then(data => this.setState({ classData: data }));
  }

  getDeckData() {
    fetch('/api/decks')
      .then(res => res.json())
      .then(data => this.setState({ deckData: data }));
  }

  getCardData() {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => this.setState({ cardData: data }));
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === ' ') {
      return <Home
      user={this.state.user}
      classData={this.state.classData}
      deckData={this.state.deckData}
      cardData={this.state.cardData}
      />;
    }
    if (route.path === 'login') {
      return <Login />;
    }
  }

  render() {
    console.log(this.state.classData);
    return (
      <>
      {this.renderPage()}
      </>
    );
  }
}
