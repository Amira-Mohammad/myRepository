import React , {Component} from 'react';


import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  render(){
    return (
      <div className="Navbar">
      <div>


      </div>
      <div>MASTERCLASS</div>
        
        <div className="searchLogin" >
          <span>
            <a className="search" >Search</a>
            <a className="login">login</a>
            </span>  
        </div>
      </div>
    );

  }
 
}

export default Navbar;
