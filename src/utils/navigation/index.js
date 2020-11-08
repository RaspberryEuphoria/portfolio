export function getRouteFromUrl() {
  const [, route] = window.location.href.split('#');

  return route;
}

export function getBorderPosition(navigationLinks, activeRoute) {
  const routeIndex = navigationLinks.findIndex(({ id }) => id === activeRoute);

  const borderHeight = 30;
  const borderOffset = routeIndex * 2;

  return routeIndex * borderHeight + borderOffset;
}
