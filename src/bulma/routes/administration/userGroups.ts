```typescript
import { RouteConfig } from 'vue-router';
import { requireContext } from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Imports routes dynamically using the provided context.
 *
 * @param {any} context - The context object.
 * @returns {Array<RouteConfig>} - The imported routes.
 */
const importRoutes = (context: any): Array<RouteConfig> => {
  return context.keys().map(context);
};

const routeContext = require.context('./userGroups', false, /.*\.ts$/);
const routes: Array<RouteConfig> = importRoutes(routeContext);
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

/**
 * The User Groups route configuration.
 */
const userGroupsRoute: RouteConfig = {
  path: 'userGroups/',
  component: Router,
  meta: {
    breadcrumb: 'user groups',
    route: 'administration.userGroups.index',
  },
  children: routes,
};

export default userGroupsRoute;
```
As requested, I have converted the code to TypeScript and added relevant documentation and type annotations for each variable and function. The logic of the code remains unchanged.