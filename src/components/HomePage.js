import React, {Component} from 'react';
import Navbar from './Navbar';
import InfoPanel from './InfoPanel';
import Footer from './FooterPage';
import Team from './TeamPage';
import About from './AboutPage';

class HomePage extends Component{
  render(){
    return(
      <> 
        <Navbar />
        <InfoPanel />
        <About />
        <Team />
        <Footer />
      </>
    )
  }
}

export default HomePage;