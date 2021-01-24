import React from 'react';

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
  skills: SkillsContainer,
  experience: ExperienceContainer,
  default: () => <div>Erreur 404</div>,
};

const Router = ({ activeRoute }) => {
  const Route = Routes[activeRoute] || Routes.default;
  return <Route />;
};

export default Router;
