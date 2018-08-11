import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Sidenavcontent extends Component {
  closeNav(){
       document.getElementById("mySidenav").className = "sidenav-hidden";
  }
  render() {
    return(
        <Link to={ this.props.href } onClick={this.closeNav}>
          <div className="sidenav-box">
            <div className="sidenav-number col-3">
              <h1>{ this.props.number } </h1>

            </div>
            <div className="sidenav-title col-9">
              <h1> { this.props.title } </h1>
            </div>
          </div>
        </Link>
    );
  }
}
