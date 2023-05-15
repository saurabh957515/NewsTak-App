
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';

  const Myclass  = (props) => {
 const pageSize = 5;
 const apikey="c721980036cc44a9aa8efdaf46c68023"
    return (
      <div>
     <Router>
        <NavBar/>
        <Routes>
  <Route path="/"  element={<News key="general"  apikey={apikey} pageSize={pageSize} country="in" category="General" />} />
  <Route path="/business" element={<News key="business"  apikey={apikey} pageSize={pageSize} country="in" category="Business" />} />
  <Route path="/entertainment" element={<News key="entertainment"  apikey={apikey} pageSize={pageSize} country="in" category="Entertainment" />} />
  <Route path="/general" element={<News key="general"  apikey={apikey} pageSize={pageSize} country="in" category="General" />} />
  <Route path="/health" element={<News key="health"  apikey={apikey} pageSize={pageSize} country="in" category="Health" />} />
  <Route path="/science" element={<News key="science"  apikey={apikey} pageSize={pageSize} country="in" category="Science" />} />
  <Route path="/sports" element={<News key="sports"   apikey={apikey}pageSize={pageSize} country="in" category="Sports" />} />
  <Route path="/Technology" element={<News key="Technology"  apikey={apikey} pageSize={pageSize} language='en' category="Technology" />} />  
  
  <Route path="*" element={<News key="bitcoin"  apikey={apikey} pageSize={pageSize} country="in" category="General" />} />
</Routes>


     </Router> 
      </div>
    ) 
  } 
  export default Myclass


