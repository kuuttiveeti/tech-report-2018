import React, { Component } from 'react';
import {Topic, Subtopic, PicHolder, QuoteHolder, TextHolder, Footer, Button, ExploreData} from '../../Components/contentHolders/contentHolders.js';








export class ChapterThirty extends Component {

  render() {
    return (
      <section className="Content">
        <div className="content-holder-topic">
        <div className="content-holder-inner fade">

        <Topic topicNumber={this.props.topicNumber} topicTitle={this.props.topicTitle} topicText={this.props.topicText} />

      
        <ExploreData nextChapter={ this.props.nextChapter } />

        </div>
        </div>
      </section>

    );
  }
}
