import React from 'react';

import AboutContainer from '../../containers/AboutContainer';
import ExperienceContainer from '../../containers/ExperienceContainer';
import ResumeContainer from '../../containers/ResumeContainer';
import SkillsContainer from '../../containers/SkillsContainer';

export const navigationLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
];

const Routes = {
  about: AboutContainer,
  experience: ExperienceContainer,
  resume: ResumeContainer,
  skills: SkillsContainer,
  default: () => <div>Erreur 404</div>,
};

const Router = ({ activeRoute }) => {
  const Route = Routes[activeRoute] || Routes.default;
  return <Route />;
};

export default Router;
