import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>
            <h1>Home Page</h1>
        </Link>
      </nav>
    )
  }
}

export default Navbar;
