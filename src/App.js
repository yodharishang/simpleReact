import React from 'react';
import './assets/css/styles.css';
const App = ({ title }) => <div className="flex ">
  <div className="flex-none w-14 h-14 bg-green">
    01
  </div>
  <div className="grow h-14 ">
    02
  </div>
  <div className="flex-none w-14 h-14 ">
    03
  </div>
  <p>{title}</p>
</div>

export default App;
