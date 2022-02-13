import { hot } from 'react-hot-loader/root';
import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import {Home,Blogs,About,ReduxView,ViewApi} from './Pages';

function App(){
   return (
      <>
      <Home />
      <Blogs />
      <ReduxView/>
      <ViewApi/>
      </>
    );
  
}

export default hot(App);
