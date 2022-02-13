import { hot } from 'react-hot-loader/root';
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./redux/actions/counter"
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={() => dispatch( increment() )}>tambah 1 </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"onClick={() => dispatch( decrement() )}>kurang 1 </button>
      nilai saat ini:{counter.value}
      </>
    );
  
}

export default hot(App);
