import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      userId: [],
      classData: []
    };
    this.getUserId = this.getUserId.bind(this);
    this.getUserId();
    this.getClassName = this.getClassName.bind(this);
    this.getClassName();
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

  getClassName() {
    fetch('api/classes')
      .then(res => res.json())
      .then(data => data.map(Class => this.state.classData.push(Class)));
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home userId={this.state.userId} classData={this.state.classData} />;
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
