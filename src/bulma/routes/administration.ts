/**
 * Import the `routeImporter` function from the `@liberu-ui/ui` package.
 */
import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Import the module routes using the `require.context` API and convert it to an array of routes.
 * @param {NodeModule} module - The module object.
 * @return {Array} - The array of routes.
 */
const importRoutes = (module: NodeModule): Array<Route> => {
  return routeImporter(require.context('./administration', false, /.*\.ts$/));
};

/**
 * The administration module route.
 * @type {Object}
 */
const administrationRoute: Route = {
  path: '/administration',
  children: importRoutes(module),
};

export default administrationRoute;