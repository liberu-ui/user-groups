const UserGroupIndex = () => import('../../../pages/userGroups/Index.vue');

export default {
    name: 'administration.userGroups.index',
    path: '',
    component: UserGroupIndex,
    meta: {
        breadcrumb: 'index',
        title: 'User Groups',
    },
};
