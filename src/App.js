
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'

 export default class Myclass extends Component {
  pageSize = 5;
  apikey="24190186a4ad9852df64967200664340"
  render() {
    return (
      <div>
     <Router>
        <NavBar/>
        <Routes>
  <Route path="/"  element={<News key="general"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
  <Route path="/business" element={<News key="business"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="business" />} />
  <Route path="/entertainment" element={<News key="entertainment"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="entertainment" />} />
  <Route path="/general" element={<News key="general"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
  <Route path="/health" element={<News key="health"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="health" />} />
  <Route path="/science" element={<News key="science"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="science" />} />
  <Route path="/sports" element={<News key="sports"   apikey={this.apikey}pageSize={this.pageSize} country="in" category="sports" />} />
  <Route path="/Technology" element={<News key="Technology"  apikey={this.apikey} pageSize={this.pageSize} language='en' category="Technology" />} />  
  
  <Route path="*" element={<News key="bitcoin"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
</Routes>


     </Router> 
      </div>
    ) 
  } 
}

