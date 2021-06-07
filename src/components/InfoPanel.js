import React from 'react';

class InfoPanel extends React.Component{
  render() {
    return(
      <>
        <img src={this.props.image} alt="" />
        <div className="info-name">
          <h4>{this.props.name}</h4>
          <p>{this.props.text}</p>
        </div>
      < />
    );
  }
}

export default InfoPanel;