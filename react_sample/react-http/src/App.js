import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PostList'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
function App() {
  return (
    <div className="App">
     {/* <PostList /> */}
     <PostForm />
    </div>
  );
}

export default App;
