import React, { Component } from 'react';
import './styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Link, NavLink} from 'react-router-dom';
import slush from '../../Pictures/slush.png';
import LinkedIn from '../../Pictures/linkedin.png';
import Twitter from '../../Pictures/twitter.png';

export class Topic extends Component {

  render() {
    return (
      <div className="block-outer block-outer-topic">
        <div className="block-inner block-inner-topic">
          <div className="topic-title-holder">
            <p>{ this.props.topicNumber }. { this.props.topicTitle }</p>
          </div>
          <div className="topic-text-holder">
            <p>{ this.props.topicText }</p>
          </div>
        </div>
      </div>
    );
  }
}

export class Subtopic extends Component {

  render() {
    return (
      <div className="block-outer block-outer-subtopic" >
        <div className="block-inner block-inner-subtopic">
        <div className="subtopic-number-holder">
          <p>{ this.props.subtopicNumber }</p>
        </div>
        <div className="subtopic-title-and-text-outer-holder">
          <div className="subtopic-title-holder">
            <p>{ this.props.subtopicTitle }</p>
          </div>
          <div className="subtopic-text-holder">
            <p>{ this.props.subtopicText }</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export class PicHolder extends Component {

  render() {
    return (
      <div className="block-outer block-outer-picholder">
        <div className="block-inner block-inner-picholder">
          <div className="pic-and-note-holder">
          <div className="pic-holder">
            <img src={ this.props.src } alt={ this.props.alt } />
          </div>
          <div className="picNote-holder">
            { this.props.picNote }
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export class QuoteHolder extends Component {


  render() {
    return (
      <div className="block-outer block-outer-quoteholder">
        <div className="block-inner block-inner-quoteholder">
          <div className="quote-holder">
          <div className="quotation"><i className="fas fa-quote-right fa-3x"></i></div>

            <p>{ this.props.quote }</p>
            <div className="quotation" style={{textAlign: 'right'}}><i className="fas fa-quote-right fa-3x" ></i></div>
          </div>
          <div className="authorName-holder">
            <p>{ this.props.authorName }</p>
          </div>
          <div className="authorTitle-holder">
            <p>{ this.props.authorTitle }</p>
          </div>
        </div>
      </div>
    );
  }
}


export class TextHolder extends Component {

  render() {
    return (
      <div className="block-outer block-outer-textholder">
        <div className="block-inner block-inner-textholder">
          <div className="text-title-holder">
            <p>{ this.props.textTitle }</p>
          </div>
          <div className="text-holder">
            <p>{ this.props.text }</p>
          </div>
        </div>
      </div>
    );
  }
}
export class Footer extends Component {

  render() {
    return (
      <div className="block-outer block-outer-footer">
        <div className="block-inner block-inner-footer">
          <p> The Southeast Asia tech report 2018</p>

        </div>
      </div>
    );
  }
}


export class Button extends Component {

  render() {
    return (

      <div className="block-outer block-outer-button">
        <div className="block-inner block-inner-button">
        <Link to={this.props.next} className="content__title">
          <div className="btn">
            <p>{this.props.buttonText}</p>
          </div>
        </Link>
        </div>
      </div>

    );
  }
}

export class ExploreData extends Component {

  render() {
    return (

      <div className="block-outer block-outer-exploredata">
        <div className="block-inner block-inner-exploredata">
        <Link to={this.props.nextChapter}>
          <div className="arrow">
            <i className="fas fa-arrow-down fa-2x"></i>
          </div>
        </Link>
        </div>
      </div>

    );
  }
}


export class Social extends Component {

  render() {
    return (

      <div className="block-outer-social">
        <div className="block-inner-social">

        <div className="rotation-wrapper-outer">
          <div className="rotation-wrapper-inner">
            <div className="social-text">
              <p>SHARE ARTICLE</p>
            </div>
          </div>
        </div>

          <img className="social-icon" src={LinkedIn} alt="LinkedIn logo" />
          <img className="social-icon" src={Twitter} alt="Twitter logo" />
        </div>
      </div>

    );
  }
}

export class Highchartscomponent extends Component {

  render() {

    return(
      <div className="block-outer block-outer-highcharts" >
      <div className="highcharts-container block-inner" style={{width: '90%' }}>
        <div className="highcharts-title-holder">
          <p>{ this.props.chartsTitle }</p>
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.props.options}
        />
        <div className="highcharts-notes">
          <p> Notes: Really important notes here </p>
          <p> Source: {this.props.source}</p>
        </div>
        </div>
      </div>
    );
  }
}
