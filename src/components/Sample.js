import React, { Component } from 'react';
import profilePicture from '../../assets/rusiruavb.jpeg';

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">Rusiru is Dope</h1>
        <img src={profilePicture} className="profile-img" alt="rusiru's profile image" />
        <p className="discription">He will never get a girlfriend, just look at that face &#128516;</p>
        <p className="discription">Follow me on GitHub <a href="https://www.github.com/rusiruavb" target="_blank">github.com/rusiruavb</a></p>
        <p className="discription">&#128640; Clone this project and have fun &#128521;</p>
      </div>
    );
  }
}

export default Sample;