import { hot } from 'react-hot-loader/root';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home,Blogs,About } from './Pages';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
    {/* <Home />
        <Blogs />
        <About /> */}
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />}/>
    </Routes>
  </BrowserRouter>
      </>
    );
  }
}

export default hot(App);
