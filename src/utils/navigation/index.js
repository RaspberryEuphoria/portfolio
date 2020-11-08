export function getRouteFromUrl() {
  const [, route] = window.location.href.split('#');

  return route || DEFAULT_ROUTE;
}

export function getBorderPosition(activeRoute) {
  const routeIndex = navigationLinks.findIndex(({ id }) => id === activeRoute);

  const borderHeight = 30;
  const borderOffset = routeIndex * 2;

  return routeIndex * borderHeight + borderOffset;
}
