import React, {Component} from 'react'

class Panel extends Component{
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

export default Panel;