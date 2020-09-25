import React, { Component } from 'react';
import './index.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
      
          <h2>My Dragon Pal and Me Blog</h2>
          <a href="https://master.d1ttwps82uhiym.amplifyapp.com/" class="button">Dragon Pals Home</a>
        </div>
        <div className="blog-wrapper">
          {this.props.children}
        </div>
     
      </div>
    );
  }
}

export default App;