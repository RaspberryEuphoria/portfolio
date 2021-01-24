import React from 'react';

import ExperienceContainer from '../../containers/ExperienceContainer';
import SkillsContainer from '../../containers/SkillsContainer';

export const navigationLinks = [
  {
    id: 'experience',
    title: 'experience',
  },
  {
    id: 'skills',
    title: 'skills',
  },
  {
    id: 'projects',
    title: 'Projects',
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
