import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Front from './Front';
import Profile from './Profile';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';

export default function (props) {
  const styleOptions = {
    top: '80px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  }

  return (
    <div id="main">
      <StickyContainer>
        <Front />
        <Sticky topOffset={-80} stickyStyle={styleOptions}>
          <Nav />
        </Sticky>
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </StickyContainer>
    </div>
  );
}