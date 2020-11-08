import React, { useState, useEffect } from 'react';

import { getRouteFromUrl, getBorderPosition } from './utils/navigation';
import Router, { navigationLinks } from './components/Router';

const DEFAULT_ROUTE = navigationLinks[0].id;

const Link = ({ activeRoute, setActiveRoute, id, title }) => (
  <li className={id === activeRoute ? 'active' : ''} onClick={() => setActiveRoute(id)}>
    <a href={`#${id}`}>{title}</a>
  </li>
);

const App = () => {
  const [activeRoute, setActiveRoute] = useState(getRouteFromUrl() || DEFAULT_ROUTE);
  const [borderPosition, setBorderPosition] = useState(getBorderPositionFromLinks(activeRoute));

  useEffect(() => {
    setBorderPosition(getBorderPositionFromLinks(activeRoute));
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

function getBorderPositionFromLinks(activeRoute) {
  return getBorderPosition(navigationLinks, activeRoute);
}
