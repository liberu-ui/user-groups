import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./userGroups', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'userGroups/',
    component: Router,
    meta: {
        breadcrumb: 'user groups',
        route: 'administration.userGroups.index',
    },
    children: routes,
};
