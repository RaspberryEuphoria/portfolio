import React from 'react';

const Link = ({ activeRoute, setActiveRoute, id, title }) => (
  <li className={id === activeRoute ? 'active' : ''} onClick={() => setActiveRoute(id)}>
    <a href={`#${id}`}>{title}</a>
  </li>
);

export default Link;
