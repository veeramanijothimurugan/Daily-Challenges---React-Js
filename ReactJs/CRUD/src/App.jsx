import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {

  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Edit/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
