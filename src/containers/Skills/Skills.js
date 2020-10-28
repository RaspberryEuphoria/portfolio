import React from 'react';
import sections from './skills.json';

const Skills = () => {
  return (
    <div>
      {sections.map(({ title, skills }) => (
        <>
          <h2>{title}</h2>
          <ul className="skill-list">
            {skills.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </>
      ))}
      <hr />
      <p>
        Beside these skills, I'm particulary fond of functionnal programming, writing clean code,
        refactoring, QA, and SCRUM methodology. I'm always eager to learn new aspects of
        programming!
      </p>
      <p>
        While coding is my passion, I think being a good developer is more than just being a "
        <em>code monkey</em>". This is wht being involved in every aspects of the conception and
        design of a product is really important to me.
      </p>
    </div>
  );
};

export default Skills;
