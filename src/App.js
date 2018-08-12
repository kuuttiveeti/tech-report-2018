import React, { Component, Fragment } from 'react';
import { Router, Link, NavLink, Route } from 'react-router-dom';
import {Button} from './Components/contentHolders/contentHolders.js';

import { createBrowserHistory } from 'history'

import {Sidenav} from './Components/navbar/navbar.js';
import {Social} from './Components/contentHolders/contentHolders.js';
import {Landerpage} from './Containers/Content/Landerpage.js';
import './styles.css';
import './scripts.js';

import topics from './topics.js'

//const history = createBrowserHistory()
//history.listen(location => window.scrollTo(0, 0))

const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
})





function Resource({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
  const subTopic = topic.resources.find(({ id }) => id === match.params.subId)

  if (!topic) return null

  return(
    <Fragment>
      { subTopic ?
        <div className="article-holder subtopic-holder">
          <div id="scroll-to-top-article" className="article-holder-article touch">
            { subTopic.content }
            <Social />
          </div>
        </div>
      :
        <div className="article-holder">
          <div className="article-holder-topic touch">
            { topic.content }
          </div>
        </div>
      }
    </Fragment>
  )
}




function Topic ({ match  }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
  return(
    <section className="submenu-and-article-holder">

      <Route path={`${match.path }/:subId?`} component={Resource} />

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

        { topics.map(( { name, id, number}) => (
          <NavLink key={id} to={`/topics/${id}`} activeClassName="selected-menu">
            <div className="number-box number-box-content-itself">
              <div className="number-box-number ">
                <h1>{ number }</h1>
              </div>
              <div className="number-box-title ">
                <h1>{ name }</h1>
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
