import React from 'react';
import InfoPanel from './InfoPanel';
import Footer from './Footer';
import Team from './Team';
import Images from '../assets/imgs';

class Body extends React.Component{

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
        <div className="jumbotron">
            <h1 className="content">get work done <span>faster</span>  <br />
            and <span>batter</span> with us
            </h1>
        </div>
      {/* Akhir tampilan Home banner */}


      {/* awal info panel */}
        <div className="info-panel">
          {panelList.map((panelItem, pos) => {
            return(
              <div className="info-card" key={pos}> 
                <InfoPanel 
                  image = {panelItem.image}
                  name = {panelItem.name}
                  text = {panelItem.text}
                />
              </div>
            )
          })
          }
        </div>
      {/* akhir info panel */}


      {/* awal about */}
        <div className="about">
          <div className="container">
            <div className="image">
              <img src={Images.workingImage} alt="" />
            </div>
              <div className="about-text">
                <h2>about</h2>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos veniam modi facilis earum corrupti, praesentium, suscipit adipisci eveniet commodi aliquid at quia neque harum quo possimus magni, itaque reiciendis quas excepturi dolor sunt. Sint modi voluptatem, eius voluptas obcaecati totam, quas id optio culpa facere eveniet amet deleniti rerum enim!</h4>
              </div>
            </div>
        </div>
      {/* akhir about */}

      {/* awal tampilan team support */}
        <Team />
      {/* akhir tampilan team support */}

      {/* awal footer */}
        < Footer />
      
      {/* akhir footer */}
      </>
    )
  }
}

export default Body;