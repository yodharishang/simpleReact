import { hot } from 'react-hot-loader/root';
import React from "react";

import { Home,Blogs,About } from './Pages';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
      <Home />
      <Blogs />
      <About />
      </>
    );
  }
}

export default hot(App);
