
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

import React, { Component } from 'react'

 export default class   extends Component {
  render() {
    return (
      <div>
     
        <NavBar/>
        <News/>
      </div>
    )
  } 
}

