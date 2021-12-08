
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import React from 'react';
// import Navbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Logout from './views/auth/Logout';
import Dashboard from './components/app/Dashboard';

const App = ()=> {
  return (
    <div className="App">
      
      <Router>
      
           <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/logout' element={<Logout />}/>
              <Route path='dashboard' element={<Dashboard/>}/>
           </Routes>

      </Router>
    </div>
  );
}

export default App;
