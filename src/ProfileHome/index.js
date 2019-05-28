import React, { Component } from 'react';

import FavoriteShows from '../FavoriteShows';
class ProfileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.getFavoriteShowsByUserId(this.props.userId);
  }

  getFavoriteShowsByUserId(userId) {
    console.log(userId);
    // Fake BAPI
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json =>
        this.setState({
          data: json
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data === null ? (
          <p>Loading shows...</p>
        ) : (
          <FavoriteShows shows={data} />
        )}
      </div>
    );
  }
}

export default ProfileHome;
