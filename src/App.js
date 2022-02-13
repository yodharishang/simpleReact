import { hot } from 'react-hot-loader/root';
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./redux/actions/counter"
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import { Home,Blogs,About } from './Pages';

function App(){
  const counter = useSelector( (state) => state.counter);
  const dispatch = useDispatch();
       return (
      <>
      <Home />
      <Blogs />
      <Home />
      <p>aplikasi penjumlahan dan pengurangan </p>
      <button onClick={() => dispatch( increment() )}>tambah 1 </button>
      <button onClick={() => dispatch( decrement() )}>kurang 1 </button>
      nilai saat ini:{counter.value}
      </>
    );
  
}

export default hot(App);
