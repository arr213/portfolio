import React, {Component} from 'react';
import Scrollchor from 'react-scrollchor';

export default function Nav (props) {
  return (
    <div id="nav-container">
      <Scrollchor to="#profile">
          <div className="section-nav">
              <h4>profile</h4>
          </div>
      </Scrollchor>
      <Scrollchor to="#experience">
          <div className="section-nav">
              <h4>experience</h4>
          </div>
      </Scrollchor>
      <Scrollchor to="#skills">
          <div className="section-nav">
              <h4>skills</h4>
          </div>
      </Scrollchor>
      <Scrollchor to="#contact">
          <div className="section-nav">
              <h4>contact</h4>
          </div>
      </Scrollchor>
  </div>
  );
}