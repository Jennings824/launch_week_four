import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="app">
        <div className='nav-bar'>
          <Link to='/'> Home</Link>
          <Link to='/custom-greeting'> Custom Greeting</Link>
          <Link to='/goodbye'>Goodbye</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default NavBar;
