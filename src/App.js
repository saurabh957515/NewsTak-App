
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
  pageSize = 15;
  apikey="1c9b12e7598146dbb6362bd4475cd15b"
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
  <Route path="/bitcoin" element={<News key="bitcoin"  apikey={this.apikey} pageSize={this.pageSize} language='en' category="bitcoin" />} />  apikey={this.apikey}
  <Route path="*" element={<News key="bitcoin"  apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
</Routes>


     </Router> 
      </div>
    ) 
  } 
}

