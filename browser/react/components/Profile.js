import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';


export default function Profile (props) {
  // var styleOptions = {border: '1px solid black'};
  return (
    <div id="profile" className="container-fluid main">
      <div className="title-block">
        <h1>profile</h1>
        <hr />
        <h2>I am a fullstack web developer.</h2>
        <div id="profile-picture" className="col-md-5">
          <img src="/images/adam.jpg" />
        </div>
        <div className="col-md-7">
          <p>ABOUT ME</p>
        </div>
      </div>

    </div>
  );
}