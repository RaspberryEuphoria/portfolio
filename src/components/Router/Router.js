import React from 'react';

import AboutContainer from '../../containers/AboutContainer';
import ExperienceContainer from '../../containers/ExperienceContainer';
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
];

const Routes = {
  about: AboutContainer,
  skills: SkillsContainer,
  experience: ExperienceContainer,
  default: () => <div>Erreur 404</div>,
};

const Router = ({ activeRoute }) => {
  const Route = Routes[activeRoute] || Routes.default;
  return <Route />;
};

export default Router;
