import React, { Component } from 'react';

import ProfileHome from './ProfileHome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ProfileHome userId='broadwaycom' />
      </div>
    );
  }
}

export default App;
