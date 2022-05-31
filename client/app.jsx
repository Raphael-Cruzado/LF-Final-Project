import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';

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

  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === '') {
  //     return <Catalog />;
  //   }
  //   if (route.path === 'products') {
  //     const productId = route.params.get('productId');
  //     return <ProductDetails productId={productId} />;
  //   }
  //   return <NotFound />;
  // }

  render() {
    return <Home />;
  }
}
