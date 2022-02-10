import React from "react";
<<<<<<< HEAD
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
=======
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function app() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2 className="text-red">Home</h2>
    </div>
  );
>>>>>>> 7424d5893e43c515f7d8ebabe0c2873486971ce8
}

export default hot(App);