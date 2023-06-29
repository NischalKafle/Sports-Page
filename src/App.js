import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MoreInfo from './MoreInfo';
import Main from './Main';
const App = () => {
  
  return (
    <Router>
   <Routes>
  <Route path='/' element={<Main />}/> 
  <Route exact path='/:id' element={<MoreInfo />}/> 
   </Routes>
   </Router>
  );
};

export default App;
