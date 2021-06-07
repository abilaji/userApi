import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&nat=tr")
      .then((res) => res.json())
      .then((parsedJSON) =>
        parsedJSON.results.map((data) => ({
          id: `${data.id.name}`,
          firstName: `${data.name.first}`,
          lastName: `${data.name.last}`,
          thumbnail: `${data.picture.large}`,
          telephone: `${data.phone}`,
          email: `${data.email}`,
          country: `${data.location.country}`,
        }))
      )
      .then((items) =>
        this.setState({
          items,
          isLoaded: false,
        })
      )
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="team-sup">
        <div className="container">
          <h2>member team</h2>
           <div className="row">
            {items.length > 1
              ? items.map((item) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    thumbnail,
                    telephone,
                    email,
                    country,
                  } = item;
                  return (
                    <div key={id} className="card">
                      <img src={thumbnail} alt={firstName} />
                      <div className="card-text">
                        <ul>
                          <li className="name">
                            {firstName} {lastName}
                          </li>
                          <li>{telephone}</li>
                          <li>{email}</li>
                          <li>{country}</li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
