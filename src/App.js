import { hot } from 'react-hot-loader/root';
import React from "react";

import { Home,Blogs } from './Pages';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
      <Home />
      <Blogs />
      </>
    );
  }
}

export default hot(App);
