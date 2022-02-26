import './App.css';
import React , { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/nav.js';
// import Todo from './todos';
// import Item from './component/item.js'


import Home from './component/home.js';
import About from './component/about.js';
import  NotFound  from './component/not';
import Blog from './component/blog';
import Posts from './component/post';

class App extends Component {

  state = {

    items: [
      { id: 1, name: "youssef", age: 25 },
      { id: 2, name: "youness", age: 27 },
      { id: 3, name: "amine", age: 24 },
      { id: 4, name: "mohamed", age: 27 },
      { id: 5, name: "yassir", age: 25 },
    ],
    name: 1
  };

  // print = () => {
  //   this.setState((s) => {
  //     // s.name + 1
  //   })
  // }
  render() {

    // this.state.items.push({ id: 6, name: "reda", age: 32 },) // add to last of to array
    // this.state.items.unshift({ id: 7, name: "ilyas", age: 31 },) //add in first of to array
    return (
      <BrowserRouter>
        <div>

          <Nav />
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/post/:id" element={<Posts/>} />
          <Route path='*' exact={true} element={<NotFound/>} />
          </Routes>

          {/* <Item items={this.state.items} />,

          <Todo />
          <p>{this.state.name}</p> */}
          {/* <button onClick={this.print}>Clique</button> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
