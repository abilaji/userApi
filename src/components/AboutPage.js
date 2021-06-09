import React from 'react'
import Images from '../assets/imgs';

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about" id="about">
          <div className="container">
            <div className="image">
              <img src={Images.workingImage} alt="" />
            </div>
            <div className="about-text">
              <h2>about</h2>
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos veniam modi facilis earum corrupti, praesentium,
                suscipit adipisci eveniet commodi aliquid at quia neque harum
                quo possimus magni, itaque reiciendis quas excepturi dolor sunt.
                Sint modi voluptatem, eius voluptas obcaecati totam, quas id
                optio culpa facere eveniet amet deleniti rerum enim!
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
