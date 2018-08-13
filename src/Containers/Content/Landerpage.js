import React, { Component } from 'react';
import {Topic, Subtopic, PicHolder, QuoteHolder, TextHolder, Footer} from '../../Components/contentHolders/contentHolders.js';
import {Link} from 'react-router-dom';
import './glitchstyles.css';

import slush from '../../Pictures/slush_logo_white.png';
import monk from '../../Pictures/monk_white.png';


export class Landerpage extends Component {

  render() {
    return (

    <section className="Content">
      <div className="content-holder content-holder-landerpage">

            <div className="glitch">
      					<div className="glitch_bg"></div>


                <div className="content-middle">
                <div className="block-slush">
                  <p>Report is produced by</p>
                  <div className="logo-holder "><img alt="slush-logo" src={ slush } /></div>
                  <div className="logo-holder logo-holder-monk "><img alt="monkhill-logo" src={ monk } /></div>
                </div>

                <div className="block-title glitch_content">
                  <p>STATE OF</p>
                  <p>SOUTHEAST</p>
                  <p>ASIAN TECH</p>
                  <h1>2018</h1>
                </div>
                <Link to="/topics/about">
                <div className="block-button">
                  <div className="btn">
                    <p>Explore data</p>
                  </div>
                </div>
                </Link>
                </div>


            </div>

        </div>
      </section>
    );
  }
}
