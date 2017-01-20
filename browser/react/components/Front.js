import React, {Component} from 'react';
import Scrollchor from 'react-scrollchor';


export default function Front (props) {
  return (
    <div id="front" className="container-fluid main">
      <div className="title-block">
        <h1>adam reid.</h1>
        <hr />
        <h2>web developer.</h2>
      </div>
      <Scrollchor to="#profile">
        <div id="down-arrow">
            <span className="bounce glyphicon glyphicon-chevron-down"></span>
        </div>
      </Scrollchor>
    </div>
  );
}