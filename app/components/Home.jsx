import React, { Component } from 'react';
import Navbar from './Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>Welcome to my app</div>
      </div>
    )
  }
}

export default Home;
