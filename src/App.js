import React, { Component, browserHistory } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import {Button} from './Components/contentHolders/contentHolders.js';


import {Sidenav} from './Components/navbar/navbar.js';
import {Social} from './Components/contentHolders/contentHolders.js';
import {Landerpage} from './Containers/Content/Landerpage.js';
import {ChapterTen} from './Containers/Content/10.js';
import {ChapterTwenty} from './Containers/Content/20.js';
import {ChapterThirty} from './Containers/Content/30.js';
import {ChapterThirtyOne} from './Containers/Content/31.js';
import {ChapterThirtyTwo} from './Containers/Content/32.js';
import {ChapterThirtyThree} from './Containers/Content/33.js';
import './styles.css';
import './scripts.js';

//const history = createBrowserHistory()
//history.listen(location => window.scrollTo(0, 0))

const topics = [
{
  name: 'Welcome',
  number: 1,
  id: 'about',
  next:"/topics/tech",
  buttonText:"Next Chapter",
  content: <ChapterTen topicNumber="1" topicTitle="Welcome" topicTitle="asd" topicText="juku"  nextChapter="/topics/about/general-information-regarding-this-page" next="/topics/tech" buttonText="Next Chapter" />,

  resources: [
    {
      name: 'General information regarding this page',
      id: 'general-information-regarding-this-page',
      subnumber: 1.1,
      content: <ChapterThirtyOne number="1.1" name="General information regarding this page" next="/topics/about/contributions-and-partners" buttonText="Next article" />

    },
    {
      name: 'Contributions and partners',
      id: 'contributions-and-partners',
      subnumber: 1.2,
      content: <ChapterThirtyTwo number="1.2" name="Dispurtion in magazine and tech business" next="/topics/tech"  buttonText="Next Chapter" />

    }
  ]
},
{
  name: 'Tech',
  number: 2,
  id: 'tech',
  next:"/topics/finance",
  buttonText:"Next Chapter",
  content: <ChapterTwenty topicNumber="2" topicTitle="Tech" topicText="Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" nextChapter="/topics/tech/tech-in-promising-startups-withouth-massive-ico" next="/topics/finance" buttonText="Next article"/>,

  resources: [
    {
      name: 'Tech in promising startups withouth massive ICO',
      id: 'tech-in-promising-startups-withouth-massive-ico',
      subnumber: 2.1,
      content: <ChapterThirtyOne number="2.1" name="Tech in promising startups withouth massive ICO" next="/topics/tech/unicorn-and-7-eleven-sandwiches" buttonText="Next article" />

    },
    {
      name: 'Unicorn and 7-eleven sandwiches',
      id: 'unicorn-and-7-eleven-sandwiches',
      subnumber: 2.2,
      content: <ChapterThirtyTwo number="2.2" name="Unicorn and 7-eleven sandwiches" next="/topics/tech/dogs-in-developer-unique-startup-culture" buttonText="Next article" />

    },
    {
      name: 'Dogs in developer unique startup culture',
      id: 'dogs-in-developer-unique-startup-culture',
      subnumber: 2.3,
      content: <ChapterThirtyThree number="2.3" name="Dogs in developer unique startup culture" next="/topics/finance" buttonText="Next Chapter" />

    }
  ]
},
{
  name: 'Finance',
  number: 3,
  id: 'finance',
  next:"/topics/about",
  buttonText:"Next Chapter",
  content: <ChapterThirty topicNumber="3" topicTitle="Finance" topicText="Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemm eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" nextChapter="/topics/finance/future-of-dispruptive-blockchain-data-driven-redefining-unicorns" next="/topics/about" buttonText="Next article"/>,
  text: 'Declarative, component based routing for React',

  resources: [
    {
      name: 'Future of dispruptive blockchain data-driven redefining unicorns',
      id: 'future-of-dispruptive-blockchain-data-driven-redefining-unicorns',
      subnumber: 3.1,
      content: <ChapterThirtyOne number="3.1" name="Future of dispruptive blockchain data-driven redefining unicorns" next="/topics/finance/dispurtion-in-magazine-and-tech-business" buttonText="Next article" />

    },
    {
      name: 'Dispurtion in magazine and tech business',
      id: 'dispurtion-in-magazine-and-tech-business',
      subnumber: 3.2,
      content: <ChapterThirtyTwo number="3.2" name="Dispurtion in magazine and tech business" next="/topics/finance/cats-in-design-lead-startup-culture" buttonText="Next article" />

    },
    {
      name: 'Cats in design lead startup culture',
      id: 'cats-in-design-lead-startup-culture',
      subnumber: 3.3,
      content: <ChapterThirtyThree number="3.3" name="Cats in design lead startup culture" next="/topics/about" buttonText="Next Chapter" />

    }
  ]
},

]



function Resource({ match }) {


  const topic = topics.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subId)



  return(

    <div id="scroll-to-top-article" className="article-holder-article touch">{topic.content}
    <Social />
    </div>


  )
}




function Topic ({ match  }) {

  const topic = topics.find(({ id }) => id === match.params.topicId)
  return(

    <section className="submenu-and-article-holder">



      <div className="submenu-holder">
      <ul>
      <NavLink to={`${match.url }`}>
      <div className="subtitle-box subtitle-box-subtitle">
        <div className="subtopic-wrapper">
          <p>{match.params.topicId}</p>
        </div>
      </div>
      </NavLink>

        {topic.resources.map((sub) => (
        <li key={sub.id}>
          <NavLink to={`${match.url }/${sub.id}`} activeClassName="selected-submenu">
          <div className="subtitle-box fade">
          <div className="number-wrapper">
            {sub.subnumber}
          </div>
            <div className="text-wrapper">
              {sub.name}
            </div>
          </div>
          </NavLink>
        </li>
        ))}
        </ul>

      </div>

      <div className="article-holder">
        <Route path={`${match.path }/:subId`} component={Resource} />


          <div className="article-holder-topic touch">
          {topic.content}
          <div className="submenu-holder2">

          <ul>

            {topic.resources.map((sub) => (
            <li key={sub.id}>
              <Link to={`${match.url }/${sub.id}`}>
              <div className="subtitle-box">
              <div className="number-wrapper">
                {sub.subnumber}
              </div>
                <div className="text-wrapper">
                  {sub.name}
                </div>
              </div>
              </Link>
            </li>

            ))}
            <li>

                <div className="subtitle-box-for-button">

                     <Button next={ topic.next } buttonText= { topic.buttonText } />

                </div>

            </li>
            </ul>
          </div>





        </div>
        </div>

      </section>


  )
}





function Topics ({ match  }) {
  function openNav(){
       document.getElementById("mySidenav").className = "sidenav-visible";

  }


  return (
    <section className="menu-and-topic-holder">
      <Sidenav />

      <div className="menu-holder">

      <div className="number-box number-box-navmenu" onClick={openNav}>
        <i className="fas fa-bars"></i>

      </div>

        {topics.map(({ name, id, number}) => (

          <NavLink key={id} to={`${match.url }/${id}`} activeClassName="selected-menu">
            <div className="number-box number-box-content-itself">

            <div className="number-box-number ">
                <h1>
                 {number}
                </h1>
            </div>

                        <div className="number-box-title ">
                            <h1>
                             {name}
                            </h1>
                        </div>



            </div>

          </NavLink>

          ))}

        </div>
        <div className="topic-holder">
          <Route path={`${match.path}/:topicId`} component={Topic} />
        </div>
      </section>
  )
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
            <ul>
              <li><Link to='/'></Link></li>
              <li><Link to='/topics'></Link></li>
            </ul>

          <Route exact path='/' component={Landerpage} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>


    )
  }
}

export default App;
