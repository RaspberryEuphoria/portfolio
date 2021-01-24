import React, { useState, useEffect } from 'react';

import { getRouteFromUrl, getBorderPosition } from './utils/navigation';
import Router, { navigationLinks } from './components/Router';
import Link from './components/Link';

const DEFAULT_ROUTE = navigationLinks[0].id;

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
            <a href="https://github.com/RaspberryEuphoria" target="_blank">GitHub</a>
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
