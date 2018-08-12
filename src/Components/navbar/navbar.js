import React, { Component } from 'react';
import {Sidenavcontent} from './sidenavcontent.js';
import './styles.css';
import {Link} from 'react-router-dom';

import topics from '../../topics.js'



export class Sidenav extends Component {
  closeNav(){
       document.getElementById("mySidenav").className = "sidenav-hidden";
  }

    render() {
      return(
        <div>
        <div id="mySidenav" className="sidenav-hidden">
          <div className="sidenav-inner-container">


          <div className="sidenav-sea-box" >
          <Link to="/">
            <div className="sidenav-title sidenav-sea-title">
                <p>SOUTHEAST ASIAN TECH REPORT</p>

            </div>
          </Link>
            <div className="sidenav-sea-number " onClick={this.closeNav}>
              <i className="fas fa-times"></i>
            </div>


          </div>

            { topics.map( (hash) => <Sidenavcontent key={ hash.id } href={`/topics/${hash.id}`} number={hash.number} title={hash.name} id={hash.id} /> ) }
          </div>
          </div>
          <div onClick={this.openNav}></div>


        </div>




    );
  }
}
