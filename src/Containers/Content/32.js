import React, { Component } from 'react';
import {Topic, Subtopic, PicHolder, QuoteHolder, TextHolder, Footer,Highchartscomponent, Button} from '../../Components/contentHolders/contentHolders.js';
import './styles.css';



const options = {
  chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
}




export class ChapterThirtyTwo extends Component {

  render() {
    return (

      <section className="Content">
        <div className="content-holder">
        <div className="content-holder-inner fade">


      <Subtopic subtopicNumber={ this.props.number } subtopicTitle={ this.props.name } subtopicText="Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" />

        <TextHolder textTitle="Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaquuptatem quia voluptas " text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem'/>



          <Highchartscomponent source="wikipedia" chartsTitle="Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaquuptatem quia voluptas" options={options}/>


          <QuoteHolder quote='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga' authorName='Veeti' authorTitle='Internet Explorer'/>
          <Button next={ this.props.next } buttonText= { this.props.buttonText } />
          <Footer />
          </div>
        </div>
      </section>

    );
  }
}
