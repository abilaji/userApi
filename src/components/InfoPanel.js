import React, { Component } from 'react'
import Images from '../assets/imgs'
import Panel from '../assets/Panel'

class InfoPanel extends Component{
  render(){
    const panelList = [
      { 
        image : `${Images.employeImage}`,
        name : '24 hours',
        text : 'Lorem ipsum dolor sit amet. '
  
      },
      { 
        image : `${Images.docImage}`,
        name : 'image',
        text : 'Lorem ipsum dolor sit amet. '
  
      },
      { 
        image : `${Images.securityImage}`,
        name : 'security',
        text : 'Lorem ipsum dolor sit amet. '
  
      }
    ]
  
    return(
      <>
      {/* Tampilan Home banner */}
        <div className="jumbotron" id="home">
            <h1 className="content">get work done <span>faster</span>  <br />
            and <span>batter</span> with us
            </h1>
        </div>
      {/* awal info panel */}
        <div className="info-panel">
  
          {panelList.map((panelItem, pos) => {
            return(
              <div className="info-card" key={pos}> 
                 <Panel 
                    image = {panelItem.image}
                    name = {panelItem.name}
                    text = {panelItem.text}
                  />
              </div>
              )
            })
          }
        </div>
      < />
      )
    }
  }

  export default InfoPanel;