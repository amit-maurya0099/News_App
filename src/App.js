import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=20;
  // country="in"
  render() {
    return (
      <div> 
        <Router>
        <NavBar/>
       <Routes>
          <Route exact path="/business"  element={<News pageSize={this.pageSize} key="business"  country={this.country} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News pageSize={this.pageSize}  key="entertainment" country={this.country} category="entertainment"/>}></Route>
          <Route exact path="/"  element={<News pageSize={this.pageSize} key="general" country={this.country} category="general"/>}></Route>
          <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" country={this.country} category="health"/>}></Route>
          <Route exact path="/science"  element={<News pageSize={this.pageSize}  key="science" country={this.country} category="science"/>}></Route>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports"  country={this.country} category="sports"/>}></Route>
          <Route exact path="/technology"  element={<News pageSize={this.pageSize} key="technology" country={this.country} category="technology"/>}></Route>   
          </Routes>
       </Router>
      </div>
    )
  }
}


