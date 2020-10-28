import React, { useState, useEffect } from 'react';
import Experience from './containers/Experience';
import Skills from './containers/Skills';

const navigationLinks = [
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
  skills: Skills,
  experience: Experience,
  default: () => <div>Erreur 404</div>,
};

const DEFAULT_ROUTE = navigationLinks[0].id;

const Router = ({ activeRoute }) => {
  const Route = Routes[activeRoute] || Routes.default;
  return <Route />;
};

const Link = ({ activeRoute, setActiveRoute, id, title }) => (
  <li className={id === activeRoute ? 'active' : ''} onClick={() => setActiveRoute(id)}>
    <a href={`#${id}`}>{title}</a>
  </li>
);

const App = () => {
  const [activeRoute, setActiveRoute] = useState(getRouteFromUrl());
  const [borderPosition, setBorderPosition] = useState(getBorderPosition(activeRoute));

  useEffect(() => {
    setBorderPosition(getBorderPosition(activeRoute));
  }, [activeRoute]);

  return (
    <>
      <nav className="navigation">
        <ul>
          <div className="active-border" style={{ top: `${borderPosition}px` }}></div>
          {navigationLinks.map((link) => (
            <Link
              key={link.id}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
              {...link}
            />
          ))}
          <li>
            <a href="#github">GitHub</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <Router activeRoute={activeRoute} />
      </section>
    </>
  );
};

export default App;

function getRouteFromUrl() {
  const [, route] = window.location.href.split('#');

  return route || DEFAULT_ROUTE;
}

function getBorderPosition(activeRoute) {
  const routeIndex = navigationLinks.findIndex(({ id }) => id === activeRoute);

  const borderHeight = 30;
  const borderOffset = routeIndex * 2;

  return routeIndex * borderHeight + borderOffset;
}
