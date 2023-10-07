/**
 * Import the Index component from the userGroups module.
 */
import { Index as UserGroupIndex } from '../../../pages/userGroups/Index.vue';

/**
 * The user groups index route configuration.
 */
export default {
    /**
     * The name of the route.
     */
    name: 'administration.userGroups.index',

    /**
     * The path for the route.
     */
    path: '',

    /**
     * The component to be rendered for the route.
     */
    component: UserGroupIndex,

    /**
     * Additional metadata for the route.
     */
    meta: {
        /**
         * The breadcrumb for the route.
         */
        breadcrumb: 'index',

        /**
         * The title for the route.
         */
        title: 'User Groups',
    },
};