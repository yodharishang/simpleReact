import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './assets/css/styles.css';

import { Layout,Blogs,Home,Contact,NoPage} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
