import React, { Component } from 'react';
import {Sidenavcontent} from './sidenavcontent.js';
import './styles.css';
import {Link} from 'react-router-dom';


const list = [
{ id:"1", href: "/topics/about", number: "1", title: "About" },
{ id:"2", href: "/topics/tech", number: "2", title: "Tech" },
{ id:"3", href: "/topics/finance", number: "3", title: "Finance" }


]


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

            { list.map( (hash) => <Sidenavcontent key={ hash.id } href={hash.href} number={hash.number} title={hash.title} id={hash.id} /> ) }
          </div>
          </div>
          <div onClick={this.openNav}></div>


        </div>




    );
  }
}
