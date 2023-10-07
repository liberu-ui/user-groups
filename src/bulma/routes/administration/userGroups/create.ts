import { RouteConfig } from 'vue-router';
import CreateUserGroup from '../../../pages/userGroups/Create.vue';

/**
 * Represents the configuration for creating a new user group.
 */
const userGroupCreateRoute: RouteConfig = {
  /**
   * The name of the route.
   */
  name: 'administration.userGroups.create',

  /**
   * The path of the route.
   */
  path: 'create',

  /**
   * The component to be rendered for this route.
   */
  component: CreateUserGroup,

  /**
   * Additional metadata for this route.
   */
  meta: {
    /**
     * The breadcrumb text for this route.
     */
    breadcrumb: 'create',

    /**
     * The title of the page.
     */
    title: 'Create User Group',
  },
};

export default userGroupCreateRoute;