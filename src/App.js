import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import {HashLink as Link} from 'react-router-hash-link'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import TeamPage from './components/TeamPage'
import FooterPage from './components/FooterPage'
import InfoPanel from './components/InfoPanel'
import '../src/style/app.scss'

class App extends Component {
  render(){
    return (
      <>
        <Router>
          <Route exact path="/userApi" component={HomePage} />
          <Route path="#home" component={InfoPanel} />
          <Route path="#about" component={AboutPage} />
          <Route path="#team" component={TeamPage} />
          <Route path="#contact" component={FooterPage} />
        </Router>
      </>
    );
  }
}

export default App;
