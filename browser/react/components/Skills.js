import React, {Component} from 'react';
import skillList from '../utilities/skill-list';
// import SkillUL from './SkillUL';


export default function Skills (props) {

  const liFunc = (skill, idx) => {
    return (
      <li key={idx}>{skill.name}</li>
    )
  }

  const proficientList = skillList.proficient.map(liFunc);
  // const knowledgableList;

  return (
    <div id="skills" className="container-fluid main">
      <div className="title-block">
          <h1>skills</h1>
          <hr />
          <div className="col-md-4 col-md-2-offset">
            <h4>Proficient</h4>
            <ul>
              {proficientList}
            </ul>
          </div>
      </div>
    </div>
  );
}