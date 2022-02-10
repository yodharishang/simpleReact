import React from "react";
import { hot } from 'react-hot-loader/root';
import { Home } from './Pages';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
      <Home />
        <h1 className="text-4xl text-white bg-red-100">
          Hello  {name}, apa kabar????
        </h1>
      </>
    );
  }
}

export default hot(App);