import React from 'react';
import sections from './experiences.json';


const ExperienceContainer = () => {
  return <div>
      {sections.map(({ title, stack, duration, description, tasks }) => (
        <React.Fragment key={title}>
          <h2>{title}<span>{duration}</span></h2>
          <p dangerouslySetInnerHTML={{__html: description}}></p>

          <ul className="inline-list">
            <li className="list-title"><strong>Technology Stack</strong>:</li>
            {stack.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>

          <ul className="regular-list">
            {tasks.map(({ id, description }) => (
              <li key={id} dangerouslySetInnerHTML={{__html: description}}></li>
            ))}
          </ul>
        </React.Fragment>
      ))}
  </div>;
};

export default ExperienceContainer;
